import { TemplateRef } from '@angular/core';
import { LabelPositions } from '../../const/LabelPositions';
export declare class FormioFormFieldComponent {
    private _instance;
    labelPositions: typeof LabelPositions;
    labelTemplate: TemplateRef<any>;
    renderTopLabel: boolean;
    showDescription: boolean;
    renderElementOnly: boolean;
    set instance(instance: any);
    get instance(): any;
    componentTemplate: TemplateRef<any>;
    componentTemplateContext: any;
    hasLabel(labelPositions?: string[]): boolean;
}
