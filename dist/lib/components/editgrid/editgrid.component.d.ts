import { QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { MaterialNestedComponent } from '../MaterialNestedComponent';
import EditGridComponent from 'formiojs/components/editgrid/EditGrid.js';
import { FormioComponent } from '../../formio.component';
declare enum EditRowState {
    NEW = "new",
    EDITING = "editing",
    SAVED = "saved",
    REMOVED = "removed",
    DRAFT = "draft"
}
export declare class MaterialEditGridComponent extends MaterialNestedComponent implements AfterViewInit {
    headerElement: ElementRef;
    footerElement: ElementRef;
    rowElements: QueryList<ElementRef>;
    forms: QueryList<FormioComponent>;
    header: string;
    footer: string;
    displayedColumns: string[];
    columns: any;
    colWidth: number;
    valid: boolean;
    RowStates: typeof EditRowState;
    getRowTemplate(content: any): string;
    validate(index: any): void;
    setInstance(instance: any): void;
    addAnother(): void;
    editRow(row: any, index: any): void;
    /**
     * Updates the row template.
     *
     * @param row
     * @param index
     */
    updateRowTemplate(rowElement: ElementRef, index: any, comps: any): void;
    /**
     * Saves a row.
     *
     * @param row - The edit grid row.
     * @param index - The index for this row.
     */
    saveRow(row: any, index: any): void;
    cancelRow(index: any): void;
    renderTemplate(element: ElementRef, template: any): void;
    ngAfterViewInit(): void;
}
export { EditGridComponent };
