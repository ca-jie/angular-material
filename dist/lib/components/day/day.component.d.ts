import { FormControl } from '@angular/forms';
import { MaterialComponent } from '../MaterialComponent';
import DayComponent from 'formiojs/components/day/Day.js';
export declare class MaterialDayComponent extends MaterialComponent {
    dayControl: FormControl;
    monthControl: FormControl;
    yearControl: FormControl;
    setInstance(instance: any): void;
    setDisabled(disabled: any): void;
    getValue(): any;
    setValue(value: any): void;
}
export { DayComponent };
