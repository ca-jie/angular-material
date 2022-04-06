import { Component } from '@angular/core';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import TableComponent from 'formiojs/components/table/Table.js';
export class MaterialTableComponent extends MaterialNestedComponent {
    setInstance(instance) {
        super.setInstance(instance);
        instance.viewContainer = (component) => {
            return this.viewContainers ?
                this.viewContainers[(component.tableRow * this.instance.component.numCols) + component.tableColumn] :
                null;
        };
    }
    getTableColClasses() {
        if (!this.instance) {
            return;
        }
        const { condensed, cellAlignment } = this.instance.component;
        return Object.assign({ 'is-condensed': condensed }, (cellAlignment && { [cellAlignment]: true }));
    }
}
MaterialTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-table',
                template: `
      <table class="mat-table" style="width: 100%;" [ngClass]="{'is-bordered' : instance.component.bordered}">
        <thead>
        <tr class="mat-header-row">
          <th *ngFor="let header of instance.component.header"
              class="mat-header-cell"
          >
            {{ instance.t(header) }}
          </th>
        </tr>
        </thead>

        <tbody>
        <tr *ngFor="let row of instance.table; let i = index"
            role="row"
            class="mat-row"
            [ngClass]="{
                'is-hover': instance.component.hover,
                'is-striped': instance.component.striped && i % 2 === 0
              }"
        >
          <td *ngFor="let col of row"
              role="gridcell"
              class="mat-cell"
              [ngClass]="getTableColClasses()"
          >
            <ng-template #components></ng-template>
          </td>
        </tr>
        </tbody>
      </table>
  `,
                styles: [".mat-table.is-bordered{border:1px solid #ddd}.mat-row.is-hover:hover{background-color:#f5f5f5}.mat-cell{padding:8px}.mat-cell.is-condensed{padding:3px}.mat-row.is-striped{background-color:#eee}.mat-cell.center{text-align:center}.mat-cell.right{text-align:right}"]
            },] }
];
TableComponent.MaterialComponent = MaterialTableComponent;
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sY0FBYyxNQUFNLG9DQUFvQyxDQUFDO0FBc0NoRSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsdUJBQXVCO0lBRWpFLFdBQVcsQ0FBQyxRQUFhO1FBQ3ZCLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsUUFBUSxDQUFDLGFBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDckcsSUFBSSxDQUFDO1FBQ1QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxNQUFNLEVBQUMsU0FBUyxFQUFFLGFBQWEsRUFBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzNELHVCQUNFLGNBQWMsRUFBRSxTQUFTLElBQ3RCLENBQUMsYUFBYSxJQUFJLEVBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxFQUM5QztJQUNILENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFFNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBK0JUOzthQUNGOztBQXVCRCxjQUFjLENBQUMsaUJBQWlCLEdBQUcsc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbE5lc3RlZENvbXBvbmVudCB9IGZyb20gJy4uL01hdGVyaWFsTmVzdGVkQ29tcG9uZW50JztcbmltcG9ydCBUYWJsZUNvbXBvbmVudCBmcm9tICdmb3JtaW9qcy9jb21wb25lbnRzL3RhYmxlL1RhYmxlLmpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby10YWJsZScsXG4gIHN0eWxlVXJsczogWyAnLi90YWJsZS5jb21wb25lbnQuY3NzJyBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPHRhYmxlIGNsYXNzPVwibWF0LXRhYmxlXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiBbbmdDbGFzc109XCJ7J2lzLWJvcmRlcmVkJyA6IGluc3RhbmNlLmNvbXBvbmVudC5ib3JkZXJlZH1cIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICA8dHIgY2xhc3M9XCJtYXQtaGVhZGVyLXJvd1wiPlxuICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgaGVhZGVyIG9mIGluc3RhbmNlLmNvbXBvbmVudC5oZWFkZXJcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1hdC1oZWFkZXItY2VsbFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgaW5zdGFuY2UudChoZWFkZXIpIH19XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGluc3RhbmNlLnRhYmxlOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgIHJvbGU9XCJyb3dcIlxuICAgICAgICAgICAgY2xhc3M9XCJtYXQtcm93XCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAnaXMtaG92ZXInOiBpbnN0YW5jZS5jb21wb25lbnQuaG92ZXIsXG4gICAgICAgICAgICAgICAgJ2lzLXN0cmlwZWQnOiBpbnN0YW5jZS5jb21wb25lbnQuc3RyaXBlZCAmJiBpICUgMiA9PT0gMFxuICAgICAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgY29sIG9mIHJvd1wiXG4gICAgICAgICAgICAgIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWF0LWNlbGxcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJnZXRUYWJsZUNvbENsYXNzZXMoKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRzPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxUYWJsZUNvbXBvbmVudCBleHRlbmRzIE1hdGVyaWFsTmVzdGVkQ29tcG9uZW50IHtcblxuICBzZXRJbnN0YW5jZShpbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIuc2V0SW5zdGFuY2UoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLnZpZXdDb250YWluZXIgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3Q29udGFpbmVycyA/XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lcnNbKGNvbXBvbmVudC50YWJsZVJvdyAqIHRoaXMuaW5zdGFuY2UuY29tcG9uZW50Lm51bUNvbHMpICsgY29tcG9uZW50LnRhYmxlQ29sdW1uXSA6XG4gICAgICAgIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIGdldFRhYmxlQ29sQ2xhc3NlcygpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge2NvbmRlbnNlZCwgY2VsbEFsaWdubWVudH0gPSB0aGlzLmluc3RhbmNlLmNvbXBvbmVudDtcbiAgICByZXR1cm4ge1xuICAgICAgJ2lzLWNvbmRlbnNlZCc6IGNvbmRlbnNlZCxcbiAgICAgIC4uLihjZWxsQWxpZ25tZW50ICYmIHtbY2VsbEFsaWdubWVudF06IHRydWV9KVxuICAgIH1cbiAgfVxufVxuVGFibGVDb21wb25lbnQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbFRhYmxlQ29tcG9uZW50O1xuZXhwb3J0IHsgVGFibGVDb21wb25lbnQgfTtcbiJdfQ==