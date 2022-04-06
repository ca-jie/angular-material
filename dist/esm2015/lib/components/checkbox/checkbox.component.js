import { Component } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import CheckboxComponent from 'formiojs/components/checkbox/Checkbox.js';
import _ from 'lodash';
export class MaterialCheckboxComponent extends MaterialComponent {
    getValue() {
        return _.isNil(this.control.value) ? '' : this.control.value;
    }
}
MaterialCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-checkbox',
                template: `
    <mat-checkbox (change)="onChange()" [ngClass]="{'validation-error' : !!instance.error}"
                  [formControl]="control"
    >
      <span matFormioLabel [instance]="instance"></span>
      <mat-icon *ngIf="instance.component.tooltip" matSuffix
                matTooltip="{{ instance.component.tooltip }}" style="font-size: 1rem;">info
      </mat-icon>
    </mat-checkbox>
    <mat-hint>
      {{ instance.component.description  }}
    </mat-hint>
    <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
  `,
                styles: ['::ng-deep .mat-checkbox.validation-error .mat-checkbox-frame {border-color: red; }']
            },] }
];
CheckboxComponent.MaterialComponent = MaterialCheckboxComponent;
export { CheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8saUJBQWlCLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBb0J2QixNQUFNLE9BQU8seUJBQTBCLFNBQVEsaUJBQWlCO0lBQzlELFFBQVE7UUFDTixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO3lCQUNPLG9GQUFvRjthQUM3Rjs7QUFNRCxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9NYXRlcmlhbENvbXBvbmVudCc7XG5pbXBvcnQgQ2hlY2tib3hDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9jaGVja2JveC9DaGVja2JveC5qcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9ybWlvLWNoZWNrYm94JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWNoZWNrYm94IChjaGFuZ2UpPVwib25DaGFuZ2UoKVwiIFtuZ0NsYXNzXT1cInsndmFsaWRhdGlvbi1lcnJvcicgOiAhIWluc3RhbmNlLmVycm9yfVwiXG4gICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgPlxuICAgICAgPHNwYW4gbWF0Rm9ybWlvTGFiZWwgW2luc3RhbmNlXT1cImluc3RhbmNlXCI+PC9zcGFuPlxuICAgICAgPG1hdC1pY29uICpuZ0lmPVwiaW5zdGFuY2UuY29tcG9uZW50LnRvb2x0aXBcIiBtYXRTdWZmaXhcbiAgICAgICAgICAgICAgICBtYXRUb29sdGlwPVwie3sgaW5zdGFuY2UuY29tcG9uZW50LnRvb2x0aXAgfX1cIiBzdHlsZT1cImZvbnQtc2l6ZTogMXJlbTtcIj5pbmZvXG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvbWF0LWNoZWNrYm94PlxuICAgIDxtYXQtaGludD5cbiAgICAgIHt7IGluc3RhbmNlLmNvbXBvbmVudC5kZXNjcmlwdGlvbiAgfX1cbiAgICA8L21hdC1oaW50PlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpbnN0YW5jZS5lcnJvclwiPnt7IGluc3RhbmNlLmVycm9yLm1lc3NhZ2UgfX08L21hdC1lcnJvcj5cbiAgYCxcbiAgc3R5bGVzOlsnOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gudmFsaWRhdGlvbi1lcnJvciAubWF0LWNoZWNrYm94LWZyYW1lIHtib3JkZXItY29sb3I6IHJlZDsgfSddXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBNYXRlcmlhbENvbXBvbmVudCB7XG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiBfLmlzTmlsKHRoaXMuY29udHJvbC52YWx1ZSkgPyAnJyA6IHRoaXMuY29udHJvbC52YWx1ZTtcbiAgfVxufVxuQ2hlY2tib3hDb21wb25lbnQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbENoZWNrYm94Q29tcG9uZW50O1xuZXhwb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfTtcbiJdfQ==