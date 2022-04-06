import { MaterialComponent } from '../MaterialComponent';
import SurveyComponent from 'formiojs/components/survey/Survey.js';
export declare class MaterialSurveyComponent extends MaterialComponent {
    controls: any;
    getFormControl(question: any): any;
    setDisabled(disabled: any): void;
    getValue(): {};
    setValue(value: any): void;
    getUniqueName(question: any): string;
}
export { SurveyComponent };
