import { EventEmitter } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
export declare class MaterialCalendarComponent extends MaterialComponent {
    selectedDate: any;
    selectedTime: any;
    selectedTimeComponent: any;
    time: any;
    enableDate: boolean;
    enableTime: boolean;
    minDate: any;
    maxDate: any;
    dateFilter: any;
    hourStep: any;
    minuteStep: any;
    timeSelectEvent: EventEmitter<any>;
    dateSelectEvent: EventEmitter<any>;
    setInstance(instance: any): void;
    setExistedDate(value: any): void;
    setExistedTime(value: any, forTime: any): void;
    onDate(event: any): void;
    onTime(event: any): void;
    getPopupStyles(): {
        position: string;
        zIndex: string;
        display: string;
        maxWidth: string;
        maxHeight: string;
        top: string;
        left: string;
    };
}
