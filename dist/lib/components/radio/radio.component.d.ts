import { MaterialComponent } from '../MaterialComponent';
import RadioComponent from 'formiojs/components/radio/Radio.js';
export declare class MaterialRadioComponent extends MaterialComponent {
    getLayout(): "row" | "column";
    isRadioChecked(option: any): boolean;
    clearValue(event: any, option: any): void;
    deselectValue(): void;
}
export { RadioComponent };
