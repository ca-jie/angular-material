import { MatStepper } from '@angular/material/stepper';
import Wizard from 'formiojs/Wizard';
import { MaterialNestedComponent } from './MaterialNestedComponent';
export declare class MaterialWizardComponent extends MaterialNestedComponent {
    stepper: MatStepper;
    isLinear: boolean;
    private prevNumOfPages;
    setInstance(instance: any): void;
    updatePages(instance?: any): void;
    resetWizard(): void;
    nextPage(): void;
    prevPage(): void;
    submit(): void;
    renderComponents(): void;
}
export { Wizard };
