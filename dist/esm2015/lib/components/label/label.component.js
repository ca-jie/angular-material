import { Component, Input } from '@angular/core';
export class LabelComponent {
}
LabelComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'span[matFormioLabel]',
                template: "<ng-container *ngIf=\"instance\">\n  {{ instance.component.label }}<span class=\"required-star\" *ngIf=\"instance.component.validate.required\">*</span>\n  <mat-icon *ngIf=\"instance.component.tooltip\" style=\"font-size: 1rem;\"\n            matTooltip=\"{{ instance.component.tooltip }}\" matSuffix\n  >\n    info\n  </mat-icon>\n</ng-container>\n",
                styles: [":host{display:block;pointer-events:all}.required-star{color:red;font-size:.8rem;margin-left:.2rem;vertical-align:top}"]
            },] }
];
LabelComponent.propDecorators = {
    instance: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xhYmVsL2xhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVFqRCxNQUFNLE9BQU8sY0FBYzs7O1lBTjFCLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHlXQUFxQzs7YUFFdEM7Ozt1QkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3NwYW5bbWF0Rm9ybWlvTGFiZWxdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGFiZWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW5zdGFuY2U7XG59XG4iXX0=