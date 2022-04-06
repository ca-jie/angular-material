import { FormControl, ValidationErrors } from '@angular/forms';
export declare class FormioControl extends FormControl {
    instance: any;
    static customValidator(control: FormioControl): Promise<ValidationErrors>;
    constructor(...args: any[]);
    setInstance(instance: any): void;
}
