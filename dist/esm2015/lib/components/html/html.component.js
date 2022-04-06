import { Component, ViewChild } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import HtmlComponent from 'formiojs/components/html/HTML.js';
export class MaterialHtmlComponent extends MaterialComponent {
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.instance.component.refreshOnChange) {
            this.instance.checkRefreshOn = () => {
                this.htmlBody.nativeElement.innerHTML = this.instance.renderContent();
            };
        }
    }
}
MaterialHtmlComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-html',
                template: `<div #htmlBody></div>`
            },] }
];
MaterialHtmlComponent.propDecorators = {
    htmlBody: [{ type: ViewChild, args: ['htmlBody',] }]
};
HtmlComponent.MaterialComponent = MaterialHtmlComponent;
export { HtmlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaHRtbC9odG1sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxhQUFhLE1BQU0sa0NBQWtDLENBQUM7QUFNN0QsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFpQjtJQUcxRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLEdBQUcsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEUsQ0FBQyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7O3VCQUVFLFNBQVMsU0FBQyxVQUFVOztBQVd2QixhQUFhLENBQUMsaUJBQWlCLEdBQUcscUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vTWF0ZXJpYWxDb21wb25lbnQnO1xuaW1wb3J0IEh0bWxDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9odG1sL0hUTUwuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9ybWlvLWh0bWwnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI2h0bWxCb2R5PjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxIdG1sQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnaHRtbEJvZHknKSBodG1sQm9keTogRWxlbWVudFJlZjtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LnJlZnJlc2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5jaGVja1JlZnJlc2hPbiA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5odG1sQm9keS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuaW5zdGFuY2UucmVuZGVyQ29udGVudCgpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbkh0bWxDb21wb25lbnQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbEh0bWxDb21wb25lbnQ7XG5leHBvcnQgeyBIdG1sQ29tcG9uZW50IH07XG4iXX0=