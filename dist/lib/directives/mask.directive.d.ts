import { ElementRef } from '@angular/core';
export declare class MaskDirective {
    private elementRef;
    format: (value: string) => string;
    private _value;
    constructor(elementRef: ElementRef<HTMLInputElement>);
    get value(): string | null;
    set value(value: string | null);
    private formatValue;
    _onChange(value: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(): void;
}
