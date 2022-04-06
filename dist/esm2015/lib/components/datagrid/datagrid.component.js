import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import DataGridComponent from 'formiojs/components/datagrid/DataGrid.js';
import { moveItemInArray } from '@angular/cdk/drag-drop';
export class MaterialDataGridComponent extends MaterialNestedComponent {
    constructor() {
        super(...arguments);
        this.dataSource = new MatTableDataSource();
    }
    getColumnLabel(column) {
        return column.label || column.key;
    }
    setInstance(instance) {
        super.setInstance(instance);
        this.dataSource.data = instance.dataValue;
        this.columns = {};
        this.displayedColumns = [];
        this.formColumns = [];
        instance.getColumns().map((column) => {
            this.formColumns.push(column.key);
            this.displayedColumns.push(column.key);
            this.columns[column.key] = column;
        });
        this.displayedColumns.push('__removeRow');
        if (this.instance.component.reorder) {
            this.displayedColumns.push('position');
        }
        instance.viewContainer = (component) => {
            let viewContainer;
            if (this.instance.component.disabled) {
                component.component.disabled = true;
            }
            this.viewContainers.forEach((container) => {
                const td = container.element.nativeElement.parentNode;
                if (component.rowIndex === parseInt(td.getAttribute('rowIndex'), 10) &&
                    component.component.key === td.getAttribute('component')) {
                    viewContainer = container;
                }
            });
            return viewContainer ? viewContainer : null;
        };
    }
    addAnother() {
        this.checkRowsNumber();
        this.instance.addRow();
        if (this.dataSource.data.length < this.instance.rows.length) {
            this.dataSource.data.push({});
        }
        this.dataSource.data = [...this.dataSource.data];
    }
    checkRowsNumber() {
        while (this.instance.rows.length < this.dataSource.data.length) {
            this.instance.addRow();
        }
    }
    removeRow(index) {
        this.instance.removeRow(index);
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = [...this.dataSource.data];
    }
    dropTable(event) {
        const prevIndex = this.dataSource.data.findIndex((d) => d === event.item.data);
        moveItemInArray(this.control.value, prevIndex, event.currentIndex);
        this.renderComponents();
    }
    renderComponents() {
        this.instance.getRows();
        this.instance.setValue(this.control.value || []);
    }
    setValue(value) {
        const gridLength = value ? value.length : 0;
        while (this.instance.rows.length < gridLength) {
            this.addAnother();
            this.instance.dataValue = value;
            this.instance.setValue(value);
        }
        if (!value && this.instance.component.clearOnHide) {
            this.dataSource = new MatTableDataSource(this.instance.defaultValue);
        }
        super.setValue(value);
    }
}
MaterialDataGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-datagrid',
                template: `
    <mat-formio-form-field [instance]="instance"
                           [componentTemplate]="componentTemplate"
                           [labelTemplate]="labelTemplate"
    ></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-card fxFill>
        <ng-container *ngIf="hasLabel">
          <ng-container *ngTemplateOutlet="labelTemplate"></ng-container>
        </ng-container>
        <mat-card-content>
          <mat-card-actions
                  *ngIf="instance.hasAddButton() && (instance.component.addAnotherPosition === 'both' || instance.component.addAnotherPosition === 'top')">
            <button mat-raised-button color="primary" (click)="addAnother()">
              <mat-icon>add</mat-icon>
              {{instance.component.addAnother || 'Add Another'}}
            </button>
          </mat-card-actions>
          <table
                  mat-table
                  [dataSource]="dataSource"
                  class="mat-elevation-z8"
                  fxFill
                  cdkDropList
                  [cdkDropListData]="dataSource"
                  (cdkDropListDropped)="dropTable($event)">
            >
            <ng-container *ngFor="let column of formColumns" [matColumnDef]="column">
              <th mat-header-cell *matHeaderCellDef>{{ getColumnLabel(columns[column]) }}</th>
              <td mat-cell *matCellDef="let i = index;" [attr.rowIndex]="i" [attr.component]="column">
                <ng-template #components></ng-template>
              </td>
            </ng-container>
            <ng-container matColumnDef="__removeRow">
              <th mat-header-cell *matHeaderCellDef></th>
              <td mat-cell *matCellDef="let i = index;">
                <button mat-button *ngIf="instance.hasRemoveButtons()" (click)="removeRow(i)">
                  <mat-icon aria-hidden="false" aria-label="Remove row">delete</mat-icon>
                </button>
              </td>
            </ng-container>
            <ng-container matColumnDef="position" *ngIf="instance.component.reorder">
              <th mat-header-cell *matHeaderCellDef> No.</th>
              <td mat-cell *matCellDef="let element">
                <mat-icon cdkDragHandle>reorder</mat-icon>
              </td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <div *ngIf="instance?.component?.reorder">
              <tr class="datagrid-row" mat-row *matRowDef="let row; columns: displayedColumns;" cdkDrag
                  [cdkDragData]="row"></tr>
            </div>
            <div *ngIf="!instance?.component?.reorder">
              <tr class="datagrid-row" mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </div>
          </table>
        </mat-card-content>
        <mat-card-actions *ngIf="instance.hasAddButton() && instance.component.addAnotherPosition !== 'top'">
          <button mat-raised-button color="primary" (click)="addAnother()">
            <mat-icon>add</mat-icon>
            {{instance.component.addAnother || 'Add Another'}}
          </button>
        </mat-card-actions>
      </mat-card>
    </ng-template>

    <ng-template #labelTemplate>
      <mat-card-title>
        <span [instance]="instance" matFormioLabel></span>
      </mat-card-title>
    </ng-template>
  `,
                styles: ['.datagrid-row { height: auto; }']
            },] }
];
DataGridComponent.MaterialComponent = MaterialDataGridComponent;
export { DataGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGFncmlkL2RhdGFncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8saUJBQWlCLE1BQU0sMENBQTBDLENBQUM7QUFDekUsT0FBTyxFQUFjLGVBQWUsRUFBaUIsTUFBTSx3QkFBd0IsQ0FBQztBQWdGcEYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHVCQUF1QjtJQTlFdEU7O1FBa0ZFLGVBQVUsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7SUFzRnhDLENBQUM7SUFwRkMsY0FBYyxDQUFDLE1BQU07UUFDbkIsT0FBTyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFhO1FBQ3ZCLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsUUFBUSxDQUFDLGFBQWEsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3JDLElBQUksYUFBYSxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUNwQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDckM7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUN4QyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7Z0JBQ3RELElBQ0UsU0FBUyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ2hFLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQ3hEO29CQUNBLGFBQWEsR0FBRyxTQUFTLENBQUM7aUJBQzNCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUF1QjtRQUMvQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9FLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxRQUFRLENBQUMsS0FBZ0I7UUFDdkIsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFO1lBQzdDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtZQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN0RTtRQUNELEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBdktGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUVUO3lCQUVDLGlDQUFpQzthQUVwQzs7QUE0RkQsaUJBQWlCLENBQUMsaUJBQWlCLEdBQUcseUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQgfSBmcm9tICcuLi9NYXRlcmlhbE5lc3RlZENvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUdyaWRDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9kYXRhZ3JpZC9EYXRhR3JpZC5qcyc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIERyYWdEcm9wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7TWF0VGFibGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tZGF0YWdyaWQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybWlvLWZvcm0tZmllbGQgW2luc3RhbmNlXT1cImluc3RhbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRUZW1wbGF0ZV09XCJjb21wb25lbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbbGFiZWxUZW1wbGF0ZV09XCJsYWJlbFRlbXBsYXRlXCJcbiAgICA+PC9tYXQtZm9ybWlvLWZvcm0tZmllbGQ+XG4gICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRUZW1wbGF0ZSBsZXQtaGFzTGFiZWw+XG4gICAgICA8bWF0LWNhcmQgZnhGaWxsPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGFzTGFiZWxcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGFiZWxUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaW5zdGFuY2UuaGFzQWRkQnV0dG9uKCkgJiYgKGluc3RhbmNlLmNvbXBvbmVudC5hZGRBbm90aGVyUG9zaXRpb24gPT09ICdib3RoJyB8fCBpbnN0YW5jZS5jb21wb25lbnQuYWRkQW5vdGhlclBvc2l0aW9uID09PSAndG9wJylcIj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImFkZEFub3RoZXIoKVwiPlxuICAgICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAge3tpbnN0YW5jZS5jb21wb25lbnQuYWRkQW5vdGhlciB8fCAnQWRkIEFub3RoZXInfX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8dGFibGVcbiAgICAgICAgICAgICAgICAgIG1hdC10YWJsZVxuICAgICAgICAgICAgICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIlxuICAgICAgICAgICAgICAgICAgZnhGaWxsXG4gICAgICAgICAgICAgICAgICBjZGtEcm9wTGlzdFxuICAgICAgICAgICAgICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJkYXRhU291cmNlXCJcbiAgICAgICAgICAgICAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcFRhYmxlKCRldmVudClcIj5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBmb3JtQ29sdW1uc1wiIFttYXRDb2x1bW5EZWZdPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+e3sgZ2V0Q29sdW1uTGFiZWwoY29sdW1uc1tjb2x1bW5dKSB9fTwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBpID0gaW5kZXg7XCIgW2F0dHIucm93SW5kZXhdPVwiaVwiIFthdHRyLmNvbXBvbmVudF09XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NvbXBvbmVudHM+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJfX3JlbW92ZVJvd1wiPlxuICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBpID0gaW5kZXg7XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uICpuZ0lmPVwiaW5zdGFuY2UuaGFzUmVtb3ZlQnV0dG9ucygpXCIgKGNsaWNrKT1cInJlbW92ZVJvdyhpKVwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiUmVtb3ZlIHJvd1wiPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIiAqbmdJZj1cImluc3RhbmNlLmNvbXBvbmVudC5yZW9yZGVyXCI+XG4gICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLjwvdGg+XG4gICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIGNka0RyYWdIYW5kbGU+cmVvcmRlcjwvbWF0LWljb24+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW5zdGFuY2U/LmNvbXBvbmVudD8ucmVvcmRlclwiPlxuICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJkYXRhZ3JpZC1yb3dcIiBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiIGNka0RyYWdcbiAgICAgICAgICAgICAgICAgIFtjZGtEcmFnRGF0YV09XCJyb3dcIj48L3RyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWluc3RhbmNlPy5jb21wb25lbnQ/LnJlb3JkZXJcIj5cbiAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiZGF0YWdyaWQtcm93XCIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucyAqbmdJZj1cImluc3RhbmNlLmhhc0FkZEJ1dHRvbigpICYmIGluc3RhbmNlLmNvbXBvbmVudC5hZGRBbm90aGVyUG9zaXRpb24gIT09ICd0b3AnXCI+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkQW5vdGhlcigpXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+YWRkPC9tYXQtaWNvbj5cbiAgICAgICAgICAgIHt7aW5zdGFuY2UuY29tcG9uZW50LmFkZEFub3RoZXIgfHwgJ0FkZCBBbm90aGVyJ319XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbWF0LWNhcmQtYWN0aW9ucz5cbiAgICAgIDwvbWF0LWNhcmQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjbGFiZWxUZW1wbGF0ZT5cbiAgICAgIDxtYXQtY2FyZC10aXRsZT5cbiAgICAgICAgPHNwYW4gW2luc3RhbmNlXT1cImluc3RhbmNlXCIgbWF0Rm9ybWlvTGFiZWw+PC9zcGFuPlxuICAgICAgPC9tYXQtY2FyZC10aXRsZT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICAnLmRhdGFncmlkLXJvdyB7IGhlaWdodDogYXV0bzsgfSdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbERhdGFHcmlkQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXTtcbiAgZm9ybUNvbHVtbnM6IHN0cmluZ1tdO1xuICBjb2x1bW5zOiBhbnk7XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKCk7XG5cbiAgZ2V0Q29sdW1uTGFiZWwoY29sdW1uKSB7XG4gICAgcmV0dXJuIGNvbHVtbi5sYWJlbCB8fCBjb2x1bW4ua2V5O1xuICB9XG5cbiAgc2V0SW5zdGFuY2UoaW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyLnNldEluc3RhbmNlKGluc3RhbmNlKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IGluc3RhbmNlLmRhdGFWYWx1ZTtcbiAgICB0aGlzLmNvbHVtbnMgPSB7fTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBbXTtcbiAgICB0aGlzLmZvcm1Db2x1bW5zID0gW107XG4gICAgaW5zdGFuY2UuZ2V0Q29sdW1ucygpLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICB0aGlzLmZvcm1Db2x1bW5zLnB1c2goY29sdW1uLmtleSk7XG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaChjb2x1bW4ua2V5KTtcbiAgICAgIHRoaXMuY29sdW1uc1tjb2x1bW4ua2V5XSA9IGNvbHVtbjtcbiAgICB9KTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaCgnX19yZW1vdmVSb3cnKTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5jb21wb25lbnQucmVvcmRlcikge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goJ3Bvc2l0aW9uJyk7XG4gICAgfVxuICAgIGluc3RhbmNlLnZpZXdDb250YWluZXIgPSAoY29tcG9uZW50KSA9PiB7XG4gICAgICBsZXQgdmlld0NvbnRhaW5lcjtcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlLmNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlld0NvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRkID0gY29udGFpbmVyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29tcG9uZW50LnJvd0luZGV4ID09PSBwYXJzZUludCh0ZC5nZXRBdHRyaWJ1dGUoJ3Jvd0luZGV4JyksIDEwKSAmJlxuICAgICAgICAgIGNvbXBvbmVudC5jb21wb25lbnQua2V5ID09PSB0ZC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHZpZXdDb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdmlld0NvbnRhaW5lciA/IHZpZXdDb250YWluZXIgOiBudWxsO1xuICAgIH07XG4gIH1cblxuICBhZGRBbm90aGVyKCkge1xuICAgIHRoaXMuY2hlY2tSb3dzTnVtYmVyKCk7XG4gICAgdGhpcy5pbnN0YW5jZS5hZGRSb3coKTtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoIDwgdGhpcy5pbnN0YW5jZS5yb3dzLmxlbmd0aCkge1xuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEucHVzaCh7fSk7XG4gICAgfVxuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gWy4uLnRoaXMuZGF0YVNvdXJjZS5kYXRhXTtcbiAgfVxuXG4gIGNoZWNrUm93c051bWJlcigpIHtcbiAgICB3aGlsZSAodGhpcy5pbnN0YW5jZS5yb3dzLmxlbmd0aCA8IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRSb3coKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVSb3coaW5kZXgpIHtcbiAgICB0aGlzLmluc3RhbmNlLnJlbW92ZVJvdyhpbmRleCk7XG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFsuLi50aGlzLmRhdGFTb3VyY2UuZGF0YV07XG4gIH1cblxuICBkcm9wVGFibGUoZXZlbnQ6IENka0RyYWdEcm9wPGFueT4pIHtcbiAgICBjb25zdCBwcmV2SW5kZXggPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5maW5kSW5kZXgoKGQpID0+IGQgPT09IGV2ZW50Lml0ZW0uZGF0YSk7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuY29udHJvbC52YWx1ZSwgcHJldkluZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIHRoaXMucmVuZGVyQ29tcG9uZW50cygpO1xuICB9XG5cbiAgcmVuZGVyQ29tcG9uZW50cygpIHtcbiAgICB0aGlzLmluc3RhbmNlLmdldFJvd3MoKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFZhbHVlKHRoaXMuY29udHJvbC52YWx1ZSB8fCBbXSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogW10gfCBudWxsKSB7XG4gICAgY29uc3QgZ3JpZExlbmd0aCA9IHZhbHVlID8gdmFsdWUubGVuZ3RoIDogMDtcblxuICAgIHdoaWxlICh0aGlzLmluc3RhbmNlLnJvd3MubGVuZ3RoIDwgZ3JpZExlbmd0aCkge1xuICAgICAgdGhpcy5hZGRBbm90aGVyKCk7XG4gICAgICB0aGlzLmluc3RhbmNlLmRhdGFWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZSAmJiB0aGlzLmluc3RhbmNlLmNvbXBvbmVudC5jbGVhck9uSGlkZSkge1xuICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmluc3RhbmNlLmRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuICAgIHN1cGVyLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxufVxuRGF0YUdyaWRDb21wb25lbnQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbERhdGFHcmlkQ29tcG9uZW50O1xuZXhwb3J0IHsgRGF0YUdyaWRDb21wb25lbnQgfTtcbiJdfQ==