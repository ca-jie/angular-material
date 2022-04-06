import { EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MaterialComponent } from '../MaterialComponent';
import TimeComponent from 'formiojs/components/time/Time.js';
export declare class MaterialTimeComponent extends MaterialComponent {
    disabled: boolean;
    period: string;
    hourControl: FormControl;
    minuteControl: FormControl;
    secondControl: FormControl;
    selectedEvent: EventEmitter<any>;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    renderElementOnly: boolean;
    setDisabled(disabled: any): void;
    get dataFormat(): any;
    setInstance(instance: any): void;
    onChange(): void;
    setValue(value: any): void;
    getTwentyFourHourTime(amPmString: any): string;
    changePeriod(): void;
}
export { TimeComponent };
