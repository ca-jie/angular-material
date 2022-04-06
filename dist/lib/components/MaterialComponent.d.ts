import { ElementRef, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import FormioComponent from './Base';
import { FormioControl } from '../FormioControl';
export declare class MaterialComponent implements AfterViewInit, OnInit {
    element: ElementRef;
    ref: ChangeDetectorRef;
    instance: any;
    input: ElementRef;
    control: FormioControl;
    constructor(element: ElementRef, ref: ChangeDetectorRef);
    setInstance(instance: any): void;
    ngOnInit(): void;
    validateOnInit(): void;
    storeFormData(): void;
    getFormValue(path: any): any;
    renderComponents(): void;
    onChange(keepInputRaw?: boolean): void;
    getValue(): any;
    setValue(value: any): void;
    beforeSubmit(): void;
    hasError(): boolean;
    shouldValidateOnInit(): any;
    setDisabled(disabled: any): void;
    setVisible(visible: any): void;
    ngAfterViewInit(): void;
}
export { FormioComponent };
