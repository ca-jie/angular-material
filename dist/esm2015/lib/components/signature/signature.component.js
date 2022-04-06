import { Component, ViewChild } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import SignatureComponent from 'formiojs/components/signature/Signature.js';
export class MaterialSignatureComponent extends MaterialComponent {
    renderComponents() {
        if (this.signatureElement) {
            this.instance.attach(this.signatureElement.nativeElement);
        }
    }
    ngAfterViewInit() {
        this.renderComponents();
    }
}
MaterialSignatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-signature',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <div #signature>

        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>

        <button mat-icon-button [ngStyle]="{position: 'absolute'}" ref="refresh">
          <mat-icon>refresh</mat-icon>
        </button>

        <div class="signature-pad-body"
             [ngStyle]="{width: instance.component.width, height: instance.component.height, padding: 0, margin: 0}"
             [attr.tabindex]="instance.component.tabindex || 0"
             ref="padBody"
        >
          <canvas class="signature-pad-canvas"
                  [attr.height]="instance.component.height"
                  ref="canvas"
          ></canvas>
          <img fxFlexFill [ngStyle]="{display: 'none' }" ref="signatureImage">
        </div>
        <div *ngIf="instance.component.footer"
             class="signature-pad-footer"
             fxLayout="row"
             fxLayoutAlign="center center"
        >
          <mat-hint>{{ instance.t(instance.component.footer) }}</mat-hint>
        </div>
      </div>
    </ng-template>
  `
            },] }
];
MaterialSignatureComponent.propDecorators = {
    signatureElement: [{ type: ViewChild, args: ['signature',] }]
};
SignatureComponent.MaterialComponent = MaterialSignatureComponent;
export { SignatureComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaWduYXR1cmUvc2lnbmF0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxrQkFBa0IsTUFBTSw0Q0FBNEMsQ0FBQztBQXNDNUUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGlCQUFpQjtJQUcvRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1Q7YUFDRjs7OytCQUVFLFNBQVMsU0FBQyxXQUFXOztBQVl4QixrQkFBa0IsQ0FBQyxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL01hdGVyaWFsQ29tcG9uZW50JztcbmltcG9ydCBTaWduYXR1cmVDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9zaWduYXR1cmUvU2lnbmF0dXJlLmpzJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tc2lnbmF0dXJlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm1pby1mb3JtLWZpZWxkIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiIFtjb21wb25lbnRUZW1wbGF0ZV09XCJjb21wb25lbnRUZW1wbGF0ZVwiPjwvbWF0LWZvcm1pby1mb3JtLWZpZWxkPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50VGVtcGxhdGUgbGV0LWhhc0xhYmVsPlxuICAgICAgPGRpdiAjc2lnbmF0dXJlPlxuXG4gICAgICAgIDxtYXQtbGFiZWwgKm5nSWY9XCJoYXNMYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiIG1hdEZvcm1pb0xhYmVsPjwvc3Bhbj5cbiAgICAgICAgPC9tYXQtbGFiZWw+XG5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW25nU3R5bGVdPVwie3Bvc2l0aW9uOiAnYWJzb2x1dGUnfVwiIHJlZj1cInJlZnJlc2hcIj5cbiAgICAgICAgICA8bWF0LWljb24+cmVmcmVzaDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWduYXR1cmUtcGFkLWJvZHlcIlxuICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInt3aWR0aDogaW5zdGFuY2UuY29tcG9uZW50LndpZHRoLCBoZWlnaHQ6IGluc3RhbmNlLmNvbXBvbmVudC5oZWlnaHQsIHBhZGRpbmc6IDAsIG1hcmdpbjogMH1cIlxuICAgICAgICAgICAgIFthdHRyLnRhYmluZGV4XT1cImluc3RhbmNlLmNvbXBvbmVudC50YWJpbmRleCB8fCAwXCJcbiAgICAgICAgICAgICByZWY9XCJwYWRCb2R5XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxjYW52YXMgY2xhc3M9XCJzaWduYXR1cmUtcGFkLWNhbnZhc1wiXG4gICAgICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwiaW5zdGFuY2UuY29tcG9uZW50LmhlaWdodFwiXG4gICAgICAgICAgICAgICAgICByZWY9XCJjYW52YXNcIlxuICAgICAgICAgID48L2NhbnZhcz5cbiAgICAgICAgICA8aW1nIGZ4RmxleEZpbGwgW25nU3R5bGVdPVwie2Rpc3BsYXk6ICdub25lJyB9XCIgcmVmPVwic2lnbmF0dXJlSW1hZ2VcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJpbnN0YW5jZS5jb21wb25lbnQuZm9vdGVyXCJcbiAgICAgICAgICAgICBjbGFzcz1cInNpZ25hdHVyZS1wYWQtZm9vdGVyXCJcbiAgICAgICAgICAgICBmeExheW91dD1cInJvd1wiXG4gICAgICAgICAgICAgZnhMYXlvdXRBbGlnbj1cImNlbnRlciBjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPG1hdC1oaW50Pnt7IGluc3RhbmNlLnQoaW5zdGFuY2UuY29tcG9uZW50LmZvb3RlcikgfX08L21hdC1oaW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxTaWduYXR1cmVDb21wb25lbnQgZXh0ZW5kcyBNYXRlcmlhbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdzaWduYXR1cmUnKSBzaWduYXR1cmVFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIHJlbmRlckNvbXBvbmVudHMoKSB7XG4gICAgaWYgKHRoaXMuc2lnbmF0dXJlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hdHRhY2godGhpcy5zaWduYXR1cmVFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlckNvbXBvbmVudHMoKTtcbiAgfVxufVxuU2lnbmF0dXJlQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxTaWduYXR1cmVDb21wb25lbnQ7XG5leHBvcnQgeyBTaWduYXR1cmVDb21wb25lbnQgfTtcbiJdfQ==