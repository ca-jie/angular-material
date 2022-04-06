import { Component, ViewChild } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import TextAreaComponent from 'formiojs/components/textarea/TextArea.js';
import isNil from 'lodash/isNil';
export class MaterialTextareaComponent extends MaterialComponent {
    ngAfterViewInit() {
        // Attach the element so the wysiwyg will work.
        this.instance.attachElement(this.textarea.nativeElement);
    }
    getValue() {
        return isNil(this.control.value) ? '' : this.control.value;
    }
}
MaterialTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-textarea',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-form-field class="mat-formio-textarea"
                      [ngClass]="{'editor-enabled': !!instance.component.editor}"
                      fxFill
                      fxFlexAlign="center"
      >
        <mat-label fxFill *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>
        <span *ngIf="instance.component.prefix" matPrefix>{{ instance.component.prefix }}&nbsp;</span>
        <textarea matInput
                  [placeholder]="instance.component.placeholder"
                  [formControl]="control"
                  [rows]="(instance.component.rows || 3)"
                  (input)="onChange()"
                   #textarea
        >
        </textarea>
        <span *ngIf="instance.component.suffix" matSuffix>{{ instance.component.suffix }}</span>
        <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
      </mat-form-field>
    </ng-template>
  `,
                styles: [".mat-input-element{min-height:16px}"]
            },] }
];
MaterialTextareaComponent.propDecorators = {
    textarea: [{ type: ViewChild, args: ['textarea',] }]
};
TextAreaComponent.MaterialComponent = MaterialTextareaComponent;
export { TextAreaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxpQkFBaUIsTUFBTSwwQ0FBMEMsQ0FBQztBQUN6RSxPQUFPLEtBQUssTUFBTSxjQUFjLENBQUM7QUErQmpDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxpQkFBaUI7SUFHOUQsZUFBZTtRQUNiLCtDQUErQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM3RCxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBRS9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JUOzthQUNGOzs7dUJBRUUsU0FBUyxTQUFDLFVBQVU7O0FBV3ZCLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vTWF0ZXJpYWxDb21wb25lbnQnO1xuaW1wb3J0IFRleHRBcmVhQ29tcG9uZW50IGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvdGV4dGFyZWEvVGV4dEFyZWEuanMnO1xuaW1wb3J0IGlzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tdGV4dGFyZWEnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0YXJlYS5jb21wb25lbnQuY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtaW8tZm9ybS1maWVsZCBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIiBbY29tcG9uZW50VGVtcGxhdGVdPVwiY29tcG9uZW50VGVtcGxhdGVcIj48L21hdC1mb3JtaW8tZm9ybS1maWVsZD5cbiAgICA8bmctdGVtcGxhdGUgI2NvbXBvbmVudFRlbXBsYXRlIGxldC1oYXNMYWJlbD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1hdC1mb3JtaW8tdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZWRpdG9yLWVuYWJsZWQnOiAhIWluc3RhbmNlLmNvbXBvbmVudC5lZGl0b3J9XCJcbiAgICAgICAgICAgICAgICAgICAgICBmeEZpbGxcbiAgICAgICAgICAgICAgICAgICAgICBmeEZsZXhBbGlnbj1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtbGFiZWwgZnhGaWxsICpuZ0lmPVwiaGFzTGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIiBtYXRGb3JtaW9MYWJlbD48L3NwYW4+XG4gICAgICAgIDwvbWF0LWxhYmVsPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImluc3RhbmNlLmNvbXBvbmVudC5wcmVmaXhcIiBtYXRQcmVmaXg+e3sgaW5zdGFuY2UuY29tcG9uZW50LnByZWZpeCB9fSZuYnNwOzwvc3Bhbj5cbiAgICAgICAgPHRleHRhcmVhIG1hdElucHV0XG4gICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiaW5zdGFuY2UuY29tcG9uZW50LnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICAgIFtyb3dzXT1cIihpbnN0YW5jZS5jb21wb25lbnQucm93cyB8fCAzKVwiXG4gICAgICAgICAgICAgICAgICAoaW5wdXQpPVwib25DaGFuZ2UoKVwiXG4gICAgICAgICAgICAgICAgICAgI3RleHRhcmVhXG4gICAgICAgID5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpbnN0YW5jZS5jb21wb25lbnQuc3VmZml4XCIgbWF0U3VmZml4Pnt7IGluc3RhbmNlLmNvbXBvbmVudC5zdWZmaXggfX08L3NwYW4+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpbnN0YW5jZS5lcnJvclwiPnt7IGluc3RhbmNlLmVycm9yLm1lc3NhZ2UgfX08L21hdC1lcnJvcj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbFRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndGV4dGFyZWEnKSB0ZXh0YXJlYTogRWxlbWVudFJlZjtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gQXR0YWNoIHRoZSBlbGVtZW50IHNvIHRoZSB3eXNpd3lnIHdpbGwgd29yay5cbiAgICB0aGlzLmluc3RhbmNlLmF0dGFjaEVsZW1lbnQodGhpcy50ZXh0YXJlYS5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiBpc05pbCh0aGlzLmNvbnRyb2wudmFsdWUpID8gJycgOiB0aGlzLmNvbnRyb2wudmFsdWU7XG4gIH1cbn1cblRleHRBcmVhQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxUZXh0YXJlYUNvbXBvbmVudDtcbmV4cG9ydCB7IFRleHRBcmVhQ29tcG9uZW50IH07XG4iXX0=