import { OnInit } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import SelectComponent from 'formiojs/components/select/Select.js';
export declare class MaterialSelectComponent extends MaterialComponent implements OnInit {
    selectOptions: Promise<any[]>;
    filteredOptions: Promise<any[]>;
    filteredOptionsLength: number;
    selectOptionsResolve: any;
    setInstance(instance: any): void;
    ngOnInit(): void;
    onFilter(value: any): void;
    compareObjects(o1: any, o2: any): boolean;
}
export { SelectComponent };
