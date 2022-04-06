import { Component } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import RadioComponent from 'formiojs/components/radio/Radio.js';
export class MaterialRadioComponent extends MaterialComponent {
    getLayout() {
        return this.instance.component.inline ? 'row' : 'column';
    }
    isRadioChecked(option) {
        return option.value === this.instance.dataValue;
    }
    clearValue(event, option) {
        if (this.isRadioChecked(option)) {
            event.preventDefault();
            this.deselectValue();
        }
    }
    deselectValue() {
        this.instance.updateValue(null, {
            modified: true,
        });
    }
}
MaterialRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-radio',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <div fxLayout="column">
        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>

        <mat-radio-group
                (change)="onChange()"
                [formControl]="control"
                fxFlexOffset="10px"
                fxLayout="{{ getLayout() }}"
                fxLayoutGap="10px"
        >
          <mat-radio-button *ngFor="let option of instance.component.values"
                            value="{{ option.value }}"
                            [checked]="isRadioChecked(option)"
                            (keyup.space)="clearValue($event, option)"
                            (click)="clearValue($event, option)"
          >
            {{ option.label }}
          </mat-radio-button>
          <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
        </mat-radio-group>
      </div>
    </ng-template>
  `
            },] }
];
RadioComponent.MaterialComponent = MaterialRadioComponent;
export { RadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sY0FBYyxNQUFNLG9DQUFvQyxDQUFDO0FBaUNoRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsaUJBQWlCO0lBQzNELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDM0QsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFNO1FBQ25CLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNO1FBQ3RCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUU7WUFDOUIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJUO2FBQ0Y7O0FBdUJELGNBQWMsQ0FBQyxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vTWF0ZXJpYWxDb21wb25lbnQnO1xuaW1wb3J0IFJhZGlvQ29tcG9uZW50IGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvcmFkaW8vUmFkaW8uanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9ybWlvLXJhZGlvJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm1pby1mb3JtLWZpZWxkIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiIFtjb21wb25lbnRUZW1wbGF0ZV09XCJjb21wb25lbnRUZW1wbGF0ZVwiPjwvbWF0LWZvcm1pby1mb3JtLWZpZWxkPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50VGVtcGxhdGUgbGV0LWhhc0xhYmVsPlxuICAgICAgPGRpdiBmeExheW91dD1cImNvbHVtblwiPlxuICAgICAgICA8bWF0LWxhYmVsICpuZ0lmPVwiaGFzTGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIiBtYXRGb3JtaW9MYWJlbD48L3NwYW4+XG4gICAgICAgIDwvbWF0LWxhYmVsPlxuXG4gICAgICAgIDxtYXQtcmFkaW8tZ3JvdXBcbiAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKClcIlxuICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICBmeEZsZXhPZmZzZXQ9XCIxMHB4XCJcbiAgICAgICAgICAgICAgICBmeExheW91dD1cInt7IGdldExheW91dCgpIH19XCJcbiAgICAgICAgICAgICAgICBmeExheW91dEdhcD1cIjEwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBpbnN0YW5jZS5jb21wb25lbnQudmFsdWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7IG9wdGlvbi52YWx1ZSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXNSYWRpb0NoZWNrZWQob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwLnNwYWNlKT1cImNsZWFyVmFsdWUoJGV2ZW50LCBvcHRpb24pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xlYXJWYWx1ZSgkZXZlbnQsIG9wdGlvbilcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IG9wdGlvbi5sYWJlbCB9fVxuICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwiaW5zdGFuY2UuZXJyb3JcIj57eyBpbnN0YW5jZS5lcnJvci5tZXNzYWdlIH19PC9tYXQtZXJyb3I+XG4gICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbFJhZGlvQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQge1xuICBnZXRMYXlvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LmlubGluZSA/ICdyb3cnIDogJ2NvbHVtbic7XG4gIH1cblxuICBpc1JhZGlvQ2hlY2tlZChvcHRpb24pIHtcbiAgICByZXR1cm4gb3B0aW9uLnZhbHVlID09PSB0aGlzLmluc3RhbmNlLmRhdGFWYWx1ZTtcbiAgfVxuXG4gIGNsZWFyVmFsdWUoZXZlbnQsIG9wdGlvbikge1xuICAgIGlmICh0aGlzLmlzUmFkaW9DaGVja2VkKG9wdGlvbikpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmRlc2VsZWN0VmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICBkZXNlbGVjdFZhbHVlKCkge1xuICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlVmFsdWUobnVsbCwge1xuICAgICAgbW9kaWZpZWQ6IHRydWUsXG4gICAgfSk7XG4gIH1cbn1cblJhZGlvQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxSYWRpb0NvbXBvbmVudDtcbmV4cG9ydCB7IFJhZGlvQ29tcG9uZW50IH07XG4iXX0=