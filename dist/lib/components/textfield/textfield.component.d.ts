import { AfterContentInit } from '@angular/core';
import TextFieldComponent from 'formiojs/components/textfield/TextField.js';
import { MaterialComponent } from '../MaterialComponent';
export declare const TEXTFIELD_TEMPLATE = "\n  <mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\"></mat-formio-form-field>\n  <ng-template #componentTemplate let-hasLabel>\n    <mat-form-field [appearance]=\"getFormFieldAppearance()\" fxFill>\n\n      <mat-label *ngIf=\"hasLabel\">\n          <span [instance]=\"instance\" matFormioLabel></span>\n      </mat-label>\n\n      <span *ngIf=\"instance.component.prefix && instance.type !== 'currency'\"\n            matPrefix\n      >\n        {{ instance.component.prefix }}&nbsp;\n      </span>\n      <input matInput\n            type=\"{{ inputType }}\"\n            [formControl]=\"control\"\n            [placeholder]=\"instance.component.placeholder\"\n            (input)=\"onChange()\" #input\n      >\n      <span *ngIf=\"instance.component.suffix\" matSuffix>{{ instance.component.suffix }}</span>\n\n      <mat-hint *ngIf=\"instance.component.showWordCount || instance.component.showCharCount\">\n        {{ getHint() }}\n      </mat-hint>\n\n      <br/>\n      <mat-error *ngIf=\"isError()\" >{{ getErrorMessage() }}</mat-error>\n    </mat-form-field>\n  </ng-template>\n";
export declare class MaterialTextfieldComponent extends MaterialComponent implements AfterContentInit {
    inputType: string;
    ngAfterContentInit(): void;
    getHint(): string;
    getWordsCount(): any;
    getFormFieldAppearance(): any;
    isError(): boolean;
    getErrorMessage(): any;
}
export { TextFieldComponent };
