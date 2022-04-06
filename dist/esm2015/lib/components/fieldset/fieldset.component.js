import { Component } from '@angular/core';
import FieldsetComponent from 'formiojs/components/fieldset/Fieldset.js';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
export class MaterialFieldsetComponent extends MaterialNestedComponent {
}
MaterialFieldsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-fieldset',
                template: `
    <fieldset>
      <legend [attr.ref]="'header'">
        {{ instance.component.legend }}
        <mat-icon *ngIf="instance.component.tooltip"
                  matSuffix
                  matTooltip="{{ instance.component.tooltip }}"
        >
          info
        </mat-icon>
      </legend>
      <div class="fieldset-body" [attr.ref]="instance.component.key" fxLayout="column" fxLayoutGap="1em">
        <ng-template #components></ng-template>
      </div>
    </fieldset>
  `
            },] }
];
FieldsetComponent.MaterialComponent = MaterialFieldsetComponent;
export { FieldsetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpZWxkc2V0L2ZpZWxkc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8saUJBQWlCLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFxQnJFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx1QkFBdUI7OztZQXBCckUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7YUFFRjs7QUFFRCxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEZpZWxkc2V0Q29tcG9uZW50IGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvZmllbGRzZXQvRmllbGRzZXQuanMnO1xuaW1wb3J0IHsgTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQgfSBmcm9tICcuLi9NYXRlcmlhbE5lc3RlZENvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9ybWlvLWZpZWxkc2V0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZmllbGRzZXQ+XG4gICAgICA8bGVnZW5kIFthdHRyLnJlZl09XCInaGVhZGVyJ1wiPlxuICAgICAgICB7eyBpbnN0YW5jZS5jb21wb25lbnQubGVnZW5kIH19XG4gICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImluc3RhbmNlLmNvbXBvbmVudC50b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgIG1hdFN1ZmZpeFxuICAgICAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cInt7IGluc3RhbmNlLmNvbXBvbmVudC50b29sdGlwIH19XCJcbiAgICAgICAgPlxuICAgICAgICAgIGluZm9cbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgIDwvbGVnZW5kPlxuICAgICAgPGRpdiBjbGFzcz1cImZpZWxkc2V0LWJvZHlcIiBbYXR0ci5yZWZdPVwiaW5zdGFuY2UuY29tcG9uZW50LmtleVwiIGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxZW1cIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRzPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2ZpZWxkc2V0PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRmllbGRzZXRDb21wb25lbnQgZXh0ZW5kcyBNYXRlcmlhbE5lc3RlZENvbXBvbmVudCB7fVxuRmllbGRzZXRDb21wb25lbnQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbEZpZWxkc2V0Q29tcG9uZW50O1xuZXhwb3J0IHsgRmllbGRzZXRDb21wb25lbnQgfTtcbiJdfQ==