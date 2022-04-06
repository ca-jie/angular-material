import { MaterialComponent } from '../MaterialComponent';
import DateTimeComponent from 'formiojs/components/datetime/DateTime.js';
import { FormControl } from '@angular/forms';
export declare class MaterialDateComponent extends MaterialComponent {
    timeControl: FormControl;
    displayControl: FormControl;
    isPickerOpened: boolean;
    selectedDate: any;
    selectedTime: any;
    allowManualInput: boolean;
    calendar: any;
    get enableDate(): boolean;
    get enableTime(): boolean;
    setDisplayControlValue(value?: any): void;
    onChangeDate(event: any): void;
    onChangeTime(time: any): void;
    onChangeInput(): void;
    getDateTimeValue(): string;
    setDateTime(): void;
    setInstance(instance: any): void;
    toggleCalendar(event: any): void;
    isDisabled(): any;
    formatTime: (value: any) => any;
    setValue(value: any): void;
    onChange(): void;
    beforeSubmit(): void;
    checkMinMax(value: any): boolean;
    disableWeekends(d: Date): boolean;
    disableDates(dates: Array<string>, d: Date): boolean;
    dateFilter: (d: Date | null) => boolean;
    clickOutside(event: any): void;
    improveMinMaxDate(minDate: any, maxDate: any): {
        minDate: any;
        maxDate: any;
    };
}
export { DateTimeComponent };
