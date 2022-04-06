import { MatTableDataSource } from '@angular/material/table';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import DataGridComponent from 'formiojs/components/datagrid/DataGrid.js';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class MaterialDataGridComponent extends MaterialNestedComponent {
    displayedColumns: string[];
    formColumns: string[];
    columns: any;
    dataSource: MatTableDataSource<unknown>;
    getColumnLabel(column: any): any;
    setInstance(instance: any): void;
    addAnother(): void;
    checkRowsNumber(): void;
    removeRow(index: any): void;
    dropTable(event: CdkDragDrop<any>): void;
    renderComponents(): void;
    setValue(value: [] | null): void;
}
export { DataGridComponent };
