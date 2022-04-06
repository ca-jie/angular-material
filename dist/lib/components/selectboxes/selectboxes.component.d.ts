import { MaterialRadioComponent } from '../radio/radio.component';
import SelectBoxesComponent from 'formiojs/components/selectboxes/SelectBoxes.js';
export declare class MaterialSelectBoxesComponent extends MaterialRadioComponent {
    value: any;
    disabled: boolean;
    setInstance(instance: any): void;
    getValue(): any;
    setValue(value: any): void;
    setDisabled(disabled: any): void;
    onChange(): void;
}
export { SelectBoxesComponent };
