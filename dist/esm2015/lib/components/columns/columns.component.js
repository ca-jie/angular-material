import { Component } from '@angular/core';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import ColumnsComponent from 'formiojs/components/columns/Columns.js';
export class MaterialColumnsComponent extends MaterialNestedComponent {
    constructor() {
        super(...arguments);
        this.flexGap = 0.5;
        this.totalSpace = 0;
    }
    setInstance(instance) {
        this.totalSpace = 100 - ((instance.component.columns.length - 1) * this.flexGap);
        super.setInstance(instance);
        instance.viewContainer = (component) => {
            return this.viewContainers ? this.viewContainers[component.column] : null;
        };
    }
    flexWidth(column, index) {
        if (index >= (this.instance.component.columns.length - 1)) {
            return Math.ceil(((parseFloat(column.width) / 12) * this.totalSpace)) + '%';
        }
        else {
            return Math.floor(((parseFloat(column.width) / 12) * this.totalSpace)) + '%';
        }
    }
}
MaterialColumnsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-columns',
                template: `
    <div class="container"
         fxLayout="row"
         fxLayout.xs="column"
         fxLayoutWrap
         fxLayoutGap="{{ flexGap }}%"
         fxLayoutAlign="center"
    >
      <div
        *ngFor="let column of instance.component.columns; let i = index"
        [fxFlex]="flexWidth(column, i)"
        fxLayout="column"
        fxLayoutGap="1em">
        <ng-template #components></ng-template>
      </div>
    </div>
  `
            },] }
];
ColumnsComponent.MaterialComponent = MaterialColumnsComponent;
export { ColumnsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY29sdW1ucy9jb2x1bW5zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sZ0JBQWdCLE1BQU0sd0NBQXdDLENBQUM7QUF1QnRFLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSx1QkFBdUI7SUFyQnJFOztRQXNCUyxZQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QsZUFBVSxHQUFHLENBQUMsQ0FBQztJQWdCeEIsQ0FBQztJQWZDLFdBQVcsQ0FBQyxRQUFhO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pGLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsUUFBUSxDQUFDLGFBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1RSxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLO1FBQ3JCLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN6RCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzdFO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzlFO0lBQ0gsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7YUFFRjs7QUFvQkQsZ0JBQWdCLENBQUMsaUJBQWlCLEdBQUcsd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsTmVzdGVkQ29tcG9uZW50IH0gZnJvbSAnLi4vTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQnO1xuaW1wb3J0IENvbHVtbnNDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9jb2x1bW5zL0NvbHVtbnMuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9ybWlvLWNvbHVtbnMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIlxuICAgICAgICAgZnhMYXlvdXQ9XCJyb3dcIlxuICAgICAgICAgZnhMYXlvdXQueHM9XCJjb2x1bW5cIlxuICAgICAgICAgZnhMYXlvdXRXcmFwXG4gICAgICAgICBmeExheW91dEdhcD1cInt7IGZsZXhHYXAgfX0lXCJcbiAgICAgICAgIGZ4TGF5b3V0QWxpZ249XCJjZW50ZXJcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBpbnN0YW5jZS5jb21wb25lbnQuY29sdW1uczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgIFtmeEZsZXhdPVwiZmxleFdpZHRoKGNvbHVtbiwgaSlcIlxuICAgICAgICBmeExheW91dD1cImNvbHVtblwiXG4gICAgICAgIGZ4TGF5b3V0R2FwPVwiMWVtXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50cz48L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDb2x1bW5zQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQge1xuICBwdWJsaWMgZmxleEdhcCA9IDAuNTtcbiAgcHVibGljIHRvdGFsU3BhY2UgPSAwO1xuICBzZXRJbnN0YW5jZShpbnN0YW5jZTogYW55KSB7XG4gICAgdGhpcy50b3RhbFNwYWNlID0gMTAwIC0gKChpbnN0YW5jZS5jb21wb25lbnQuY29sdW1ucy5sZW5ndGggLSAxKSAqIHRoaXMuZmxleEdhcCk7XG4gICAgc3VwZXIuc2V0SW5zdGFuY2UoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLnZpZXdDb250YWluZXIgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3Q29udGFpbmVycyA/IHRoaXMudmlld0NvbnRhaW5lcnNbY29tcG9uZW50LmNvbHVtbl0gOiBudWxsO1xuICAgIH07XG4gIH1cblxuICBmbGV4V2lkdGgoY29sdW1uLCBpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSAodGhpcy5pbnN0YW5jZS5jb21wb25lbnQuY29sdW1ucy5sZW5ndGggLSAxKSkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCgoKHBhcnNlRmxvYXQoY29sdW1uLndpZHRoKSAvIDEyKSAqIHRoaXMudG90YWxTcGFjZSkpICsgJyUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoKHBhcnNlRmxvYXQoY29sdW1uLndpZHRoKSAvIDEyKSAqIHRoaXMudG90YWxTcGFjZSkpICsgJyUnO1xuICAgIH1cbiAgfVxufVxuQ29sdW1uc0NvbXBvbmVudC5NYXRlcmlhbENvbXBvbmVudCA9IE1hdGVyaWFsQ29sdW1uc0NvbXBvbmVudDtcbmV4cG9ydCB7IENvbHVtbnNDb21wb25lbnQgfTtcbiJdfQ==