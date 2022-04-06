import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import TagsComponent from 'formiojs/components/tags/Tags.js';
import { MaterialComponent } from '../MaterialComponent';
export class MaterialTagsComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.separatorKeysCodes = [ENTER, COMMA];
        this.tags = [];
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.tags.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
        this.onChange();
    }
    remove(index) {
        if (index >= 0 && index < this.tags.length) {
            this.tags.splice(index, 1);
        }
        this.onChange();
    }
    getValue() {
        return (this.instance.component.storeas === 'string') ? this.tags.join(this.instance.delimiter) : this.tags;
    }
    setValue(value) {
        if (typeof value === 'string') {
            value = value.split(this.instance.delimiter);
        }
        if (value && !Array.isArray(value)) {
            value = [value];
        }
        this.tags = value;
    }
}
MaterialTagsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-tags',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-form-field class="example-chip-list" fxFill>

        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>

        <mat-chip-list #chipList [attr.aria-label]="instance.component.label">
          <mat-chip *ngFor="let tag of tags; index as i;"
                    [selectable]="true"
                    [removable]="true"
                    (removed)="remove(i)"
          >
            {{tag}}
            <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>

          <input [formControl]="control"
                 [matChipInputFor]="chipList"
                 [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                 [matChipInputAddOnBlur]="true"
                 (matChipInputTokenEnd)="add($event)"
          >
        </mat-chip-list>
      </mat-form-field>
    </ng-template>
  `
            },] }
];
TagsComponent.MaterialComponent = MaterialTagsComponent;
export { TagsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFncy90YWdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxhQUFhLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFtQ3pELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7SUFoQzVEOztRQWlDVyx1QkFBa0IsR0FBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RCxTQUFJLEdBQWEsRUFBRSxDQUFDO0lBaUN0QixDQUFDO0lBaENDLEdBQUcsQ0FBQyxLQUF3QjtRQUMxQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLO1FBQ1YsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlHLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7WUFsRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCVDthQUNGOztBQXFDQSxhQUFxQixDQUFDLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ09NTUEsIEVOVEVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCBUYWdzQ29tcG9uZW50IGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvdGFncy9UYWdzLmpzJztcbmltcG9ydCB7IE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vTWF0ZXJpYWxDb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2hpcElucHV0RXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tdGFncycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtaW8tZm9ybS1maWVsZCBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIiBbY29tcG9uZW50VGVtcGxhdGVdPVwiY29tcG9uZW50VGVtcGxhdGVcIj48L21hdC1mb3JtaW8tZm9ybS1maWVsZD5cbiAgICA8bmctdGVtcGxhdGUgI2NvbXBvbmVudFRlbXBsYXRlIGxldC1oYXNMYWJlbD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCIgZnhGaWxsPlxuXG4gICAgICAgIDxtYXQtbGFiZWwgKm5nSWY9XCJoYXNMYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiIG1hdEZvcm1pb0xhYmVsPjwvc3Bhbj5cbiAgICAgICAgPC9tYXQtbGFiZWw+XG5cbiAgICAgICAgPG1hdC1jaGlwLWxpc3QgI2NoaXBMaXN0IFthdHRyLmFyaWEtbGFiZWxdPVwiaW5zdGFuY2UuY29tcG9uZW50LmxhYmVsXCI+XG4gICAgICAgICAgPG1hdC1jaGlwICpuZ0Zvcj1cImxldCB0YWcgb2YgdGFnczsgaW5kZXggYXMgaTtcIlxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgW3JlbW92YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwicmVtb3ZlKGkpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7e3RhZ319XG4gICAgICAgICAgICA8bWF0LWljb24gbWF0Q2hpcFJlbW92ZT5jYW5jZWw8L21hdC1pY29uPlxuICAgICAgICAgIDwvbWF0LWNoaXA+XG5cbiAgICAgICAgICA8aW5wdXQgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCJcbiAgICAgICAgICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXG4gICAgICAgICAgICAgICAgIFttYXRDaGlwSW5wdXRBZGRPbkJsdXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGQoJGV2ZW50KVwiXG4gICAgICAgICAgPlxuICAgICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxUYWdzQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQge1xuICByZWFkb25seSBzZXBhcmF0b3JLZXlzQ29kZXM6IG51bWJlcltdID0gW0VOVEVSLCBDT01NQV07XG4gIHRhZ3M6IHN0cmluZ1tdID0gW107XG4gIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWU7XG4gICAgaWYgKCh2YWx1ZSB8fCAnJykudHJpbSgpKSB7XG4gICAgICB0aGlzLnRhZ3MucHVzaCh2YWx1ZS50cmltKCkpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCk6IHZvaWQge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy50YWdzLmxlbmd0aCkge1xuICAgICAgdGhpcy50YWdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiAodGhpcy5pbnN0YW5jZS5jb21wb25lbnQuc3RvcmVhcyA9PT0gJ3N0cmluZycpID8gdGhpcy50YWdzLmpvaW4odGhpcy5pbnN0YW5jZS5kZWxpbWl0ZXIpIDogdGhpcy50YWdzO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCh0aGlzLmluc3RhbmNlLmRlbGltaXRlcik7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICB9XG4gICAgdGhpcy50YWdzID0gdmFsdWU7XG4gIH1cbn1cbihUYWdzQ29tcG9uZW50IGFzIGFueSkuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbFRhZ3NDb21wb25lbnQ7XG5leHBvcnQgeyBUYWdzQ29tcG9uZW50IH07XG4iXX0=