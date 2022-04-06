import { Component, ViewChild, ViewChildren } from '@angular/core';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import EditGridComponent from 'formiojs/components/editgrid/EditGrid.js';
import Components from 'formiojs/components/Components';
import isString from 'lodash/isString';
var EditRowState;
(function (EditRowState) {
    EditRowState["NEW"] = "new";
    EditRowState["EDITING"] = "editing";
    EditRowState["SAVED"] = "saved";
    EditRowState["REMOVED"] = "removed";
    EditRowState["DRAFT"] = "draft";
})(EditRowState || (EditRowState = {}));
;
/* tslint:disable no-bitwise only-arrow-functions */
const hashCode = function (str) {
    let hash = 0;
    let i = 0;
    let chr;
    str = str.replace(/\s/g, '');
    if (str.length === 0) {
        return hash;
    }
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
const ɵ0 = hashCode;
/* tslint:enable no-bitwise only-arrow-functions */
// Do nothing to createRowComponents, let mat-formio handle it.
/* tslint:disable only-arrow-functions */
EditGridComponent.prototype.createRowComponents = function () {
    return [];
};
const checkRow = EditGridComponent.prototype.checkRow;
EditGridComponent.prototype.checkRow = function (data, editRow, flags = {}) {
    if (flags.checkRow) {
        return checkRow.call(this, data, editRow, flags);
    }
    else {
        return true;
    }
};
/* tslint:enable only-arrow-functions */
const DEFAULT_HEADER_TEMPLATES = [
    hashCode(EditGridComponent.defaultHeaderTemplate),
    hashCode(`
  <div class="row">
    {% (components || []).forEach(function(component) { %}
      <div class="col-sm-2">{{ component.label }}</div>
    {% }) %}
  </div>`)
];
const DEFAULT_ROW_TEMPLATES = [
    hashCode(EditGridComponent.defaultRowTemplate),
    hashCode(`<div class="row">
  {% util.eachComponent(components, function(component) { %}
    <div class="col-sm-2">
      {{ getView(component, row[component.key]) }}
    </div>
  {% }) %}
  {% if (!instance.options.readOnly) { %}
    <div class="col-sm-2">
      <div class="btn-group pull-right">
        <button class="btn btn-default btn-sm editRow">Edit</button>
        <button class="btn btn-danger btn-sm removeRow">Delete</button>
      </div>
    </div>
  {% } %}
</div>`)
];
export class MaterialEditGridComponent extends MaterialNestedComponent {
    constructor() {
        super(...arguments);
        this.columns = {};
        this.colWidth = 0;
        this.valid = true;
        this.RowStates = EditRowState;
    }
    getRowTemplate(content) {
        return `<mat-list style="display: flex;">
      {% (components || []).forEach(function(component) { %}
        {% if (!component.hasOwnProperty('tableView') || component.tableView) { %}
          <mat-list-item style="width: {{ colWidth }}%; margin: 0 0.8rem">${content}</mat-list-item>
        {% } %}
      {% }) %}
    </mat-list>`;
    }
    validate(index) {
        if (!this.forms) {
            return;
        }
        const forms = this.forms.toArray();
        if (!forms[index]) {
            return;
        }
        const formioComponent = forms[index];
        const { data } = formioComponent.formio.submission;
        const isInvalid = Object.keys(data).some(value => isString(data[value]) && data[value].length === 0);
        if (isInvalid) {
            this.valid = false;
        }
        else {
            this.valid = true;
        }
    }
    setInstance(instance) {
        if (instance.component.templates.header &&
            (DEFAULT_HEADER_TEMPLATES.indexOf(hashCode(instance.component.templates.header)) !== -1)) {
            instance.component.templates.header = this.getRowTemplate('{{ component.label }}');
        }
        if (instance.component.templates.row &&
            (DEFAULT_ROW_TEMPLATES.indexOf(hashCode(instance.component.templates.row)) !== -1)) {
            instance.component.templates.row = this.getRowTemplate('{{ getView(component, row[component.key]) }}');
        }
        this.displayedColumns = instance.component.components.map((comp) => {
            if (comp.hasOwnProperty('tableView') && !comp.tableView) {
                return false;
            }
            this.columns[comp.key] = comp;
            return comp.key;
        }).filter(name => !!name);
        const dataValue = instance.dataValue || [];
        this.colWidth = instance.component.components.length ? Math.floor(100 / instance.component.components.length) : 100;
        if (instance.component.templates && instance.component.templates.header) {
            this.header = instance.renderString(instance.component.templates.header, {
                components: instance.component.components,
                value: dataValue,
                colWidth: this.colWidth
            });
        }
        if (instance.component.templates && instance.component.templates.footer) {
            this.footer = instance.renderString(instance.component.templates.footer, {
                components: instance.component.components,
                value: dataValue,
                colWidth: this.colWidth
            });
        }
        setTimeout(() => {
            this.renderTemplate(this.headerElement, this.header);
            this.renderTemplate(this.footerElement, this.footer);
        }, 0);
        super.setInstance(instance);
    }
    addAnother() {
        const row = this.instance.addRow();
    }
    editRow(row, index) {
        const { state } = row;
        const { NEW, REMOVED } = this.RowStates;
        if (state === NEW || state === REMOVED) {
            return;
        }
        this.instance.editRow(index);
        const forms = this.forms.toArray();
        if (forms[index]) {
            forms[index].formio.submission = { data: JSON.parse(JSON.stringify(row.data)) };
        }
    }
    /**
     * Updates the row template.
     *
     * @param row
     * @param index
     */
    updateRowTemplate(rowElement, index, comps) {
        const self = this;
        const editRow = Object.assign({}, this.instance.editRows[index]);
        if (editRow.state !== this.RowStates.NEW) {
            this.renderTemplate(rowElement, this.instance.renderString(this.instance.component.templates.row, {
                row: this.instance.dataValue[index] || {},
                data: this.instance.data,
                rowIndex: index,
                colWidth: this.colWidth,
                components: this.instance.component.components,
                getView: function getView(component, data) {
                    if (!comps[component.type]) {
                        comps[component.type] = Components.create(component, {}, {}, true);
                    }
                    return comps[component.type] ? comps[component.type].getView(data) : '';
                }
            }));
        }
    }
    /**
     * Saves a row.
     *
     * @param row - The edit grid row.
     * @param index - The index for this row.
     */
    saveRow(row, index) {
        const forms = this.forms.toArray();
        if (forms[index]) {
            const formioComponent = forms[index];
            row.data = JSON.parse(JSON.stringify(formioComponent.formio.submission.data));
            this.instance.saveRow(index);
            const rows = this.rowElements.toArray();
            if (rows && rows[index]) {
                this.updateRowTemplate(rows[index], index, {});
            }
        }
    }
    cancelRow(index) {
        this.instance.cancelRow(index);
        this.valid = true;
    }
    renderTemplate(element, template) {
        if (!element || !element.nativeElement) {
            return;
        }
        element.nativeElement.innerHTML = template;
    }
    ngAfterViewInit() {
        this.rowElements.changes.subscribe((rows) => {
            const rowCache = {};
            rows.forEach((row, index) => this.updateRowTemplate(row, index, rowCache));
        });
    }
}
MaterialEditGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-editgrid',
                template: "<mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\" [labelTemplate]=\"labelTemplate\">\n</mat-formio-form-field>\n<ng-template #componentTemplate let-hasLabel>\n\n  <span fxLayout=\"column\" fxLayoutGap=\"1em\" fxFill>\n    <ng-container *ngIf=\"hasLabel\">\n      <ng-container *ngTemplateOutlet=\"labelTemplate\"></ng-container>\n    </ng-container>\n    <mat-accordion>\n      <mat-expansion-panel *ngIf=\"header\" disabled=\"true\">\n        <mat-expansion-panel-header>\n          <span #header fxFill></span>\n        </mat-expansion-panel-header>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel *ngFor=\"let row of instance.editRows; index as i;\" [expanded]=\"instance.isOpen(row)\">\n        <mat-expansion-panel-header (click)=\"editRow(row, i)\">\n          <span *ngIf=\"row.state !== RowStates.NEW\" #rows fxFill></span>\n        </mat-expansion-panel-header>\n\n        <mat-formio [form]=\"instance.component\" #forms (change)=\"validate(i)\"></mat-formio>\n\n        <span fxLayout=\"row\" fxLayoutGap=\"1em\">\n          <button mat-raised-button color=\"primary\" [disabled]=\"!valid\" (click)=\"saveRow(row, i)\">Save</button>\n          <button mat-raised-button color=\"secondary\" (click)=\"cancelRow(i)\">Cancel</button>\n          <button mat-raised-button color=\"warn\" (click)=\"instance.removeRow(i)\" class=\"delete-button\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </span>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel *ngIf=\"footer\" disabled=\"true\">\n        <mat-expansion-panel-header>\n          <span #footer></span>\n        </mat-expansion-panel-header>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <span fxFill=\"none\" *ngIf=\"instance.hasAddButton()\">\n      <button mat-raised-button color=\"primary\" (click)=\"addAnother()\">\n        <mat-icon>add</mat-icon> Add Another\n      </button>\n    </span>\n  </span>\n</ng-template>\n\n<ng-template #labelTemplate>\n  <mat-card-title>\n    <span [instance]=\"instance\" matFormioLabel></span>\n  </mat-card-title>\n</ng-template>\n",
                styles: [":host .delete-button{margin-left:auto;order:2}"]
            },] }
];
MaterialEditGridComponent.propDecorators = {
    headerElement: [{ type: ViewChild, args: ['header',] }],
    footerElement: [{ type: ViewChild, args: ['footer',] }],
    rowElements: [{ type: ViewChildren, args: ['rows',] }],
    forms: [{ type: ViewChildren, args: ['forms',] }]
};
EditGridComponent.MaterialComponent = MaterialEditGridComponent;
export { EditGridComponent };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2VkaXRncmlkL2VkaXRncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBSWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxpQkFBaUIsTUFBTSwwQ0FBMEMsQ0FBQztBQUV6RSxPQUFPLFVBQVUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RCxPQUFPLFFBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQUV2QyxJQUFLLFlBTUo7QUFORCxXQUFLLFlBQVk7SUFDZiwyQkFBVyxDQUFBO0lBQ1gsbUNBQWtCLENBQUE7SUFDbEIsK0JBQWUsQ0FBQTtJQUNmLG1DQUFtQixDQUFBO0lBQ25CLCtCQUFlLENBQUE7QUFDakIsQ0FBQyxFQU5JLFlBQVksS0FBWixZQUFZLFFBTWhCO0FBQUEsQ0FBQztBQUVGLG9EQUFvRDtBQUNwRCxNQUFNLFFBQVEsR0FBRyxVQUFTLEdBQUc7SUFDM0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsSUFBSSxHQUFHLENBQUM7SUFDUixHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0IsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLEdBQUcsR0FBSyxHQUFH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QUFpQixHQUFHLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQgfSBmcm9tICcuLi9NYXRlcmlhbE5lc3RlZENvbXBvbmVudCc7XG5pbXBvcnQgRWRpdEdyaWRDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9lZGl0Z3JpZC9FZGl0R3JpZC5qcyc7XG5pbXBvcnQgeyBGb3JtaW9Db21wb25lbnQgfSBmcm9tICcuLi8uLi9mb3JtaW8uY29tcG9uZW50JztcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvQ29tcG9uZW50cyc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcblxuZW51bSBFZGl0Um93U3RhdGUge1xuICBORVcgPSAnbmV3JyxcbiAgRURJVElORyA9J2VkaXRpbmcnLFxuICBTQVZFRCA9ICdzYXZlZCcsXG4gIFJFTU9WRUQgPSAncmVtb3ZlZCcsXG4gIERSQUZUID0gJ2RyYWZ0J1xufTtcblxuLyogdHNsaW50OmRpc2FibGUgbm8tYml0d2lzZSBvbmx5LWFycm93LWZ1bmN0aW9ucyAqL1xuY29uc3QgaGFzaENvZGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgbGV0IGhhc2ggPSAwO1xuICBsZXQgaSA9IDA7XG4gIGxldCBjaHI7XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cXHMvZywgJycpO1xuICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjaHIgICA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaHI7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuICByZXR1cm4gaGFzaDtcbn07XG4vKiB0c2xpbnQ6ZW5hYmxlIG5vLWJpdHdpc2Ugb25seS1hcnJvdy1mdW5jdGlvbnMgKi9cblxuLy8gRG8gbm90aGluZyB0byBjcmVhdGVSb3dDb21wb25lbnRzLCBsZXQgbWF0LWZvcm1pbyBoYW5kbGUgaXQuXG4vKiB0c2xpbnQ6ZGlzYWJsZSBvbmx5LWFycm93LWZ1bmN0aW9ucyAqL1xuRWRpdEdyaWRDb21wb25lbnQucHJvdG90eXBlLmNyZWF0ZVJvd0NvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFtdO1xufTtcblxuY29uc3QgY2hlY2tSb3cgPSBFZGl0R3JpZENvbXBvbmVudC5wcm90b3R5cGUuY2hlY2tSb3c7XG5FZGl0R3JpZENvbXBvbmVudC5wcm90b3R5cGUuY2hlY2tSb3cgPSBmdW5jdGlvbihkYXRhLCBlZGl0Um93LCBmbGFnczogYW55ID0ge30pIHtcbiAgaWYgKGZsYWdzLmNoZWNrUm93KSB7XG4gICAgcmV0dXJuIGNoZWNrUm93LmNhbGwodGhpcywgZGF0YSwgZWRpdFJvdywgZmxhZ3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuLyogdHNsaW50OmVuYWJsZSBvbmx5LWFycm93LWZ1bmN0aW9ucyAqL1xuXG5jb25zdCBERUZBVUxUX0hFQURFUl9URU1QTEFURVMgPSBbXG4gIGhhc2hDb2RlKChFZGl0R3JpZENvbXBvbmVudCBhcyBhbnkpLmRlZmF1bHRIZWFkZXJUZW1wbGF0ZSksXG4gIGhhc2hDb2RlKGBcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIHslIChjb21wb25lbnRzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBvbmVudCkgeyAlfVxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+e3sgY29tcG9uZW50LmxhYmVsIH19PC9kaXY+XG4gICAgeyUgfSkgJX1cbiAgPC9kaXY+YClcbl07XG5cbmNvbnN0IERFRkFVTFRfUk9XX1RFTVBMQVRFUyA9IFtcbiAgaGFzaENvZGUoKEVkaXRHcmlkQ29tcG9uZW50IGFzIGFueSkuZGVmYXVsdFJvd1RlbXBsYXRlKSxcbiAgaGFzaENvZGUoYDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgeyUgdXRpbC5lYWNoQ29tcG9uZW50KGNvbXBvbmVudHMsIGZ1bmN0aW9uKGNvbXBvbmVudCkgeyAlfVxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMlwiPlxuICAgICAge3sgZ2V0Vmlldyhjb21wb25lbnQsIHJvd1tjb21wb25lbnQua2V5XSkgfX1cbiAgICA8L2Rpdj5cbiAgeyUgfSkgJX1cbiAgeyUgaWYgKCFpbnN0YW5jZS5vcHRpb25zLnJlYWRPbmx5KSB7ICV9XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gZWRpdFJvd1wiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbSByZW1vdmVSb3dcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICB7JSB9ICV9XG48L2Rpdj5gKVxuXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby1lZGl0Z3JpZCcsXG4gIHN0eWxlVXJsczogWycuL2VkaXRncmlkLmNvbXBvbmVudC5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXRncmlkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbEVkaXRHcmlkQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnaGVhZGVyJykgaGVhZGVyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZm9vdGVyJykgZm9vdGVyRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZHJlbigncm93cycpIHJvd0VsZW1lbnRzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XG4gIEBWaWV3Q2hpbGRyZW4oJ2Zvcm1zJykgZm9ybXM6IFF1ZXJ5TGlzdDxGb3JtaW9Db21wb25lbnQ+O1xuICBwdWJsaWMgaGVhZGVyOiBzdHJpbmc7XG4gIHB1YmxpYyBmb290ZXI6IHN0cmluZztcbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xuICBwdWJsaWMgY29sdW1uczogYW55ID0ge307XG4gIHB1YmxpYyBjb2xXaWR0aCA9IDA7XG4gIHB1YmxpYyB2YWxpZCA9IHRydWU7XG4gIHB1YmxpYyBSb3dTdGF0ZXMgPSBFZGl0Um93U3RhdGU7XG5cbiAgZ2V0Um93VGVtcGxhdGUoY29udGVudCkge1xuICAgIHJldHVybiBgPG1hdC1saXN0IHN0eWxlPVwiZGlzcGxheTogZmxleDtcIj5cbiAgICAgIHslIChjb21wb25lbnRzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBvbmVudCkgeyAlfVxuICAgICAgICB7JSBpZiAoIWNvbXBvbmVudC5oYXNPd25Qcm9wZXJ0eSgndGFibGVWaWV3JykgfHwgY29tcG9uZW50LnRhYmxlVmlldykgeyAlfVxuICAgICAgICAgIDxtYXQtbGlzdC1pdGVtIHN0eWxlPVwid2lkdGg6IHt7IGNvbFdpZHRoIH19JTsgbWFyZ2luOiAwIDAuOHJlbVwiPiR7Y29udGVudH08L21hdC1saXN0LWl0ZW0+XG4gICAgICAgIHslIH0gJX1cbiAgICAgIHslIH0pICV9XG4gICAgPC9tYXQtbGlzdD5gO1xufVxuXG4gIHZhbGlkYXRlKGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmZvcm1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvcm1zID0gdGhpcy5mb3Jtcy50b0FycmF5KCk7XG4gICAgaWYgKCFmb3Jtc1tpbmRleF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZm9ybWlvQ29tcG9uZW50ID0gZm9ybXNbaW5kZXhdO1xuICAgIGNvbnN0IHtkYXRhfSA9IGZvcm1pb0NvbXBvbmVudC5mb3JtaW8uc3VibWlzc2lvbjtcbiAgICBjb25zdCBpc0ludmFsaWQgPSBPYmplY3Qua2V5cyhkYXRhKS5zb21lKFxuICAgICAgdmFsdWUgPT4gaXNTdHJpbmcoZGF0YVt2YWx1ZV0pICYmIGRhdGFbdmFsdWVdLmxlbmd0aCA9PT0gMFxuICAgICk7XG5cbiAgICBpZiAoaXNJbnZhbGlkKSB7XG4gICAgICB0aGlzLnZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHNldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UuY29tcG9uZW50LnRlbXBsYXRlcy5oZWFkZXIgJiZcbiAgICAgIChERUZBVUxUX0hFQURFUl9URU1QTEFURVMuaW5kZXhPZihoYXNoQ29kZShpbnN0YW5jZS5jb21wb25lbnQudGVtcGxhdGVzLmhlYWRlcikpICE9PSAtMSlcbiAgICApIHtcbiAgICAgIGluc3RhbmNlLmNvbXBvbmVudC50ZW1wbGF0ZXMuaGVhZGVyID0gdGhpcy5nZXRSb3dUZW1wbGF0ZSgne3sgY29tcG9uZW50LmxhYmVsIH19Jyk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLmNvbXBvbmVudC50ZW1wbGF0ZXMucm93ICYmXG4gICAgICAoREVGQVVMVF9ST1dfVEVNUExBVEVTLmluZGV4T2YoaGFzaENvZGUoaW5zdGFuY2UuY29tcG9uZW50LnRlbXBsYXRlcy5yb3cpKSAhPT0gLTEpXG4gICAgKSB7XG4gICAgICBpbnN0YW5jZS5jb21wb25lbnQudGVtcGxhdGVzLnJvdyA9IHRoaXMuZ2V0Um93VGVtcGxhdGUoJ3t7IGdldFZpZXcoY29tcG9uZW50LCByb3dbY29tcG9uZW50LmtleV0pIH19Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gaW5zdGFuY2UuY29tcG9uZW50LmNvbXBvbmVudHMubWFwKChjb21wKSA9PiB7XG4gICAgICBpZiAoY29tcC5oYXNPd25Qcm9wZXJ0eSgndGFibGVWaWV3JykgJiYgIWNvbXAudGFibGVWaWV3KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb2x1bW5zW2NvbXAua2V5XSA9IGNvbXA7XG4gICAgICByZXR1cm4gY29tcC5rZXk7XG4gICAgfSkuZmlsdGVyKG5hbWUgPT4gISFuYW1lKTtcbiAgICBjb25zdCBkYXRhVmFsdWUgPSBpbnN0YW5jZS5kYXRhVmFsdWUgfHwgW107XG4gICAgdGhpcy5jb2xXaWR0aCA9IGluc3RhbmNlLmNvbXBvbmVudC5jb21wb25lbnRzLmxlbmd0aCA/IE1hdGguZmxvb3IoMTAwIC8gaW5zdGFuY2UuY29tcG9uZW50LmNvbXBvbmVudHMubGVuZ3RoKSA6IDEwMDtcbiAgICBpZiAoaW5zdGFuY2UuY29tcG9uZW50LnRlbXBsYXRlcyAmJiBpbnN0YW5jZS5jb21wb25lbnQudGVtcGxhdGVzLmhlYWRlcikge1xuICAgICAgdGhpcy5oZWFkZXIgPSBpbnN0YW5jZS5yZW5kZXJTdHJpbmcoaW5zdGFuY2UuY29tcG9uZW50LnRlbXBsYXRlcy5oZWFkZXIsIHtcbiAgICAgICAgY29tcG9uZW50czogaW5zdGFuY2UuY29tcG9uZW50LmNvbXBvbmVudHMsXG4gICAgICAgIHZhbHVlOiBkYXRhVmFsdWUsXG4gICAgICAgIGNvbFdpZHRoOiB0aGlzLmNvbFdpZHRoXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGluc3RhbmNlLmNvbXBvbmVudC50ZW1wbGF0ZXMgJiYgaW5zdGFuY2UuY29tcG9uZW50LnRlbXBsYXRlcy5mb290ZXIpIHtcbiAgICAgIHRoaXMuZm9vdGVyID0gaW5zdGFuY2UucmVuZGVyU3RyaW5nKGluc3RhbmNlLmNvbXBvbmVudC50ZW1wbGF0ZXMuZm9vdGVyLCB7XG4gICAgICAgIGNvbXBvbmVudHM6IGluc3RhbmNlLmNvbXBvbmVudC5jb21wb25lbnRzLFxuICAgICAgICB2YWx1ZTogZGF0YVZhbHVlLFxuICAgICAgICBjb2xXaWR0aDogdGhpcy5jb2xXaWR0aFxuICAgICAgfSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZSh0aGlzLmhlYWRlckVsZW1lbnQsIHRoaXMuaGVhZGVyKTtcbiAgICAgIHRoaXMucmVuZGVyVGVtcGxhdGUodGhpcy5mb290ZXJFbGVtZW50LCB0aGlzLmZvb3Rlcik7XG4gICAgfSwgMCk7XG4gICAgc3VwZXIuc2V0SW5zdGFuY2UoaW5zdGFuY2UpO1xuICB9XG5cbiAgYWRkQW5vdGhlcigpIHtcbiAgICBjb25zdCByb3cgPSB0aGlzLmluc3RhbmNlLmFkZFJvdygpO1xuICB9XG5cbiAgZWRpdFJvdyhyb3csIGluZGV4KSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gcm93O1xuICAgIGNvbnN0IHsgTkVXLCBSRU1PVkVEIH0gPSB0aGlzLlJvd1N0YXRlcztcblxuICAgIGlmIChzdGF0ZSA9PT0gTkVXIHx8IHN0YXRlID09PSBSRU1PVkVEKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UuZWRpdFJvdyhpbmRleCk7XG4gICAgY29uc3QgZm9ybXMgPSB0aGlzLmZvcm1zLnRvQXJyYXkoKTtcbiAgICBpZiAoZm9ybXNbaW5kZXhdKSB7XG4gICAgICBmb3Jtc1tpbmRleF0uZm9ybWlvLnN1Ym1pc3Npb24gPSB7ZGF0YTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyb3cuZGF0YSkpfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcm93IHRlbXBsYXRlLlxuICAgKlxuICAgKiBAcGFyYW0gcm93XG4gICAqIEBwYXJhbSBpbmRleFxuICAgKi9cbiAgdXBkYXRlUm93VGVtcGxhdGUocm93RWxlbWVudDogRWxlbWVudFJlZiwgaW5kZXgsIGNvbXBzKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgY29uc3QgZWRpdFJvdzogYW55ID0gey4uLnRoaXMuaW5zdGFuY2UuZWRpdFJvd3NbaW5kZXhdfTtcbiAgICBpZiAoZWRpdFJvdy5zdGF0ZSAhPT0gdGhpcy5Sb3dTdGF0ZXMuTkVXKSB7XG4gICAgICB0aGlzLnJlbmRlclRlbXBsYXRlKHJvd0VsZW1lbnQsIHRoaXMuaW5zdGFuY2UucmVuZGVyU3RyaW5nKHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LnRlbXBsYXRlcy5yb3csIHtcbiAgICAgICAgcm93OiB0aGlzLmluc3RhbmNlLmRhdGFWYWx1ZVtpbmRleF0gfHwge30sXG4gICAgICAgIGRhdGE6IHRoaXMuaW5zdGFuY2UuZGF0YSxcbiAgICAgICAgcm93SW5kZXg6IGluZGV4LFxuICAgICAgICBjb2xXaWR0aDogdGhpcy5jb2xXaWR0aCxcbiAgICAgICAgY29tcG9uZW50czogdGhpcy5pbnN0YW5jZS5jb21wb25lbnQuY29tcG9uZW50cyxcbiAgICAgICAgZ2V0VmlldzogZnVuY3Rpb24gZ2V0Vmlldyhjb21wb25lbnQsIGRhdGEpIHtcbiAgICAgICAgICBpZiAoIWNvbXBzW2NvbXBvbmVudC50eXBlXSkge1xuICAgICAgICAgICAgY29tcHNbY29tcG9uZW50LnR5cGVdID0gQ29tcG9uZW50cy5jcmVhdGUoY29tcG9uZW50LCB7fSwge30sIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29tcHNbY29tcG9uZW50LnR5cGVdID8gY29tcHNbY29tcG9uZW50LnR5cGVdLmdldFZpZXcoZGF0YSkgOiAnJztcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBhIHJvdy5cbiAgICpcbiAgICogQHBhcmFtIHJvdyAtIFRoZSBlZGl0IGdyaWQgcm93LlxuICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgaW5kZXggZm9yIHRoaXMgcm93LlxuICAgKi9cbiAgc2F2ZVJvdyhyb3csIGluZGV4KSB7XG4gICAgY29uc3QgZm9ybXMgPSB0aGlzLmZvcm1zLnRvQXJyYXkoKTtcbiAgICBpZiAoZm9ybXNbaW5kZXhdKSB7XG4gICAgICBjb25zdCBmb3JtaW9Db21wb25lbnQgPSBmb3Jtc1tpbmRleF07XG4gICAgICByb3cuZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm9ybWlvQ29tcG9uZW50LmZvcm1pby5zdWJtaXNzaW9uLmRhdGEpKTtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2F2ZVJvdyhpbmRleCk7XG4gICAgICBjb25zdCByb3dzID0gdGhpcy5yb3dFbGVtZW50cy50b0FycmF5KCk7XG4gICAgICBpZiAocm93cyAmJiByb3dzW2luZGV4XSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVJvd1RlbXBsYXRlKHJvd3NbaW5kZXhdLCBpbmRleCwge30pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhbmNlbFJvdyhpbmRleCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY2FuY2VsUm93KGluZGV4KTtcbiAgICB0aGlzLnZhbGlkID0gdHJ1ZTtcbiAgfVxuXG4gIHJlbmRlclRlbXBsYXRlKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHRlbXBsYXRlKSB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucm93RWxlbWVudHMuY2hhbmdlcy5zdWJzY3JpYmUoKHJvd3M6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPikgPT4ge1xuICAgICAgY29uc3Qgcm93Q2FjaGUgPSB7fTtcbiAgICAgIHJvd3MuZm9yRWFjaCgocm93OiBFbGVtZW50UmVmLCBpbmRleCkgPT4gdGhpcy51cGRhdGVSb3dUZW1wbGF0ZShyb3csIGluZGV4LCByb3dDYWNoZSkpO1xuICAgIH0pO1xuICB9XG59XG5FZGl0R3JpZENvbXBvbmVudC5NYXRlcmlhbENvbXBvbmVudCA9IE1hdGVyaWFsRWRpdEdyaWRDb21wb25lbnQ7XG5leHBvcnQgeyBFZGl0R3JpZENvbXBvbmVudCB9O1xuIl19