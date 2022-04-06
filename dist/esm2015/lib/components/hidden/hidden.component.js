import { Component } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import HiddenComponent from 'formiojs/components/hidden/Hidden.js';
export class MaterialHiddenComponent extends MaterialComponent {
}
MaterialHiddenComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-hidden',
                template: `<input matInput type="hidden" [formControl]="control" #input>`
            },] }
];
HiddenComponent.MaterialComponent = MaterialHiddenComponent;
export { HiddenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZGVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oaWRkZW4vaGlkZGVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sZUFBZSxNQUFNLHNDQUFzQyxDQUFDO0FBS25FLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxpQkFBaUI7OztZQUo3RCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLCtEQUErRDthQUMxRTs7QUFFRCxlQUFlLENBQUMsaUJBQWlCLEdBQUcsdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL01hdGVyaWFsQ29tcG9uZW50JztcbmltcG9ydCBIaWRkZW5Db21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9oaWRkZW4vSGlkZGVuLmpzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8taGlkZGVuJyxcbiAgdGVtcGxhdGU6IGA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cImhpZGRlblwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgI2lucHV0PmBcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxIaWRkZW5Db21wb25lbnQgZXh0ZW5kcyBNYXRlcmlhbENvbXBvbmVudCB7fVxuSGlkZGVuQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxIaWRkZW5Db21wb25lbnQ7XG5leHBvcnQgeyBIaWRkZW5Db21wb25lbnQgfTtcbiJdfQ==