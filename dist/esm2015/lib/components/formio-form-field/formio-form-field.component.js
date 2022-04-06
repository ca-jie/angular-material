import { Component, Input } from '@angular/core';
import { LabelPositions } from '../../const/LabelPositions';
export class FormioFormFieldComponent {
    constructor() {
        this.labelPositions = LabelPositions;
        this.renderTopLabel = false;
        this.showDescription = true;
        this.renderElementOnly = false;
    }
    set instance(instance) {
        this._instance = instance;
        if (instance) {
            this.componentTemplateContext = { $implicit: this.hasLabel(['top']) };
        }
    }
    get instance() {
        return this._instance;
    }
    hasLabel(labelPositions) {
        const { component } = this.instance;
        const hasNoLabel = !component.label || component.hideLabel;
        const labelPositionIsNotSpecified = !labelPositions ||
            !labelPositions.length ||
            !component.labelPosition;
        if (hasNoLabel || labelPositionIsNotSpecified || this.renderElementOnly) {
            return false;
        }
        if (labelPositions.includes(component.labelPosition)) {
            return true;
        }
    }
}
FormioFormFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-form-field',
                template: "<div class=\"mat-formio-component-wrapper\" *ngIf=\"instance && !renderElementOnly\"\n     [ngClass]=\"{\n        'mat-formio-label-right': hasLabel([labelPositions.RIGHT_RIGHT, labelPositions.RIGHT_LEFT]),\n        'mat-formio-label-left': hasLabel([labelPositions.LEFT_LEFT, labelPositions.LEFT_RIGHT])\n     }\"\n>\n  <span *ngIf=\"renderTopLabel && hasLabel([labelPositions.TOP])\"\n        class=\"mat-formio-label\"\n        [ngClass]=\"{\n          'mat-formio-label-align-right': hasLabel([labelPositions.LEFT_RIGHT, labelPositions.RIGHT_RIGHT]),\n          'mat-formio-label-align-left': hasLabel([labelPositions.LEFT_LEFT, labelPositions.RIGHT_LEFT])\n        }\"\n  >\n    <ng-container *ngTemplateOutlet=\"labelTemplate || defaultLabel\"></ng-container>\n  </span>\n\n  <div class=\"mat-formio-component\" *ngTemplateOutlet=\"componentTemplate; context: componentTemplateContext\"></div>\n\n  <span *ngIf=\"hasLabel([\n                          labelPositions.BOTTOM,\n                          labelPositions.RIGHT_RIGHT,\n                          labelPositions.RIGHT_LEFT,\n                          labelPositions.LEFT_LEFT,\n                          labelPositions.LEFT_RIGHT\n                        ])\"\n        class=\"mat-formio-label\"\n        [ngClass]=\"{\n          'mat-formio-label-align-right': hasLabel([labelPositions.LEFT_RIGHT, labelPositions.RIGHT_RIGHT]),\n          'mat-formio-label-align-left': hasLabel([labelPositions.LEFT_LEFT, labelPositions.RIGHT_LEFT])\n        }\"\n  >\n    <ng-container *ngTemplateOutlet=\"labelTemplate || defaultLabel\"></ng-container>\n  </span>\n\n  <mat-hint *ngIf=\"showDescription && instance.component.description\" class=\"mat-formio-component-description\">\n    {{ instance.component.description }}\n  </mat-hint>\n</div>\n\n<div class=\"mat-formio-component-wrapper\" *ngIf=\"renderElementOnly\">\n  <div class=\"mat-formio-component\" *ngTemplateOutlet=\"componentTemplate; context: componentTemplateContext\"></div>\n</div>\n\n<ng-template #defaultLabel>\n  <mat-label>\n    <span style=\"display: block;\"\n          [instance]=\"instance\" matFormioLabel>\n    </span>\n  </mat-label>\n</ng-template>\n",
                styles: [".mat-formio-component-description{-ms-grid-column:1;-ms-grid-row:2;display:block;grid-area:description}.mat-formio-component-wrapper.mat-formio-label-left>.mat-formio-component-description{-ms-grid-column:2;-ms-grid-row:2}.mat-formio-component{-ms-grid-column:1;-ms-grid-row:1;grid-area:component}.mat-formio-component-wrapper.mat-formio-label-left>.mat-formio-component{-ms-grid-column:2;-ms-grid-row:1}.mat-formio-label{-ms-grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-area:label}.mat-formio-component-wrapper.mat-formio-label-left>.mat-formio-label{-ms-grid-column:1;-ms-grid-row:1;-ms-grid-row-span:2}.mat-formio-label.mat-formio-label-align-right{margin-left:auto}.mat-formio-label.mat-formio-label-align-left{margin-right:auto}.mat-formio-component-wrapper.mat-formio-label-left,.mat-formio-component-wrapper.mat-formio-label-right{-ms-grid-columns:auto auto;display:-ms-grid;display:grid;grid-column-gap:1em;grid-template-columns:auto auto}.mat-formio-component-wrapper.mat-formio-label-right{grid-template-areas:\"component label\" \"description label\"}.mat-formio-component-wrapper.mat-formio-label-left{grid-template-areas:\"label component\" \"label description\"}"]
            },] }
];
FormioFormFieldComponent.propDecorators = {
    labelTemplate: [{ type: Input }],
    renderTopLabel: [{ type: Input }],
    showDescription: [{ type: Input }],
    renderElementOnly: [{ type: Input }],
    instance: [{ type: Input, args: ['instance',] }],
    componentTemplate: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLWZvcm0tZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Zvcm1pby1mb3JtLWZpZWxkL2Zvcm1pby1mb3JtLWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPNUQsTUFBTSxPQUFPLHdCQUF3QjtJQUxyQztRQU9TLG1CQUFjLEdBQUcsY0FBYyxDQUFDO1FBRTlCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztJQWdDckMsQ0FBQztJQTlCQyxJQUNJLFFBQVEsQ0FBQyxRQUFRO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLHdCQUF3QixHQUFHLEVBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFLRCxRQUFRLENBQUMsY0FBeUI7UUFDaEMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDcEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDM0QsTUFBTSwyQkFBMkIsR0FBRyxDQUFDLGNBQWM7WUFDZixDQUFDLGNBQWMsQ0FBQyxNQUFNO1lBQ3RCLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUU3RCxJQUFJLFVBQVUsSUFBSSwyQkFBMkIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDdkUsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDcEQsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMscXBFQUFpRDs7YUFFbEQ7Ozs0QkFJRSxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3VCQUVMLEtBQUssU0FBQyxVQUFVO2dDQVloQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhYmVsUG9zaXRpb25zIH0gZnJvbSAnLi4vLi4vY29uc3QvTGFiZWxQb3NpdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9ybWlvLWZvcm0tZmllbGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9ybWlvLWZvcm0tZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtaW8tZm9ybS1maWVsZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybWlvRm9ybUZpZWxkQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfaW5zdGFuY2U7XG4gIHB1YmxpYyBsYWJlbFBvc2l0aW9ucyA9IExhYmVsUG9zaXRpb25zO1xuICBASW5wdXQoKSBsYWJlbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSByZW5kZXJUb3BMYWJlbCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93RGVzY3JpcHRpb24gPSB0cnVlO1xuICBASW5wdXQoKSByZW5kZXJFbGVtZW50T25seSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnaW5zdGFuY2UnKVxuICBzZXQgaW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgdGhpcy5jb21wb25lbnRUZW1wbGF0ZUNvbnRleHQgPSB7JGltcGxpY2l0OiB0aGlzLmhhc0xhYmVsKFsndG9wJ10pfTtcbiAgICB9XG4gIH1cblxuICBnZXQgaW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgQElucHV0KCkgY29tcG9uZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIGNvbXBvbmVudFRlbXBsYXRlQ29udGV4dDtcblxuICBoYXNMYWJlbChsYWJlbFBvc2l0aW9ucz86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBjb21wb25lbnQgfSA9IHRoaXMuaW5zdGFuY2U7XG4gICAgY29uc3QgaGFzTm9MYWJlbCA9ICFjb21wb25lbnQubGFiZWwgfHwgY29tcG9uZW50LmhpZGVMYWJlbDtcbiAgICBjb25zdCBsYWJlbFBvc2l0aW9uSXNOb3RTcGVjaWZpZWQgPSAhbGFiZWxQb3NpdGlvbnMgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbGFiZWxQb3NpdGlvbnMubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWNvbXBvbmVudC5sYWJlbFBvc2l0aW9uO1xuXG4gICAgaWYgKGhhc05vTGFiZWwgfHwgbGFiZWxQb3NpdGlvbklzTm90U3BlY2lmaWVkIHx8IHRoaXMucmVuZGVyRWxlbWVudE9ubHkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobGFiZWxQb3NpdGlvbnMuaW5jbHVkZXMoY29tcG9uZW50LmxhYmVsUG9zaXRpb24pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==