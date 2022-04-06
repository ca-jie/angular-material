import { AfterViewInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { MaterialTextfieldComponent } from '../textfield/textfield.component';
import NumberComponent from 'formiojs/components/number/Number.js';
export declare class MaterialNumberComponent extends MaterialTextfieldComponent implements AfterViewInit {
    element: ElementRef;
    ref: ChangeDetectorRef;
    private renderer;
    inputType: string;
    constructor(element: ElementRef, ref: ChangeDetectorRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    getValue(): any;
    setValue(value: any): void;
    onChange(): void;
}
export { NumberComponent };
