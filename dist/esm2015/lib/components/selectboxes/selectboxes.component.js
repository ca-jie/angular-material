import { Component } from '@angular/core';
import { MaterialRadioComponent } from '../radio/radio.component';
import SelectBoxesComponent from 'formiojs/components/selectboxes/SelectBoxes.js';
export class MaterialSelectBoxesComponent extends MaterialRadioComponent {
    constructor() {
        super(...arguments);
        this.value = {};
        this.disabled = false;
    }
    setInstance(instance) {
        instance.component.values.forEach((option) => {
            this.value[option.value] = false;
        });
        super.setInstance(instance);
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        const normalizedValue = this.instance.normalizeValue(value);
        for (const prop in normalizedValue) {
            if (normalizedValue.hasOwnProperty(prop)) {
                this.value[prop] = normalizedValue[prop];
            }
        }
    }
    setDisabled(disabled) {
        this.disabled = !!disabled;
    }
    onChange() {
        this.instance.updateValue(this.getValue(), { modified: true });
        this.instance.triggerChange({ modified: true });
    }
}
MaterialSelectBoxesComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-selectboxes',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <div fxLayout="column">
        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>
        <div
                fxFlexOffset="10px"
                fxLayout="{{ getLayout() }}"
                fxLayoutGap="10px"
        >
          <mat-checkbox
                  *ngFor="let option of instance.component.values"
                  (change)="onChange()"
                  [(ngModel)]="value[option.value]"
                  [disabled]="disabled"
          >
            {{ option.label }}
          </mat-checkbox>
          <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
        </div>
      </div>
    </ng-template>
  `
            },] }
];
SelectBoxesComponent.MaterialComponent = MaterialSelectBoxesComponent;
export { SelectBoxesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Ym94ZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NlbGVjdGJveGVzL3NlbGVjdGJveGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sb0JBQW9CLE1BQU0sZ0RBQWdELENBQUM7QUE2QmxGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxzQkFBc0I7SUE1QnhFOztRQTZCUyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7SUE4QjFCLENBQUM7SUE1QkMsV0FBVyxDQUFDLFFBQVE7UUFDbEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxLQUFLLE1BQU0sSUFBSSxJQUFJLGVBQWUsRUFBRTtZQUNsQyxJQUFJLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQVE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUEzREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JUO2FBQ0Y7O0FBa0NELG9CQUFvQixDQUFDLGlCQUFpQixHQUFHLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi4vcmFkaW8vcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCBTZWxlY3RCb3hlc0NvbXBvbmVudCBmcm9tICdmb3JtaW9qcy9jb21wb25lbnRzL3NlbGVjdGJveGVzL1NlbGVjdEJveGVzLmpzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tc2VsZWN0Ym94ZXMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybWlvLWZvcm0tZmllbGQgW2luc3RhbmNlXT1cImluc3RhbmNlXCIgW2NvbXBvbmVudFRlbXBsYXRlXT1cImNvbXBvbmVudFRlbXBsYXRlXCI+PC9tYXQtZm9ybWlvLWZvcm0tZmllbGQ+XG4gICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRUZW1wbGF0ZSBsZXQtaGFzTGFiZWw+XG4gICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICAgIDxtYXQtbGFiZWwgKm5nSWY9XCJoYXNMYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiIG1hdEZvcm1pb0xhYmVsPjwvc3Bhbj5cbiAgICAgICAgPC9tYXQtbGFiZWw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBmeEZsZXhPZmZzZXQ9XCIxMHB4XCJcbiAgICAgICAgICAgICAgICBmeExheW91dD1cInt7IGdldExheW91dCgpIH19XCJcbiAgICAgICAgICAgICAgICBmeExheW91dEdhcD1cIjEwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPG1hdC1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBpbnN0YW5jZS5jb21wb25lbnQudmFsdWVzXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoKVwiXG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlW29wdGlvbi52YWx1ZV1cIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfX1cbiAgICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaW5zdGFuY2UuZXJyb3JcIj57eyBpbnN0YW5jZS5lcnJvci5tZXNzYWdlIH19PC9tYXQtZXJyb3I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbFNlbGVjdEJveGVzQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxSYWRpb0NvbXBvbmVudCB7XG4gIHB1YmxpYyB2YWx1ZTogYW55ID0ge307XG4gIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIHNldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2UuY29tcG9uZW50LnZhbHVlcy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIHRoaXMudmFsdWVbb3B0aW9uLnZhbHVlXSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHN1cGVyLnNldEluc3RhbmNlKGluc3RhbmNlKTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSB0aGlzLmluc3RhbmNlLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gbm9ybWFsaXplZFZhbHVlKSB7XG4gICAgICBpZiAobm9ybWFsaXplZFZhbHVlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHRoaXMudmFsdWVbcHJvcF0gPSBub3JtYWxpemVkVmFsdWVbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gISFkaXNhYmxlZDtcbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlVmFsdWUodGhpcy5nZXRWYWx1ZSgpLCB7bW9kaWZpZWQ6IHRydWV9KTtcbiAgICB0aGlzLmluc3RhbmNlLnRyaWdnZXJDaGFuZ2Uoe21vZGlmaWVkOiB0cnVlfSk7XG4gIH1cbn1cblNlbGVjdEJveGVzQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxTZWxlY3RCb3hlc0NvbXBvbmVudDtcbmV4cG9ydCB7IFNlbGVjdEJveGVzQ29tcG9uZW50IH07XG4iXX0=