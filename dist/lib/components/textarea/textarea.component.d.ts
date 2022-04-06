import { ElementRef, AfterViewInit } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import TextAreaComponent from 'formiojs/components/textarea/TextArea.js';
export declare class MaterialTextareaComponent extends MaterialComponent implements AfterViewInit {
    textarea: ElementRef;
    ngAfterViewInit(): void;
    getValue(): any;
}
export { TextAreaComponent };
