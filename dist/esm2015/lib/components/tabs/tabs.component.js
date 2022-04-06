import { Component } from '@angular/core';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import TabsComponent from 'formiojs/components/tabs/Tabs.js';
export class MaterialTabsComponent extends MaterialNestedComponent {
    setInstance(instance) {
        super.setInstance(instance);
        instance.viewContainer = (component) => {
            return this.viewContainers ? this.viewContainers[component.tab] : null;
        };
    }
}
MaterialTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-tabs',
                template: `
    <mat-tab-group>
      <mat-tab *ngFor="let tab of instance.component.components" [label]="tab.label">
        <div fxLayout="column" fxLayoutGap="1em" style="border: 1px dotted rgba(0, 0, 0, 0.125)">
          <ng-template #components></ng-template>
        </div>
      </mat-tab>
    </mat-tab-group>
  `
            },] }
];
TabsComponent.MaterialComponent = MaterialTabsComponent;
export { TabsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sYUFBYSxNQUFNLGtDQUFrQyxDQUFDO0FBYzdELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx1QkFBdUI7SUFDaEUsV0FBVyxDQUFDLFFBQWE7UUFDdkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixRQUFRLENBQUMsYUFBYSxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pFLENBQUMsQ0FBQztJQUNKLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2FBQ0Y7O0FBU0QsYUFBYSxDQUFDLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQgfSBmcm9tICcuLi9NYXRlcmlhbE5lc3RlZENvbXBvbmVudCc7XG5pbXBvcnQgVGFic0NvbXBvbmVudCBmcm9tICdmb3JtaW9qcy9jb21wb25lbnRzL3RhYnMvVGFicy5qcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tdGFicycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC10YWItZ3JvdXA+XG4gICAgICA8bWF0LXRhYiAqbmdGb3I9XCJsZXQgdGFiIG9mIGluc3RhbmNlLmNvbXBvbmVudC5jb21wb25lbnRzXCIgW2xhYmVsXT1cInRhYi5sYWJlbFwiPlxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwiY29sdW1uXCIgZnhMYXlvdXRHYXA9XCIxZW1cIiBzdHlsZT1cImJvcmRlcjogMXB4IGRvdHRlZCByZ2JhKDAsIDAsIDAsIDAuMTI1KVwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50cz48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWF0LXRhYj5cbiAgICA8L21hdC10YWItZ3JvdXA+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxUYWJzQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQge1xuICBzZXRJbnN0YW5jZShpbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIuc2V0SW5zdGFuY2UoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLnZpZXdDb250YWluZXIgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3Q29udGFpbmVycyA/IHRoaXMudmlld0NvbnRhaW5lcnNbY29tcG9uZW50LnRhYl0gOiBudWxsO1xuICAgIH07XG4gIH1cbn1cblRhYnNDb21wb25lbnQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbFRhYnNDb21wb25lbnQ7XG5leHBvcnQgeyBUYWJzQ29tcG9uZW50IH07XG4iXX0=