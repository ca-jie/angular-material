import { Component } from '@angular/core';
import WellComponent from 'formiojs/components/well/Well.js';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
export class MaterialWellComponent extends MaterialNestedComponent {
}
MaterialWellComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-well',
                template: `
    <mat-card>
      <mat-card-content fxLayout="column"
                        fxLayoutGap="1em"
                        [ngStyle]="{
                           'background-color':'#f5f5f5',
                           'padding': '1.5em'
                         }"
      >
        <ng-template #components></ng-template>
      </mat-card-content>
    </mat-card>
  `
            },] }
];
WellComponent.MaterialComponent = MaterialWellComponent;
export { WellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvd2VsbC93ZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sYUFBYSxNQUFNLGtDQUFrQyxDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBa0JyRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsdUJBQXVCOzs7WUFqQmpFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2FBRUY7O0FBRUQsYUFBYSxDQUFDLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFdlbGxDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy93ZWxsL1dlbGwuanMnO1xuaW1wb3J0IHsgTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQgfSBmcm9tICcuLi9NYXRlcmlhbE5lc3RlZENvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9ybWlvLXdlbGwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtY2FyZD5cbiAgICAgIDxtYXQtY2FyZC1jb250ZW50IGZ4TGF5b3V0PVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ4TGF5b3V0R2FwPVwiMWVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzonI2Y1ZjVmNScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAncGFkZGluZyc6ICcxLjVlbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRzPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPC9tYXQtY2FyZD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbFdlbGxDb21wb25lbnQgZXh0ZW5kcyBNYXRlcmlhbE5lc3RlZENvbXBvbmVudCB7fVxuV2VsbENvbXBvbmVudC5NYXRlcmlhbENvbXBvbmVudCA9IE1hdGVyaWFsV2VsbENvbXBvbmVudDtcbmV4cG9ydCB7IFdlbGxDb21wb25lbnQgfTtcbiJdfQ==