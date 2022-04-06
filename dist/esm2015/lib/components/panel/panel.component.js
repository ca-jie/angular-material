import { Component } from '@angular/core';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import PanelComponent from 'formiojs/components/panel/Panel.js';
export class MaterialPanelComponent extends MaterialNestedComponent {
}
MaterialPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-panel',
                template: `
    <mat-card *ngIf="!instance.component.collapsible">
      <mat-card-title *ngIf="instance?.component?.title">
        {{ instance.component.title }}
      </mat-card-title>
      <mat-card-content fxLayout="column" fxLayoutGap="1em">
        <ng-template #components></ng-template>
      </mat-card-content>
    </mat-card>
    <mat-expansion-panel *ngIf="instance.component.collapsible"
                         [expanded]="!instance.component.collapsed"
    >
      <mat-expansion-panel-header *ngIf="instance?.component?.title">
        <mat-panel-title>
          {{ instance.component.title }}
        </mat-panel-title>
      </mat-expansion-panel-header>
      <ng-template #components></ng-template>
    </mat-expansion-panel>
  `,
                styles: [':host { margin-bottom: 1em; }']
            },] }
];
PanelComponent.MaterialComponent = MaterialPanelComponent;
export { PanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sY0FBYyxNQUFNLG9DQUFvQyxDQUFDO0FBMkJoRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsdUJBQXVCOzs7WUExQmxFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7eUJBRUMsK0JBQStCO2FBRWxDOztBQUVELGNBQWMsQ0FBQyxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsTmVzdGVkQ29tcG9uZW50IH0gZnJvbSAnLi4vTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQnO1xuaW1wb3J0IFBhbmVsQ29tcG9uZW50IGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvcGFuZWwvUGFuZWwuanMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby1wYW5lbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1jYXJkICpuZ0lmPVwiIWluc3RhbmNlLmNvbXBvbmVudC5jb2xsYXBzaWJsZVwiPlxuICAgICAgPG1hdC1jYXJkLXRpdGxlICpuZ0lmPVwiaW5zdGFuY2U/LmNvbXBvbmVudD8udGl0bGVcIj5cbiAgICAgICAge3sgaW5zdGFuY2UuY29tcG9uZW50LnRpdGxlIH19XG4gICAgICA8L21hdC1jYXJkLXRpdGxlPlxuICAgICAgPG1hdC1jYXJkLWNvbnRlbnQgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjFlbVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2NvbXBvbmVudHM+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbWF0LWNhcmQtY29udGVudD5cbiAgICA8L21hdC1jYXJkPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsICpuZ0lmPVwiaW5zdGFuY2UuY29tcG9uZW50LmNvbGxhcHNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwiIWluc3RhbmNlLmNvbXBvbmVudC5jb2xsYXBzZWRcIlxuICAgID5cbiAgICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciAqbmdJZj1cImluc3RhbmNlPy5jb21wb25lbnQ/LnRpdGxlXCI+XG4gICAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgICAge3sgaW5zdGFuY2UuY29tcG9uZW50LnRpdGxlIH19XG4gICAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50cz48L25nLXRlbXBsYXRlPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgJzpob3N0IHsgbWFyZ2luLWJvdHRvbTogMWVtOyB9J1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBNYXRlcmlhbE5lc3RlZENvbXBvbmVudCB7fVxuUGFuZWxDb21wb25lbnQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbFBhbmVsQ29tcG9uZW50O1xuZXhwb3J0IHsgUGFuZWxDb21wb25lbnQgfTtcbiJdfQ==