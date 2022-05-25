import { Component, ElementRef, ChangeDetectorRef, Input, ViewChild, Renderer2, ViewChildren, ViewContainerRef, EventEmitter, Output, ComponentFactoryResolver, NgZone, Optional, Directive, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_INPUT_VALUE_ACCESSOR, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import Webform from 'formiojs/Webform.js';
import FormioComponent$2 from 'formiojs/components/_classes/component/Component.js';
import TextFieldComponent from 'formiojs/components/textfield/TextField.js';
import Validator from 'formiojs/validator/Validator.js';
import unescape from 'lodash/unescape';
import get from 'lodash/get';
import PasswordComponent from 'formiojs/components/password/Password.js';
import EmailComponent from 'formiojs/components/email/Email.js';
import UrlComponent from 'formiojs/components/url/Url.js';
import PhoneNumberComponent from 'formiojs/components/phonenumber/PhoneNumber.js';
import NumberComponent from 'formiojs/components/number/Number.js';
import _, { get as get$1 } from 'lodash';
import CurrencyComponent from 'formiojs/components/currency/Currency.js';
import DayComponent from 'formiojs/components/day/Day.js';
import { momentDate } from 'formiojs/utils/utils.js';
import HiddenComponent from 'formiojs/components/hidden/Hidden.js';
import HtmlComponent from 'formiojs/components/html/HTML.js';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import TagsComponent from 'formiojs/components/tags/Tags.js';
import ButtonComponent from 'formiojs/components/button/Button.js';
import TextAreaComponent from 'formiojs/components/textarea/TextArea.js';
import isNil from 'lodash/isNil';
import PanelComponent from 'formiojs/components/panel/Panel.js';
import ColumnsComponent from 'formiojs/components/columns/Columns.js';
import ContainerComponent from 'formiojs/components/container/Container.js';
import TabsComponent from 'formiojs/components/tabs/Tabs.js';
import DateTimeComponent from 'formiojs/components/datetime/DateTime.js';
import CheckboxComponent from 'formiojs/components/checkbox/Checkbox.js';
import FieldsetComponent from 'formiojs/components/fieldset/Fieldset.js';
import ContentComponent from 'formiojs/components/content/Content.js';
import SignatureComponent from 'formiojs/components/signature/Signature.js';
import SurveyComponent from 'formiojs/components/survey/Survey.js';
import RadioComponent from 'formiojs/components/radio/Radio.js';
import SelectBoxesComponent from 'formiojs/components/selectboxes/SelectBoxes.js';
import SelectComponent from 'formiojs/components/select/Select.js';
import WellComponent from 'formiojs/components/well/Well.js';
import DataGridComponent from 'formiojs/components/datagrid/DataGrid.js';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import EditGridComponent from 'formiojs/components/editgrid/EditGrid.js';
import Components$2 from 'formiojs/components/Components';
import isString from 'lodash/isString';
import TableComponent from 'formiojs/components/table/Table.js';
import Wizard from 'formiojs/Wizard';
import Displays from 'formiojs/displays/Displays';
import TimeComponent from 'formiojs/components/time/Time.js';
import * as moment_ from 'moment';
import { FormioBaseComponent, FormioAppConfig } from '@formio/angular';

Webform.prototype.redraw = function () {
    return this.render();
};
Webform.prototype.clear = function () {
    const viewContainer = this.viewContainer ? this.viewContainer() : null;
    if (viewContainer) {
        viewContainer.clear();
    }
};
Webform.prototype.render = function () {
    if (this.viewContainer && this.viewContainer()) {
        this.clear();
        this.renderComponents();
        this.setValue(this._submission);
    }
};

var FormioComponent = (() => {
    const beforeSubmit = FormioComponent$2.prototype.beforeSubmit;
    FormioComponent$2.prototype.beforeSubmit = function (...args) {
        if (this.materialComponent) {
            this.materialComponent.beforeSubmit();
        }
        return beforeSubmit.call(this, ...args);
    };
    Object.defineProperty(FormioComponent$2.prototype, 'disabled', {
        set(disabled) {
            this._disabled = disabled;
            if (this.materialComponent) {
                this.materialComponent.setDisabled(disabled);
            }
        }
    });
    Object.defineProperty(FormioComponent$2.prototype, 'visible', {
        set(visible) {
            if (this._visible !== visible) {
                this._visible = visible;
                this.clearOnHide();
                this.redraw();
            }
            if (this.materialComponent) {
                this.materialComponent.setVisible(visible);
            }
        }
    });
    return FormioComponent$2;
})();

// @dynamic
class FormioControl extends FormControl {
    constructor(...args) {
        super(args[0], [], [FormioControl.customValidator.bind(FormioControl)]);
    }
    static customValidator(control) {
        return new Promise((resolve) => {
            if (control.instance) {
                control.instance.validateResolve = resolve;
            }
            else {
                resolve(null);
            }
        });
    }
    setInstance(instance) {
        this.instance = instance;
        const setCustomValidity = instance.setCustomValidity;
        instance.setCustomValidity = (message, dirty, external, isWarning = false) => {
            let decodedMessage = message;
            if (Array.isArray(message)) {
                decodedMessage = message.map(msg => Object.assign(msg, { message: unescape(msg.message) }));
            }
            else if (message) {
                decodedMessage = unescape(message);
            }
            setCustomValidity.call(instance, decodedMessage, dirty, external, isWarning);
            if (instance.validateResolve) {
                instance.validateResolve(decodedMessage ? { custom: true } : null);
            }
        };
    }
}

class MaterialComponent {
    constructor(element, ref) {
        this.element = element;
        this.ref = ref;
        this.control = new FormioControl();
    }
    setInstance(instance) {
        this.control.setInstance(instance);
        instance.materialComponent = this;
        this.instance = instance;
        this.instance.disabled = this.instance.shouldDisabled;
        this.setVisible(this.instance.visible);
        this.renderComponents();
    }
    ngOnInit() {
        if (this.instance) {
            if (this.shouldValidateOnInit()) {
                this.storeFormData();
                this.validateOnInit();
            }
            this.instance.component.defaultValue ? this.setValue(this.instance.component.defaultValue) : '';
        }
    }
    validateOnInit() {
        const { key } = this.instance.component;
        const validationValue = this.getFormValue(this.instance.path);
        if (validationValue === null) {
            return;
        }
        this.instance.setPristine(false);
        const validationResult = Validator.checkComponent(this.instance, { [key]: validationValue }, { [key]: validationValue });
        if (validationResult.length) {
            this.instance.setCustomValidity(validationResult, false);
            if (!!validationValue) {
                this.control.markAsTouched();
            }
            this.ref.detectChanges();
        }
    }
    storeFormData() {
        if (this.instance.parent && this.instance.parent.submission && this.instance.parent.submission.data) {
            sessionStorage.setItem('formData', JSON.stringify(this.instance.parent.submission.data));
        }
    }
    getFormValue(path) {
        const formData = JSON.parse(sessionStorage.getItem('formData'));
        if (!formData) {
            return null;
        }
        return get(formData, path);
    }
    renderComponents() { }
    onChange(keepInputRaw) {
        let value = this.getValue();
        if (value === undefined || value === null) {
            value = this.instance.emptyValue;
        }
        if (this.input && this.input.nativeElement.mask && value && !keepInputRaw) {
            this.input.nativeElement.mask.textMaskInputElement.update(value);
            this.control.setValue(this.input.nativeElement.value);
            value = this.getValue();
        }
        this.instance.updateValue(value, { modified: true });
    }
    getValue() {
        return this.control.value;
    }
    setValue(value) {
        this.control.setValue(value);
    }
    beforeSubmit() {
        this.control.markAsTouched();
    }
    hasError() {
        return !!this.instance && !!this.instance.error;
    }
    shouldValidateOnInit() {
        if (!this.instance) {
            return;
        }
        return this.instance.options.validateOnInit
            || this.instance.parent.options.validateOnInit;
    }
    setDisabled(disabled) {
        if (disabled) {
            this.control.disable();
        }
        else {
            this.control.enable();
        }
    }
    setVisible(visible) {
        if (this.element && this.element.nativeElement) {
            if (visible) {
                this.element.nativeElement.removeAttribute('hidden');
                this.element.nativeElement.style.visibility = 'visible';
                this.element.nativeElement.style.position = 'relative';
            }
            else {
                this.element.nativeElement.setAttribute('hidden', true);
                this.element.nativeElement.style.visibility = 'hidden';
                this.element.nativeElement.style.position = 'absolute';
            }
        }
    }
    ngAfterViewInit() {
        if (this.element && this.element.nativeElement && this.instance) {
            // Add custom classes to elements.
            if (this.instance.component.customClass) {
                this.element.nativeElement.classList.add(this.instance.component.customClass);
            }
        }
        if (this.input) {
            // Set the input masks.
            this.instance.setInputMask(this.input.nativeElement);
            this.instance.addFocusBlurEvents(this.input.nativeElement);
        }
    }
}
MaterialComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-comp',
                template: '<mat-card>Unknown Component: {{ instance.component.type }}</mat-card>'
            },] }
];
MaterialComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
MaterialComponent.propDecorators = {
    instance: [{ type: Input }],
    input: [{ type: ViewChild, args: ['input',] }],
    control: [{ type: Input }]
};
FormioComponent.MaterialComponent = MaterialComponent;

const TEXTFIELD_TEMPLATE = `
  <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
  <ng-template #componentTemplate let-hasLabel>
    <mat-form-field [appearance]="getFormFieldAppearance()" fxFill>

      <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
      </mat-label>

      <span *ngIf="instance.component.prefix && instance.type !== 'currency'"
            matPrefix
      >
        {{ instance.component.prefix }}&nbsp;
      </span>
      <input matInput
            type="{{ inputType }}"
            [formControl]="control"
            [placeholder]="instance.component.placeholder"
            (input)="onChange()" #input
      >
      <span *ngIf="instance.component.suffix" matSuffix>{{ instance.component.suffix }}</span>

      <mat-hint *ngIf="instance.component.showWordCount || instance.component.showCharCount">
        {{ getHint() }}
      </mat-hint>

      <br/>
      <mat-error *ngIf="isError()" >{{ getErrorMessage() }}</mat-error>
    </mat-form-field>
  </ng-template>
`;
class MaterialTextfieldComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.inputType = 'text';
    }
    ngAfterContentInit() {
        if (this.instance && this.control && this.instance.component.disabled) {
            this.control.disable();
        }
    }
    getHint() {
        if (!this.instance || !this.control || !this.control.value) {
            return '';
        }
        const { showWordCount, showCharCount } = this.instance.component;
        if (showWordCount && showCharCount) {
            return `${this.getWordsCount()} words, ${this.control.value.length} characters`;
        }
        else if (showWordCount) {
            return `${this.getWordsCount()} words`;
        }
        else {
            return `${this.control.value.length} characters`;
        }
    }
    getWordsCount() {
        const matches = this.control.value ? this.control.value.match(/[\w\d’'-]+/gi) : [];
        return matches ? matches.length : 0;
    }
    getFormFieldAppearance() {
        const appearances = ['legacy', 'standard', 'fill', 'outline'];
        const appearance = this.instance.component.appearance ? this.instance.component.appearance.toLowerCase() : '';
        return appearances.includes(appearance) ? appearance : undefined;
    }
    isError() {
        if (this.instance.error) {
            this.control.setErrors(this.instance.component.validate);
            return true;
        }
        else {
            return false;
        }
    }
    getErrorMessage() {
        if (this.instance.error && this.instance.error.messages) {
            const { messages } = this.instance.error;
            for (const msg of messages) {
                if (msg.context && this.control.hasError(msg.context.validator)) {
                    return this.instance.error.message;
                }
            }
        }
    }
}
MaterialTextfieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-textfield',
                template: TEXTFIELD_TEMPLATE
            },] }
];
TextFieldComponent.MaterialComponent = MaterialTextfieldComponent;

class MaterialPasswordComponent extends MaterialTextfieldComponent {
    constructor() {
        super(...arguments);
        this.inputType = 'password';
    }
}
MaterialPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-password',
                template: TEXTFIELD_TEMPLATE
            },] }
];
PasswordComponent.MaterialComponent = MaterialPasswordComponent;

class MaterialEmailComponent extends MaterialTextfieldComponent {
    constructor() {
        super(...arguments);
        this.inputType = 'email';
    }
}
MaterialEmailComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-email',
                template: TEXTFIELD_TEMPLATE
            },] }
];
EmailComponent.MaterialComponent = MaterialEmailComponent;

class MaterialUrlComponent extends MaterialTextfieldComponent {
    constructor() {
        super(...arguments);
        this.inputType = 'url';
    }
}
MaterialUrlComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-url',
                template: TEXTFIELD_TEMPLATE
            },] }
];
UrlComponent.MaterialComponent = MaterialUrlComponent;

class MaterialPhoneNumberComponent extends MaterialTextfieldComponent {
    constructor() {
        super(...arguments);
        this.inputType = 'text';
    }
}
MaterialPhoneNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-phonenumber',
                template: TEXTFIELD_TEMPLATE
            },] }
];
PhoneNumberComponent.MaterialComponent = MaterialPhoneNumberComponent;

class MaterialNumberComponent extends MaterialTextfieldComponent {
    constructor(element, ref, renderer) {
        super(element, ref);
        this.element = element;
        this.ref = ref;
        this.renderer = renderer;
        this.inputType = 'text';
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.instance) {
            const { instance } = this;
            this.renderer.listen(this.input.nativeElement, 'blur', () => {
                let value = instance.parseValue(this.control.value);
                value = instance.formatValue(value);
                value = instance.getValueAsString(value);
                this.control.setValue(value);
            });
        }
    }
    getValue() {
        let value = this.control.value;
        if (value && this.instance) {
            value = value.replace(this.instance.prefix, '');
            return !_.isNil(value) && value !== '' ? this.instance.parseNumber(value) : value;
        }
        return value;
    }
    setValue(value) {
        if (this.instance) {
            const { instance } = this;
            value = instance.formatValue(instance.parseValue(value));
        }
        else {
            value = value.toString();
        }
        return super.setValue(value);
    }
    onChange() {
        super.onChange(true);
    }
}
MaterialNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-number',
                template: TEXTFIELD_TEMPLATE
            },] }
];
MaterialNumberComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
NumberComponent.MaterialComponent = MaterialNumberComponent;

class MaterialCurrencyComponent extends MaterialNumberComponent {
    constructor() {
        super(...arguments);
        this.inputType = 'text';
    }
    onChange() {
        const newValue = _.isNil(this.getValue()) ? '' : this.getValue();
        this.instance.updateValue(newValue, { modified: true });
    }
}
MaterialCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-currency',
                template: TEXTFIELD_TEMPLATE
            },] }
];
CurrencyComponent.MaterialComponent = MaterialCurrencyComponent;

DayComponent.prototype.getFieldValue = function (name) {
    return this.refs[name] ? this.refs[name].value : '';
};
class MaterialDayComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.dayControl = new FormControl();
        this.monthControl = new FormControl();
        this.yearControl = new FormControl();
    }
    setInstance(instance) {
        // Add stub methods to match dom elements.
        this.dayControl.setAttribute = () => { };
        this.dayControl.removeAttribute = () => { };
        this.monthControl.setAttribute = () => { };
        this.monthControl.removeAttribute = () => { };
        this.yearControl.setAttribute = () => { };
        this.yearControl.removeAttribute = () => { };
        instance.refs = {
            day: this.dayControl,
            month: this.monthControl,
            year: this.yearControl
        };
        return super.setInstance(instance);
    }
    setDisabled(disabled) {
        if (disabled) {
            this.dayControl.disable();
            this.monthControl.disable();
            this.yearControl.disable();
        }
        else {
            this.dayControl.enable();
            this.monthControl.enable();
            this.yearControl.enable();
        }
    }
    getValue() {
        return this.instance.getDate();
    }
    setValue(value) {
        if (value) {
            this.dayControl.setValue(parseInt(momentDate(value).format('D')));
            this.monthControl.setValue(parseInt(momentDate(value).format('M')));
            this.yearControl.setValue(parseInt(momentDate(value).format('YYYY')));
        }
        this.instance.setValueAt(0, value);
    }
}
MaterialDayComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-day',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-label *ngIf="hasLabel">
        <span [instance]="instance" matFormioLabel></span>
      </mat-label>
      <mat-form-field *ngIf="instance.dayFirst && instance.showDay">
        <mat-label *ngIf="!instance.component.hideInputLabels">Day</mat-label>
        <mat-select [formControl]="dayControl" (selectionChange)="onChange()" [required]="instance.dayRequired">
          <mat-option *ngFor="let day of instance.days" [value]="day.value">
            {{day.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field *ngIf="instance.showMonth">
        <mat-label *ngIf="!instance.component.hideInputLabels">Month</mat-label>
        <mat-select [formControl]="monthControl" (selectionChange)="onChange()" [required]="instance.monthRequired">
          <mat-option *ngFor="let month of instance.months" [value]="month.value">
            {{month.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field *ngIf="!instance.dayFirst && instance.showDay">
        <mat-label *ngIf="!instance.component.hideInputLabels">Day</mat-label>
        <mat-select [formControl]="dayControl" (selectionChange)="onChange()" [required]="instance.dayRequired">
          <mat-option *ngFor="let day of instance.days" [value]="day.value">
            {{day.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field *ngIf="instance.showYear">
        <mat-label *ngIf="!instance.component.hideInputLabels">Year</mat-label>
        <mat-select [formControl]="yearControl" (selectionChange)="onChange()" [required]="instance.yearRequired">
          <mat-option *ngFor="let year of instance.years" [value]="year.value">
            {{year.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
    </ng-template>
  `
            },] }
];
DayComponent.MaterialComponent = MaterialDayComponent;

class MaterialHiddenComponent extends MaterialComponent {
}
MaterialHiddenComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-hidden',
                template: `<input matInput type="hidden" [formControl]="control" #input>`
            },] }
];
HiddenComponent.MaterialComponent = MaterialHiddenComponent;

class MaterialHtmlComponent extends MaterialComponent {
    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.instance.component.refreshOnChange) {
            this.instance.checkRefreshOn = () => {
                this.htmlBody.nativeElement.innerHTML = this.instance.renderContent();
            };
        }
    }
}
MaterialHtmlComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-html',
                template: `<div #htmlBody></div>`
            },] }
];
MaterialHtmlComponent.propDecorators = {
    htmlBody: [{ type: ViewChild, args: ['htmlBody',] }]
};
HtmlComponent.MaterialComponent = MaterialHtmlComponent;

class MaterialTagsComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.separatorKeysCodes = [ENTER, COMMA];
        this.tags = [];
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.tags.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
        this.onChange();
    }
    remove(index) {
        if (index >= 0 && index < this.tags.length) {
            this.tags.splice(index, 1);
        }
        this.onChange();
    }
    getValue() {
        return (this.instance.component.storeas === 'string') ? this.tags.join(this.instance.delimiter) : this.tags;
    }
    setValue(value) {
        if (typeof value === 'string') {
            value = value.split(this.instance.delimiter);
        }
        if (value && !Array.isArray(value)) {
            value = [value];
        }
        this.tags = value;
    }
}
MaterialTagsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-tags',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-form-field class="example-chip-list" fxFill>

        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>

        <mat-chip-list #chipList [attr.aria-label]="instance.component.label">
          <mat-chip *ngFor="let tag of tags; index as i;"
                    [selectable]="true"
                    [removable]="true"
                    (removed)="remove(i)"
          >
            {{tag}}
            <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>

          <input [formControl]="control"
                 [matChipInputFor]="chipList"
                 [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                 [matChipInputAddOnBlur]="true"
                 (matChipInputTokenEnd)="add($event)"
          >
        </mat-chip-list>
      </mat-form-field>
    </ng-template>
  `
            },] }
];
TagsComponent.MaterialComponent = MaterialTagsComponent;

var ButtonsThemes;
(function (ButtonsThemes) {
    ButtonsThemes["PRIMARY"] = "primary";
    ButtonsThemes["SECONDARY"] = "secondary";
    ButtonsThemes["INFO"] = "info";
    ButtonsThemes["WARNING"] = "warning";
    ButtonsThemes["DANGER"] = "danger";
    ButtonsThemes["SUCCESS"] = "success";
})(ButtonsThemes || (ButtonsThemes = {}));
var AngularButtonsThemes;
(function (AngularButtonsThemes) {
    AngularButtonsThemes["WARN"] = "warn";
    AngularButtonsThemes["PRIMARY"] = "primary";
    AngularButtonsThemes["BASIC"] = "basic";
    AngularButtonsThemes["ACCENT"] = "accent";
})(AngularButtonsThemes || (AngularButtonsThemes = {}));

class MaterialButtonComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.loading = false;
        this.done = false;
        this.error = false;
        this.disabled = false;
        this.clicked = false;
    }
    get color() {
        if (this.error) {
            return AngularButtonsThemes.WARN;
        }
        const theme = this.angularButtonTheme;
        return theme || AngularButtonsThemes.PRIMARY;
    }
    get angularButtonTheme() {
        switch (this.instance.component.theme) {
            case ButtonsThemes.PRIMARY:
                return AngularButtonsThemes.PRIMARY;
            case ButtonsThemes.WARNING:
                return AngularButtonsThemes.ACCENT;
            case ButtonsThemes.DANGER:
                return AngularButtonsThemes.WARN;
            case ButtonsThemes.SECONDARY:
                return AngularButtonsThemes.BASIC;
            default:
                return '';
        }
    }
    get buttonClass() {
        let className = this.instance.component.block ? 'mat-formio-button-block' : '';
        className += this.instance.component.size ? ` mat-formio-button-${this.instance.component.size}` : '';
        className += !this.angularButtonTheme ? ` mat-formio-theme-${this.instance.component.theme}` : '';
        return className;
    }
    onClick(event) {
        this.clicked = true;
        this.instance.onClick(event);
    }
    getValue() {
        return this.clicked;
    }
    setState(loading, error, done) {
        this.loading = loading;
        this.done = done;
        this.error = error;
    }
    getIconFontSet(icon) {
        const fontSet = icon.split(' ')[0];
        return fontSet;
    }
    getIconName(icon) {
        return icon.replace(this.getIconFontSet(icon), '');
    }
    setInstance(instance) {
        const retVal = super.setInstance(instance);
        this.disabled = instance.shouldDisabled;
        instance.on('submitButton', () => this.setState(true, false, false));
        instance.on('submitDone', () => this.setState(false, false, true));
        instance.on('submitError', () => this.setState(false, true, false));
        instance.on('requestButton', () => this.setState(true, false, false));
        instance.on('requestDone', () => this.setState(false, false, true));
        instance.on('change', (event) => {
            this.disabled = this.instance.shouldDisabled || (this.instance.component.disableOnInvalid && !event.isValid);
            if (event.isValid) {
                this.loading = false;
                this.error = false;
            }
        });
        return retVal;
    }
}
MaterialButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-button',
                template: "<button *ngIf=\"instance\"\n        [ngClass]=\"buttonClass\"\n        type=\"{{ instance.component.action }}\"\n        mat-raised-button [color]=\"color\"\n        [disabled]=\"disabled\"\n        (click)=\"instance.onClick($event)\"\n>\n  <mat-icon *ngIf=\"instance.component.leftIcon\">{{instance.component.leftIcon}}</mat-icon>\n  <mat-icon *ngIf=\"done\">done</mat-icon>\n  <mat-icon *ngIf=\"error\">close</mat-icon>\n  <mat-icon class=\"mat-icon-spin\" *ngIf=\"loading\">autorenew</mat-icon>\n  {{ instance.component.label }}\n  <mat-icon *ngIf=\"instance.component.rightIcon\">{{instance.component.rightIcon}}</mat-icon>\n</button>\n",
                styles: ["@-webkit-keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}:host .mat-icon-spin{-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:spin;-webkit-animation-timing-function:linear;animation-duration:1s;animation-iteration-count:infinite;animation-name:spin;animation-timing-function:linear}.mat-formio-theme-success{background-color:#63d644!important}.mat-formio-theme-info{background-color:#49d9f4!important}.mat-formio-button-sm{font-size:14px;padding:8px 12px}.mat-formio-button-xs{font-size:14px;padding:4px 6px}.mat-formio-button-md{font-size:15px;padding:8px 12px}.mat-formio-button-lg{font-size:19px;padding:16px 20px}.mat-formio-button-block{display:block;width:100%}"]
            },] }
];
ButtonComponent.MaterialComponent = MaterialButtonComponent;

class MaterialTextareaComponent extends MaterialComponent {
    ngAfterViewInit() {
        // Attach the element so the wysiwyg will work.
        this.instance.attachElement(this.textarea.nativeElement);
    }
    getValue() {
        return isNil(this.control.value) ? '' : this.control.value;
    }
}
MaterialTextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-textarea',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-form-field class="mat-formio-textarea"
                      [ngClass]="{'editor-enabled': !!instance.component.editor}"
                      fxFill
                      fxFlexAlign="center"
      >
        <mat-label fxFill *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>
        <span *ngIf="instance.component.prefix" matPrefix>{{ instance.component.prefix }}&nbsp;</span>
        <textarea matInput
                  [placeholder]="instance.component.placeholder"
                  [formControl]="control"
                  [rows]="(instance.component.rows || 3)"
                  (input)="onChange()"
                   #textarea
        >
        </textarea>
        <span *ngIf="instance.component.suffix" matSuffix>{{ instance.component.suffix }}</span>
        <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
      </mat-form-field>
    </ng-template>
  `,
                styles: [".mat-input-element{min-height:16px}"]
            },] }
];
MaterialTextareaComponent.propDecorators = {
    textarea: [{ type: ViewChild, args: ['textarea',] }]
};
TextAreaComponent.MaterialComponent = MaterialTextareaComponent;

class MaterialNestedComponent extends MaterialComponent {
    setInstance(instance) {
        instance.viewContainer = () => {
            return this.viewContainers ? this.viewContainers[0] : null;
        };
        super.setInstance(instance);
    }
    renderComponents() {
        if (this.instance.renderComponents) {
            this.instance.renderComponents();
        }
    }
    render() {
        this.viewContainers = this.components.toArray();
        this.renderComponents();
        this.ref.detectChanges();
    }
    ngAfterViewInit() {
        this.components.changes.subscribe(() => this.render());
        this.render();
    }
}
MaterialNestedComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-nested',
                template: '<ng-template #components></ng-template>'
            },] }
];
MaterialNestedComponent.propDecorators = {
    components: [{ type: ViewChildren, args: ['components', { read: ViewContainerRef },] }]
};

class MaterialPanelComponent extends MaterialNestedComponent {
}
MaterialPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-panel',
                template: `
    <mat-card *ngIf="!instance.component.collapsible">
      <mat-card-title *ngIf="instance?.component?.title">
        {{ instance.component.title }}
      </mat-card-title>
      <mat-card-content fxLayout="column" fxLayoutGap="1em">
        <ng-template #components></ng-template>
      </mat-card-content>
    </mat-card>
    <mat-expansion-panel *ngIf="instance.component.collapsible"
                         [expanded]="!instance.component.collapsed"
    >
      <mat-expansion-panel-header *ngIf="instance?.component?.title">
        <mat-panel-title>
          {{ instance.component.title }}
        </mat-panel-title>
      </mat-expansion-panel-header>
      <ng-template #components></ng-template>
    </mat-expansion-panel>
  `,
                styles: [':host { margin-bottom: 1em; }']
            },] }
];
PanelComponent.MaterialComponent = MaterialPanelComponent;

class MaterialColumnsComponent extends MaterialNestedComponent {
    constructor() {
        super(...arguments);
        this.flexGap = 0.5;
        this.totalSpace = 0;
    }
    setInstance(instance) {
        this.totalSpace = 100 - ((instance.component.columns.length - 1) * this.flexGap);
        super.setInstance(instance);
        instance.viewContainer = (component) => {
            return this.viewContainers ? this.viewContainers[component.column] : null;
        };
    }
    flexWidth(column, index) {
        if (index >= (this.instance.component.columns.length - 1)) {
            return Math.ceil(((parseFloat(column.width) / 12) * this.totalSpace)) + '%';
        }
        else {
            return Math.floor(((parseFloat(column.width) / 12) * this.totalSpace)) + '%';
        }
    }
}
MaterialColumnsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-columns',
                template: `
    <div class="container"
         fxLayout="row"
         fxLayout.xs="column"
         fxLayoutWrap
         fxLayoutGap="{{ flexGap }}%"
         fxLayoutAlign="center"
    >
      <div
        *ngFor="let column of instance.component.columns; let i = index"
        [fxFlex]="flexWidth(column, i)"
        fxLayout="column"
        fxLayoutGap="1em">
        <ng-template #components></ng-template>
      </div>
    </div>
  `
            },] }
];
ColumnsComponent.MaterialComponent = MaterialColumnsComponent;

class MaterialContainerComponent extends MaterialNestedComponent {
}
MaterialContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-container',
                template: `
    <div fxLayout="column" fxLayoutGap="1em">
      <ng-template #components></ng-template>
    </div>`
            },] }
];
ContainerComponent.MaterialComponent = MaterialContainerComponent;

class MaterialTabsComponent extends MaterialNestedComponent {
    setInstance(instance) {
        super.setInstance(instance);
        instance.viewContainer = (component) => {
            return this.viewContainers ? this.viewContainers[component.tab] : null;
        };
    }
}
MaterialTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-tabs',
                template: `
    <mat-tab-group>
      <mat-tab *ngFor="let tab of instance.component.components" [label]="tab.label">
        <div fxLayout="column" fxLayoutGap="1em" style="border: 1px dotted rgba(0, 0, 0, 0.125)">
          <ng-template #components></ng-template>
        </div>
      </mat-tab>
    </mat-tab-group>
  `
            },] }
];
TabsComponent.MaterialComponent = MaterialTabsComponent;

class MaterialDateComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.timeControl = new FormControl();
        this.displayControl = new FormControl();
        this.selectedTime = '00:00';
        this.allowManualInput = true;
        this.formatTime = (value) => {
            if (!value) {
                return this.instance.emptyValue;
            }
            return momentDate(value).format(this.instance.component.format);
        };
        this.dateFilter = (d) => {
            const isValid = this.instance.component.datePicker.disableWeekends ? this.disableWeekends(d) : true;
            return this.instance.component.widget.disabledDates && isValid ?
                this.disableDates(this.instance.component.widget.disabledDates.split(','), d) : isValid;
        };
    }
    get enableDate() {
        return this.instance && this.instance.component.enableDate !== false;
    }
    get enableTime() {
        return this.instance && this.instance.component.enableTime === true;
    }
    setDisplayControlValue(value = null) {
        const format = `MM/DD/YYYY${this.enableTime ? 'THH:mm' : ''}`;
        value = value || this.getDateTimeValue();
        if (value) {
            this.displayControl.setValue(momentDate(value).format(format));
        }
        else {
            this.displayControl.setValue('');
        }
    }
    onChangeDate(event) {
        this.selectedDate = momentDate(event).utc().format();
        this.control.setValue(this.selectedDate);
        this.setDateTime();
    }
    onChangeTime(time) {
        this.selectedTime = time;
        if (this.selectedDate || (this.enableTime && !this.enableDate)) {
            this.setDateTime();
        }
    }
    onChangeInput() {
        const value = this.dateFilter(this.displayControl.value) &&
            this.checkMinMax(this.displayControl.value) ? this.displayControl.value : '';
        this.control.setValue(value);
        this.onChange();
    }
    getDateTimeValue() {
        let newDate = '';
        let isSelectedTime = false;
        if (this.calendar && this.calendar.selectedTime) {
            const { selectedTime } = this.calendar;
            isSelectedTime = true;
            if (this.selectedTime !== selectedTime) {
                this.selectedTime = selectedTime;
            }
        }
        if (this.enableTime && this.enableDate) {
            const [hours, minutes] = this.selectedTime.split(':');
            newDate = isSelectedTime
                ? momentDate(this.selectedDate)
                    .hours(Number.parseInt(hours))
                    .minutes(Number.parseInt(minutes))
                    .utc()
                : this.selectedDate;
        }
        if (!this.enableTime && this.enableDate) {
            newDate = this.selectedDate;
        }
        if (this.enableTime && !this.enableDate) {
            const [hours, minutes] = this.selectedTime.split(':');
            newDate = momentDate(new Date())
                .hours(Number.parseInt(hours))
                .minutes(Number.parseInt(minutes))
                .seconds(0)
                .utc();
        }
        return newDate;
    }
    setDateTime() {
        this.control.setValue(this.getDateTimeValue());
        this.onChange();
    }
    setInstance(instance) {
        super.setInstance(instance);
        this.isDisabled() ? this.control.disable() : this.control.enable();
        this.isDisabled() ? this.displayControl.disable() : this.displayControl.enable();
        if (this.instance) {
            this.allowManualInput = this.instance.component.allowInput === false ? false : true;
            if (this.instance.component && this.instance.component.datePicker) {
                const { minDate: min, maxDate: max } = this.instance.component.datePicker;
                // It improves the date to the full format if the customer set only a year. Otherwise we will have conflicts into the moment.js.
                const { minDate, maxDate } = this.improveMinMaxDate(min, max);
                this.instance.component.datePicker.minDate = minDate;
                this.instance.component.datePicker.maxDate = maxDate;
            }
        }
    }
    toggleCalendar(event) {
        if (!this.isDisabled()) {
            if (!this.isPickerOpened) {
                const date = this.getValue();
                if (date && this.checkMinMax(date)) {
                    if (this.enableDate && this.calendar && !this.calendar.selectedDate) {
                        this.calendar.setExistedDate(momentDate(date).toDate());
                    }
                    if (this.enableTime && this.calendar && !this.calendar.selectedTime) {
                        const time = momentDate(date);
                        this.calendar.setExistedTime(time.format('HH:mm'), time.format('h:mm:A'));
                    }
                }
            }
            this.isPickerOpened = !this.isPickerOpened;
            event.stopPropagation();
        }
    }
    isDisabled() {
        const { readonly, disabled } = this.instance.component;
        return readonly || disabled || this.instance.root.options.readOnly;
    }
    setValue(value) {
        if (this.dateFilter(value) && this.checkMinMax(value)) {
            this.setDisplayControlValue(value);
            super.setValue(value);
        }
    }
    onChange() {
        const value = this.dateFilter(this.getValue()) && this.checkMinMax(this.getValue()) ? this.getValue() : '';
        this.setDisplayControlValue(value);
    }
    beforeSubmit() {
        this.onChange();
        super.beforeSubmit();
    }
    checkMinMax(value) {
        let isValid = true;
        const { minDate: min, maxDate: max } = this.instance.component.datePicker;
        const { minDate, maxDate } = this.improveMinMaxDate(min, max);
        if (minDate) {
            isValid = momentDate(value).isSameOrAfter(minDate);
        }
        if (maxDate && isValid) {
            isValid = momentDate(value).isSameOrBefore(maxDate);
        }
        return isValid;
    }
    disableWeekends(d) {
        if (d && d.getDay) {
            const day = d.getDay();
            return day !== 0 && day !== 6;
        }
        return true;
    }
    disableDates(dates, d) {
        const formattedDates = dates.map((date) => momentDate(date).format('MM/DD/YYYY'));
        return !formattedDates.includes(momentDate(d).format('MM/DD/YYYY'));
    }
    clickOutside(event) {
        if (!this.calendar.element.nativeElement.contains(event.target) && this.isPickerOpened)
            this.toggleCalendar(event);
            console.log('s');
    }
    improveMinMaxDate(minDate, maxDate) {
        if (minDate && minDate.length === 4) {
            minDate = momentDate(`${minDate}-01-01`).format('MM/DD/YYYY');
        }
        if (maxDate && maxDate.length === 4) {
            maxDate = momentDate(`${maxDate}-01-01`).subtract(1, 'day').format('MM/DD/YYYY');
        }
        return { minDate, maxDate };
    }
}
MaterialDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-date',
                host: {
                    '(document:click)': 'clickOutside($event)',
                },
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-label *ngIf="hasLabel" fxFill>
        <span [instance]="instance" matFormioLabel></span>
      </mat-label>

      <form class="example-form">
        <mat-datepicker-toggle [disabled]="isDisabled()" (click)="toggleCalendar($event)">
          <mat-icon matDatepickerToggleIcon *ngIf="enableTime && !enableDate">schedule</mat-icon>
        </mat-datepicker-toggle>
        <mat-form-field class="example-full-width">
          <input
            *ngIf="enableTime && enableDate"
            matInput
            type="datetime-local"
            [placeholder]="instance.component.placeholder"
            [formControl]="displayControl"
            (input)="onChangeInput()"
            [readonly]="!allowManualInput"
          >
          <input
            *ngIf="enableTime && !enableDate"
            matInput
            [placeholder]="instance.component.placeholder"
            [formControl]="displayControl"
            [matMask]="formatTime"
            (input)="onChangeInput()"
            [readonly]="!allowManualInput"
          >
          <input
            *ngIf="!enableTime && enableDate"
            matInput
            [placeholder]="instance.component.placeholder"
            [formControl]="displayControl"
            (input)="onChangeInput()"
            [readonly]="!allowManualInput"
          >
        </mat-form-field>

        <mat-formio-calendar
          #calendar
          [minDate]="instance.component.datePicker.minDate || ''"
          [maxDate]="instance.component.datePicker.maxDate || ''"
          [dateFilter]="dateFilter"
          [hidden]="!isPickerOpened"
          (dateSelectEvent)="onChangeDate($event)"
          (timeSelectEvent)="onChangeTime($event)"
          [enableDate]="enableDate"
          [enableTime]="enableTime"
          [hourStep]="instance.component.timePicker.hourStep"
          [minuteStep]="instance.component.timePicker.minuteStep"
          [instance]="instance"
        ></mat-formio-calendar>
        <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
      </form>
    </ng-template>
  `
            },] }
];
MaterialDateComponent.propDecorators = {
    calendar: [{ type: ViewChild, args: ['calendar',] }]
};
DateTimeComponent.MaterialComponent = MaterialDateComponent;

class MaterialCheckboxComponent extends MaterialComponent {
    getValue() {
        return _.isNil(this.control.value) ? '' : this.control.value;
    }
}
MaterialCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-checkbox',
                template: `
    <mat-checkbox (change)="onChange()" [ngClass]="{'validation-error' : !!instance.error}"
                  [formControl]="control"
    >
      <span matFormioLabel [instance]="instance"></span>
      <mat-icon *ngIf="instance.component.tooltip" matSuffix
                matTooltip="{{ instance.component.tooltip }}" style="font-size: 1rem;">info
      </mat-icon>
    </mat-checkbox>
    <mat-hint>
      {{ instance.component.description  }}
    </mat-hint>
    <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
  `,
                styles: ['::ng-deep .mat-checkbox.validation-error .mat-checkbox-frame {border-color: red; }']
            },] }
];
CheckboxComponent.MaterialComponent = MaterialCheckboxComponent;

class MaterialFieldsetComponent extends MaterialNestedComponent {
}
MaterialFieldsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-fieldset',
                template: `
    <fieldset>
      <legend [attr.ref]="'header'">
        {{ instance.component.legend }}
        <mat-icon *ngIf="instance.component.tooltip"
                  matSuffix
                  matTooltip="{{ instance.component.tooltip }}"
        >
          info
        </mat-icon>
      </legend>
      <div class="fieldset-body" [attr.ref]="instance.component.key" fxLayout="column" fxLayoutGap="1em">
        <ng-template #components></ng-template>
      </div>
    </fieldset>
  `
            },] }
];
FieldsetComponent.MaterialComponent = MaterialFieldsetComponent;

class MaterialContentComponent extends MaterialComponent {
}
MaterialContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-content',
                template: `<div [innerHTML]="instance.content"></div>`
            },] }
];
ContentComponent.MaterialComponent = MaterialContentComponent;

class MaterialSignatureComponent extends MaterialComponent {
    renderComponents() {
        if (this.signatureElement) {
            this.instance.attach(this.signatureElement.nativeElement);
        }
    }
    ngAfterViewInit() {
        this.renderComponents();
    }
}
MaterialSignatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-signature',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <div #signature>

        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>

        <button mat-icon-button [ngStyle]="{position: 'absolute'}" ref="refresh">
          <mat-icon>refresh</mat-icon>
        </button>

        <div class="signature-pad-body"
             [ngStyle]="{width: instance.component.width, height: instance.component.height, padding: 0, margin: 0}"
             [attr.tabindex]="instance.component.tabindex || 0"
             ref="padBody"
        >
          <canvas class="signature-pad-canvas"
                  [attr.height]="instance.component.height"
                  ref="canvas"
          ></canvas>
          <img fxFlexFill [ngStyle]="{display: 'none' }" ref="signatureImage">
        </div>
        <div *ngIf="instance.component.footer"
             class="signature-pad-footer"
             fxLayout="row"
             fxLayoutAlign="center center"
        >
          <mat-hint>{{ instance.t(instance.component.footer) }}</mat-hint>
        </div>
      </div>
    </ng-template>
  `
            },] }
];
MaterialSignatureComponent.propDecorators = {
    signatureElement: [{ type: ViewChild, args: ['signature',] }]
};
SignatureComponent.MaterialComponent = MaterialSignatureComponent;

class MaterialSurveyComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.controls = {};
    }
    getFormControl(question) {
        if (!this.controls[question]) {
            this.controls[question] = new FormControl();
            if (this.instance.shouldDisabled) {
                this.controls[question].disable();
            }
        }
        return this.controls[question];
    }
    setDisabled(disabled) {
        const method = disabled ? 'disable' : 'enable';
        for (const question in this.controls) {
            if (this.controls.hasOwnProperty(question)) {
                this.controls[question][method]();
            }
        }
    }
    getValue() {
        const values = {};
        for (const question in this.controls) {
            if (this.controls.hasOwnProperty(question)) {
                values[question] = this.controls[question].value || false;
            }
        }
        return values;
    }
    setValue(value) {
        for (const question in value) {
            if (value.hasOwnProperty(question)) {
                const control = this.getFormControl(question);
                if (control) {
                    control.setValue(value[question] || false);
                }
            }
        }
    }
    getUniqueName(question) {
        return `${this.instance.id}-${question}`;
    }
}
MaterialSurveyComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-survey',
                template: `

      <mat-formio-form-field
              [instance]="instance"
              [componentTemplate]="componentTemplate"
              [showDescription]="false"
      ></mat-formio-form-field>
      <ng-template #componentTemplate let-hasLabel>

        <table class="mat-elevation-z8 mat-table" fxFill>
          <thead>
          <tr class="mat-header-row">
            <th class="mat-header-cell">
              <h2 *ngIf="hasLabel">
                <span [instance]="instance" matFormioLabel></span>
              </h2>
            </th>
            <th class="mat-header-cell"
                *ngFor="let value of instance.component.values"
                style="text-align: center;"
            >
              {{ value.label }}
            </th>
          </tr>
          </thead>

          <tbody>
          <tr class="mat-row" *ngFor="let question of instance.component.questions; index as i;">
            <td class="mat-cell">{{ question.label }}</td>
            <td class="mat-cell"
                *ngFor="let value of instance.component.values; index as j;"
                style="text-align: center;"
            >
              <mat-radio-group (change)="onChange()"
                               [formControl]="getFormControl(question.value)"
                               [name]="getUniqueName(question.value)"
              >
                <mat-radio-button [value]="value.value"></mat-radio-button>
              </mat-radio-group>
            </td>
          </tr>
          <mat-hint *ngIf="instance.component.description" class="mat-formio-component-description">
            {{ instance.component.description }}
          </mat-hint>
          </tbody>

          <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
        </table>
      </ng-template>
    `
            },] }
];
SurveyComponent.MaterialComponent = MaterialSurveyComponent;

class MaterialRadioComponent extends MaterialComponent {
    getLayout() {
        return this.instance.component.inline ? 'row' : 'column';
    }
    isRadioChecked(option) {
        return option.value === this.instance.dataValue;
    }
    clearValue(event, option) {
        if (this.isRadioChecked(option)) {
            event.preventDefault();
            this.deselectValue();
        }
    }
    deselectValue() {
        this.instance.updateValue(null, {
            modified: true,
        });
    }
}
MaterialRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-radio',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <div fxLayout="column">
        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>

        <mat-radio-group
                (change)="onChange()"
                [formControl]="control"
                fxFlexOffset="10px"
                fxLayout="{{ getLayout() }}"
                fxLayoutGap="10px"
        >
          <mat-radio-button *ngFor="let option of instance.component.values"
                            value="{{ option.value }}"
                            [checked]="isRadioChecked(option)"
                            (keyup.space)="clearValue($event, option)"
                            (click)="clearValue($event, option)"
          >
            {{ option.label }}
          </mat-radio-button>
          <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
        </mat-radio-group>
      </div>
    </ng-template>
  `
            },] }
];
RadioComponent.MaterialComponent = MaterialRadioComponent;

class MaterialSelectBoxesComponent extends MaterialRadioComponent {
    constructor() {
        super(...arguments);
        this.value = {};
        this.disabled = false;
    }
    setInstance(instance) {
        instance.component.values.forEach((option) => {
            this.value[option.value] = false;
        });
        super.setInstance(instance);
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        const normalizedValue = this.instance.normalizeValue(value);
        for (const prop in normalizedValue) {
            if (normalizedValue.hasOwnProperty(prop)) {
                this.value[prop] = normalizedValue[prop];
            }
        }
    }
    setDisabled(disabled) {
        this.disabled = !!disabled;
    }
    onChange() {
        this.instance.updateValue(this.getValue(), { modified: true });
        this.instance.triggerChange({ modified: true });
    }
}
MaterialSelectBoxesComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-selectboxes',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <div fxLayout="column">
        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>
        <div
                fxFlexOffset="10px"
                fxLayout="{{ getLayout() }}"
                fxLayoutGap="10px"
        >
          <mat-checkbox
                  *ngFor="let option of instance.component.values"
                  (change)="onChange()"
                  [(ngModel)]="value[option.value]"
                  [disabled]="disabled"
          >
            {{ option.label }}
          </mat-checkbox>
          <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
        </div>
      </div>
    </ng-template>
  `
            },] }
];
SelectBoxesComponent.MaterialComponent = MaterialSelectBoxesComponent;

class MaterialSelectComponent extends MaterialComponent {
    setInstance(instance) {
        super.setInstance(instance);
        this.instance.triggerUpdate();
    }
    ngOnInit() {
        this.selectOptions = new Promise((resolve) => {
            this.selectOptionsResolve = resolve;
        });
        this.selectOptions.then((options) => {
            this.filteredOptionsLength = options.length;
        });
        this.filteredOptions = this.selectOptions;
    }
    onFilter(value) {
        this.filteredOptions = this.selectOptions.then((options) => {
            const filtered = options.filter((option) => option.label.indexOf(value) !== -1);
            this.filteredOptionsLength = filtered.length;
            return filtered;
        });
    }
    compareObjects(o1, o2) {
        return _.isEqual(o1, o2);
    }
}
MaterialSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-select',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-form-field fxFill>

        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>

        <span *ngIf="instance.component.prefix" matPrefix>
          {{ instance.component.prefix }}&nbsp;
        </span>
        <mat-select
                [multiple]="instance.component.multiple"
                [formControl]="control"
                [placeholder]="instance.component.placeholder"
                (selectionChange)="onChange()"
                [compareWith]="compareObjects"
        >
          <div class="mat-option">
            <input class="mat-input-element" placeholder="Type to search" (input)="onFilter($event.target.value)">
          </div>
          <mat-option *ngIf="!filteredOptionsLength" disabled>
            <span>Nothing was found</span>
          </mat-option>
          <mat-option *ngFor="let option of filteredOptions | async" [value]="option.value">
            <span [innerHTML]="option.label"></span>
          </mat-option>
        </mat-select>

        <span *ngIf="instance.component.suffix" matSuffix>
          {{ instance.component.suffix }}
        </span>
        <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
      </mat-form-field>
    </ng-template>
  `
            },] }
];
SelectComponent.MaterialComponent = MaterialSelectComponent;
// Make sure we detect changes when new items make their way into the select dropdown.
const setItems = SelectComponent.prototype.setItems;
SelectComponent.prototype.setItems = function (...args) {
    setItems.call(this, ...args);
    if (this.materialComponent && this.materialComponent.selectOptionsResolve) {
        this.materialComponent.selectOptionsResolve(this.selectOptions);
    }
};

class MaterialWellComponent extends MaterialNestedComponent {
}
MaterialWellComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-well',
                template: `
    <mat-card>
      <mat-card-content fxLayout="column"
                        fxLayoutGap="1em"
                        [ngStyle]="{
                           'background-color':'#f5f5f5',
                           'padding': '1.5em'
                         }"
      >
        <ng-template #components></ng-template>
      </mat-card-content>
    </mat-card>
  `
            },] }
];
WellComponent.MaterialComponent = MaterialWellComponent;

class MaterialDataGridComponent extends MaterialNestedComponent {
    constructor() {
        super(...arguments);
        this.dataSource = new MatTableDataSource();
    }
    getColumnLabel(column) {
        return column.label || column.key;
    }
    setInstance(instance) {
        super.setInstance(instance);
        this.dataSource.data = instance.dataValue;
        this.columns = {};
        this.displayedColumns = [];
        this.formColumns = [];
        instance.getColumns().map((column) => {
            this.formColumns.push(column.key);
            this.displayedColumns.push(column.key);
            this.columns[column.key] = column;
        });
        this.displayedColumns.push('__removeRow');
        if (this.instance.component.reorder) {
            this.displayedColumns.push('position');
        }
        instance.viewContainer = (component) => {
            let viewContainer;
            if (this.instance.component.disabled) {
                component.component.disabled = true;
            }
            this.viewContainers.forEach((container) => {
                const td = container.element.nativeElement.parentNode;
                if (component.rowIndex === parseInt(td.getAttribute('rowIndex'), 10) &&
                    component.component.key === td.getAttribute('component')) {
                    viewContainer = container;
                }
            });
            return viewContainer ? viewContainer : null;
        };
    }
    addAnother() {
        this.checkRowsNumber();
        this.instance.addRow();
        if (this.dataSource.data.length < this.instance.rows.length) {
            this.dataSource.data.push({});
        }
        this.dataSource.data = [...this.dataSource.data];
    }
    checkRowsNumber() {
        while (this.instance.rows.length < this.dataSource.data.length) {
            this.instance.addRow();
        }
    }
    removeRow(index) {
        this.instance.removeRow(index);
        this.dataSource.data.splice(index, 1);
        this.dataSource.data = [...this.dataSource.data];
    }
    dropTable(event) {
        const prevIndex = this.dataSource.data.findIndex((d) => d === event.item.data);
        moveItemInArray(this.control.value, prevIndex, event.currentIndex);
        this.renderComponents();
    }
    renderComponents() {
        this.instance.getRows();
        this.instance.setValue(this.control.value || []);
    }
    setValue(value) {
        const gridLength = value ? value.length : 0;
        while (this.instance.rows.length < gridLength) {
            this.addAnother();
            this.instance.dataValue = value;
            this.instance.setValue(value);
        }
        if (!value && this.instance.component.clearOnHide) {
            this.dataSource = new MatTableDataSource(this.instance.defaultValue);
        }
        super.setValue(value);
    }
}
MaterialDataGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-datagrid',
                template: `
    <mat-formio-form-field [instance]="instance"
                           [componentTemplate]="componentTemplate"
                           [labelTemplate]="labelTemplate"
    ></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-card fxFill>
        <ng-container *ngIf="hasLabel">
          <ng-container *ngTemplateOutlet="labelTemplate"></ng-container>
        </ng-container>
        <mat-card-content>
          <mat-card-actions
                  *ngIf="instance.hasAddButton() && (instance.component.addAnotherPosition === 'both' || instance.component.addAnotherPosition === 'top')">
            <button mat-raised-button color="primary" (click)="addAnother()">
              <mat-icon>add</mat-icon>
              {{instance.component.addAnother || 'Add Another'}}
            </button>
          </mat-card-actions>
          <table
                  mat-table
                  [dataSource]="dataSource"
                  class="mat-elevation-z8"
                  fxFill
                  cdkDropList
                  [cdkDropListData]="dataSource"
                  (cdkDropListDropped)="dropTable($event)">
            >
            <ng-container *ngFor="let column of formColumns" [matColumnDef]="column">
              <th mat-header-cell *matHeaderCellDef>{{ getColumnLabel(columns[column]) }}</th>
              <td mat-cell *matCellDef="let i = index;" [attr.rowIndex]="i" [attr.component]="column">
                <ng-template #components></ng-template>
              </td>
            </ng-container>
            <ng-container matColumnDef="__removeRow">
              <th mat-header-cell *matHeaderCellDef></th>
              <td mat-cell *matCellDef="let i = index;">
                <button mat-button *ngIf="instance.hasRemoveButtons()" (click)="removeRow(i)">
                  <mat-icon aria-hidden="false" aria-label="Remove row">delete</mat-icon>
                </button>
              </td>
            </ng-container>
            <ng-container matColumnDef="position" *ngIf="instance.component.reorder">
              <th mat-header-cell *matHeaderCellDef> No.</th>
              <td mat-cell *matCellDef="let element">
                <mat-icon cdkDragHandle>reorder</mat-icon>
              </td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <div *ngIf="instance?.component?.reorder">
              <tr class="datagrid-row" mat-row *matRowDef="let row; columns: displayedColumns;" cdkDrag
                  [cdkDragData]="row"></tr>
            </div>
            <div *ngIf="!instance?.component?.reorder">
              <tr class="datagrid-row" mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </div>
          </table>
        </mat-card-content>
        <mat-card-actions *ngIf="instance.hasAddButton() && instance.component.addAnotherPosition !== 'top'">
          <button mat-raised-button color="primary" (click)="addAnother()">
            <mat-icon>add</mat-icon>
            {{instance.component.addAnother || 'Add Another'}}
          </button>
        </mat-card-actions>
      </mat-card>
    </ng-template>

    <ng-template #labelTemplate>
      <mat-card-title>
        <span [instance]="instance" matFormioLabel></span>
      </mat-card-title>
    </ng-template>
  `,
                styles: ['.datagrid-row { height: auto; }']
            },] }
];
DataGridComponent.MaterialComponent = MaterialDataGridComponent;

var EditRowState;
(function (EditRowState) {
    EditRowState["NEW"] = "new";
    EditRowState["EDITING"] = "editing";
    EditRowState["SAVED"] = "saved";
    EditRowState["REMOVED"] = "removed";
    EditRowState["DRAFT"] = "draft";
})(EditRowState || (EditRowState = {}));
;
/* tslint:disable no-bitwise only-arrow-functions */
const hashCode = function (str) {
    let hash = 0;
    let i = 0;
    let chr;
    str = str.replace(/\s/g, '');
    if (str.length === 0) {
        return hash;
    }
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
const ɵ0 = hashCode;
/* tslint:enable no-bitwise only-arrow-functions */
// Do nothing to createRowComponents, let mat-formio handle it.
/* tslint:disable only-arrow-functions */
EditGridComponent.prototype.createRowComponents = function () {
    return [];
};
const checkRow = EditGridComponent.prototype.checkRow;
EditGridComponent.prototype.checkRow = function (data, editRow, flags = {}) {
    if (flags.checkRow) {
        return checkRow.call(this, data, editRow, flags);
    }
    else {
        return true;
    }
};
/* tslint:enable only-arrow-functions */
const DEFAULT_HEADER_TEMPLATES = [
    hashCode(EditGridComponent.defaultHeaderTemplate),
    hashCode(`
  <div class="row">
    {% (components || []).forEach(function(component) { %}
      <div class="col-sm-2">{{ component.label }}</div>
    {% }) %}
  </div>`)
];
const DEFAULT_ROW_TEMPLATES = [
    hashCode(EditGridComponent.defaultRowTemplate),
    hashCode(`<div class="row">
  {% util.eachComponent(components, function(component) { %}
    <div class="col-sm-2">
      {{ getView(component, row[component.key]) }}
    </div>
  {% }) %}
  {% if (!instance.options.readOnly) { %}
    <div class="col-sm-2">
      <div class="btn-group pull-right">
        <button class="btn btn-default btn-sm editRow">Edit</button>
        <button class="btn btn-danger btn-sm removeRow">Delete</button>
      </div>
    </div>
  {% } %}
</div>`)
];
class MaterialEditGridComponent extends MaterialNestedComponent {
    constructor() {
        super(...arguments);
        this.columns = {};
        this.colWidth = 0;
        this.valid = true;
        this.RowStates = EditRowState;
    }
    getRowTemplate(content) {
        return `<mat-list style="display: flex;">
      {% (components || []).forEach(function(component) { %}
        {% if (!component.hasOwnProperty('tableView') || component.tableView) { %}
          <mat-list-item style="width: {{ colWidth }}%; margin: 0 0.8rem">${content}</mat-list-item>
        {% } %}
      {% }) %}
    </mat-list>`;
    }
    validate(index) {
        if (!this.forms) {
            return;
        }
        const forms = this.forms.toArray();
        if (!forms[index]) {
            return;
        }
        const formioComponent = forms[index];
        const { data } = formioComponent.formio.submission;
        const isInvalid = Object.keys(data).some(value => isString(data[value]) && data[value].length === 0);
        if (isInvalid) {
            this.valid = false;
        }
        else {
            this.valid = true;
        }
    }
    setInstance(instance) {
        if (instance.component.templates.header &&
            (DEFAULT_HEADER_TEMPLATES.indexOf(hashCode(instance.component.templates.header)) !== -1)) {
            instance.component.templates.header = this.getRowTemplate('{{ component.label }}');
        }
        if (instance.component.templates.row &&
            (DEFAULT_ROW_TEMPLATES.indexOf(hashCode(instance.component.templates.row)) !== -1)) {
            instance.component.templates.row = this.getRowTemplate('{{ getView(component, row[component.key]) }}');
        }
        this.displayedColumns = instance.component.components.map((comp) => {
            if (comp.hasOwnProperty('tableView') && !comp.tableView) {
                return false;
            }
            this.columns[comp.key] = comp;
            return comp.key;
        }).filter(name => !!name);
        const dataValue = instance.dataValue || [];
        this.colWidth = instance.component.components.length ? Math.floor(100 / instance.component.components.length) : 100;
        if (instance.component.templates && instance.component.templates.header) {
            this.header = instance.renderString(instance.component.templates.header, {
                components: instance.component.components,
                value: dataValue,
                colWidth: this.colWidth
            });
        }
        if (instance.component.templates && instance.component.templates.footer) {
            this.footer = instance.renderString(instance.component.templates.footer, {
                components: instance.component.components,
                value: dataValue,
                colWidth: this.colWidth
            });
        }
        setTimeout(() => {
            this.renderTemplate(this.headerElement, this.header);
            this.renderTemplate(this.footerElement, this.footer);
        }, 0);
        super.setInstance(instance);
    }
    addAnother() {
        const row = this.instance.addRow();
    }
    editRow(row, index) {
        const { state } = row;
        const { NEW, REMOVED } = this.RowStates;
        if (state === NEW || state === REMOVED) {
            return;
        }
        this.instance.editRow(index);
        const forms = this.forms.toArray();
        if (forms[index]) {
            forms[index].formio.submission = { data: JSON.parse(JSON.stringify(row.data)) };
        }
    }
    /**
     * Updates the row template.
     *
     * @param row
     * @param index
     */
    updateRowTemplate(rowElement, index, comps) {
        const self = this;
        const editRow = Object.assign({}, this.instance.editRows[index]);
        if (editRow.state !== this.RowStates.NEW) {
            this.renderTemplate(rowElement, this.instance.renderString(this.instance.component.templates.row, {
                row: this.instance.dataValue[index] || {},
                data: this.instance.data,
                rowIndex: index,
                colWidth: this.colWidth,
                components: this.instance.component.components,
                getView: function getView(component, data) {
                    if (!comps[component.type]) {
                        comps[component.type] = Components$2.create(component, {}, {}, true);
                    }
                    return comps[component.type] ? comps[component.type].getView(data) : '';
                }
            }));
        }
    }
    /**
     * Saves a row.
     *
     * @param row - The edit grid row.
     * @param index - The index for this row.
     */
    saveRow(row, index) {
        const forms = this.forms.toArray();
        if (forms[index]) {
            const formioComponent = forms[index];
            row.data = JSON.parse(JSON.stringify(formioComponent.formio.submission.data));
            this.instance.saveRow(index);
            const rows = this.rowElements.toArray();
            if (rows && rows[index]) {
                this.updateRowTemplate(rows[index], index, {});
            }
        }
    }
    cancelRow(index) {
        this.instance.cancelRow(index);
        this.valid = true;
    }
    renderTemplate(element, template) {
        if (!element || !element.nativeElement) {
            return;
        }
        element.nativeElement.innerHTML = template;
    }
    ngAfterViewInit() {
        this.rowElements.changes.subscribe((rows) => {
            const rowCache = {};
            rows.forEach((row, index) => this.updateRowTemplate(row, index, rowCache));
        });
    }
}
MaterialEditGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-editgrid',
                template: "<mat-formio-form-field [instance]=\"instance\" [componentTemplate]=\"componentTemplate\" [labelTemplate]=\"labelTemplate\">\n</mat-formio-form-field>\n<ng-template #componentTemplate let-hasLabel>\n\n  <span fxLayout=\"column\" fxLayoutGap=\"1em\" fxFill>\n    <ng-container *ngIf=\"hasLabel\">\n      <ng-container *ngTemplateOutlet=\"labelTemplate\"></ng-container>\n    </ng-container>\n    <mat-accordion>\n      <mat-expansion-panel *ngIf=\"header\" disabled=\"true\">\n        <mat-expansion-panel-header>\n          <span #header fxFill></span>\n        </mat-expansion-panel-header>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel *ngFor=\"let row of instance.editRows; index as i;\" [expanded]=\"instance.isOpen(row)\">\n        <mat-expansion-panel-header (click)=\"editRow(row, i)\">\n          <span *ngIf=\"row.state !== RowStates.NEW\" #rows fxFill></span>\n        </mat-expansion-panel-header>\n\n        <mat-formio [form]=\"instance.component\" #forms (change)=\"validate(i)\"></mat-formio>\n\n        <span fxLayout=\"row\" fxLayoutGap=\"1em\">\n          <button mat-raised-button color=\"primary\" [disabled]=\"!valid\" (click)=\"saveRow(row, i)\">Save</button>\n          <button mat-raised-button color=\"secondary\" (click)=\"cancelRow(i)\">Cancel</button>\n          <button mat-raised-button color=\"warn\" (click)=\"instance.removeRow(i)\" class=\"delete-button\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </span>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel *ngIf=\"footer\" disabled=\"true\">\n        <mat-expansion-panel-header>\n          <span #footer></span>\n        </mat-expansion-panel-header>\n      </mat-expansion-panel>\n    </mat-accordion>\n\n    <span fxFill=\"none\" *ngIf=\"instance.hasAddButton()\">\n      <button mat-raised-button color=\"primary\" (click)=\"addAnother()\">\n        <mat-icon>add</mat-icon> Add Another\n      </button>\n    </span>\n  </span>\n</ng-template>\n\n<ng-template #labelTemplate>\n  <mat-card-title>\n    <span [instance]=\"instance\" matFormioLabel></span>\n  </mat-card-title>\n</ng-template>\n",
                styles: [":host .delete-button{margin-left:auto;order:2}"]
            },] }
];
MaterialEditGridComponent.propDecorators = {
    headerElement: [{ type: ViewChild, args: ['header',] }],
    footerElement: [{ type: ViewChild, args: ['footer',] }],
    rowElements: [{ type: ViewChildren, args: ['rows',] }],
    forms: [{ type: ViewChildren, args: ['forms',] }]
};
EditGridComponent.MaterialComponent = MaterialEditGridComponent;

class MaterialTableComponent extends MaterialNestedComponent {
    setInstance(instance) {
        super.setInstance(instance);
        instance.viewContainer = (component) => {
            return this.viewContainers ?
                this.viewContainers[(component.tableRow * this.instance.component.numCols) + component.tableColumn] :
                null;
        };
    }
    getTableColClasses() {
        if (!this.instance) {
            return;
        }
        const { condensed, cellAlignment } = this.instance.component;
        return Object.assign({ 'is-condensed': condensed }, (cellAlignment && { [cellAlignment]: true }));
    }
}
MaterialTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-table',
                template: `
      <table class="mat-table" style="width: 100%;" [ngClass]="{'is-bordered' : instance.component.bordered}">
        <thead>
        <tr class="mat-header-row">
          <th *ngFor="let header of instance.component.header"
              class="mat-header-cell"
          >
            {{ instance.t(header) }}
          </th>
        </tr>
        </thead>

        <tbody>
        <tr *ngFor="let row of instance.table; let i = index"
            role="row"
            class="mat-row"
            [ngClass]="{
                'is-hover': instance.component.hover,
                'is-striped': instance.component.striped && i % 2 === 0
              }"
        >
          <td *ngFor="let col of row"
              role="gridcell"
              class="mat-cell"
              [ngClass]="getTableColClasses()"
          >
            <ng-template #components></ng-template>
          </td>
        </tr>
        </tbody>
      </table>
  `,
                styles: [".mat-table.is-bordered{border:1px solid #ddd}.mat-row.is-hover:hover{background-color:#f5f5f5}.mat-cell{padding:8px}.mat-cell.is-condensed{padding:3px}.mat-row.is-striped{background-color:#eee}.mat-cell.center{text-align:center}.mat-cell.right{text-align:right}"]
            },] }
];
TableComponent.MaterialComponent = MaterialTableComponent;

class MaterialWizardComponent extends MaterialNestedComponent {
    constructor() {
        super(...arguments);
        this.isLinear = true;
        this.prevNumOfPages = 0;
    }
    setInstance(instance) {
        this.isLinear = (instance.options &&
            instance.options.breadcrumbSettings &&
            instance.options.breadcrumbSettings.clickable) ? false : true;
        this.updatePages(instance);
        instance.on('pagesChanged', () => this.updatePages());
        super.setInstance(instance);
    }
    updatePages(instance = this.instance) {
        if (this.prevNumOfPages !== instance.pages.length) {
            instance.pages.forEach((page, pageIndex) => {
                page.viewContainer = () => {
                    return this.viewContainers ? this.viewContainers[pageIndex] : null;
                };
            });
            this.prevNumOfPages = instance.pages.length;
        }
    }
    resetWizard() {
        this.instance.cancel();
        this.stepper.reset();
    }
    nextPage() {
        this.instance.nextPage().then(() => this.stepper.next());
    }
    prevPage() {
        this.instance.prevPage().then(() => this.stepper.previous());
    }
    submit() {
        this.instance.submit();
    }
    renderComponents() {
        if (this.instance.renderComponents && this.instance.pages) {
            this.instance.renderComponents(this.instance.pages.reduce((comps, page) => {
                return comps.concat(page.components);
            }, []));
        }
    }
}
MaterialWizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-wizard',
                template: `
    <mat-horizontal-stepper [linear]="isLinear" #stepper>
      <mat-step *ngFor="let page of instance.pages" [label]="page.component.title">
        <ng-template #components></ng-template>
        <div class="navigation-button-row">
          <button *ngIf="instance.hasButton('cancel')" mat-raised-button (click)="resetWizard()">Cancel</button>
          <button *ngIf="instance.hasButton('previous')" mat-raised-button color="primary" (click)="prevPage()">Previous</button>
          <button *ngIf="instance.hasButton('next')" mat-raised-button color="primary" (click)="nextPage()">Next</button>
          <button *ngIf="instance.hasButton('submit')" mat-raised-button color="primary" (click)="submit()">Submit</button>
        </div>
      </mat-step>
    </mat-horizontal-stepper>`,
                styles: [':host .navigation-button-row { margin-top: 8px; }',
                    ':host .navigation-button-row button { margin-right: 8px; }']
            },] }
];
MaterialWizardComponent.propDecorators = {
    stepper: [{ type: ViewChild, args: ['stepper', { static: true },] }]
};
Wizard.MaterialComponent = MaterialWizardComponent;
Displays.addDisplay('wizard', Wizard);

class MaterialTimeComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.period = 'AM';
        this.hourControl = new FormControl();
        this.minuteControl = new FormControl();
        this.secondControl = new FormControl();
        this.selectedEvent = new EventEmitter();
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.renderElementOnly = false;
    }
    setDisabled(disabled) {
        if (disabled) {
            this.hourControl.disable();
            this.minuteControl.disable();
            this.secondControl.disable();
        }
    }
    get dataFormat() {
        let format = this.instance.component.dataFormat;
        format = format ? format : 'HH:mm';
        return format;
    }
    setInstance(instance) {
        super.setInstance(instance);
        // this.control.setValue('00:00:00');
        this.onChange();
    }
    onChange() {
        const hours = this.hourControl.value;
        const minutes = this.minuteControl.value || '00';
        const seconds = this.secondControl.value || '';
        const rawValue = `${hours || '00'}:${minutes}${seconds ? ':' + seconds : ''} ${this.period}`;
        let value = this.getTwentyFourHourTime(rawValue);
        if (!hours) {
            value = this.instance.emptyValue;
        }
        this.control.setValue(value);
        if (this.instance) {
            super.onChange();
        }
        this.selectedEvent.emit(this.control);
    }
    setValue(value) {
        if (!value) {
            return;
        }
        super.setValue(value);
        const [hourValue, minuteValue, period] = value.split(':');
        this.hourControl.setValue(hourValue);
        this.minuteControl.setValue(minuteValue);
        // fix for default value with seconds instead of period
        this.period = period === ('AM' || 'PM') ? period : this.period;
    }
    getTwentyFourHourTime(amPmString) {
        const moment = moment_;
        return moment(amPmString, ['h:mm:ss A']).format(this.dataFormat);
    }
    changePeriod() {
        this.period = this.period === 'AM' ? 'PM' : 'AM';
        this.onChange();
    }
}
MaterialTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-time',
                template: `
    <mat-formio-form-field
      [instance]="instance"
      [componentTemplate]="componentTemplate"
      [renderElementOnly]="renderElementOnly"
    ></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-label fxFill *ngIf="hasLabel">
        <span [instance]="instance" matFormioLabel></span>
      </mat-label>

      <div style="display: block">
        <div fxLayout="row" fxLayoutGap="5%">
          <input
            [formControl]="hourControl"
            [step]="hourStep"
            [min]="0"
            [max]="12"
            type="number"
            fxFlex="25%"
            (input)="onChange()"
          >
          <input
            [formControl]="minuteControl"
            [step]="minuteStep"
            [min]="0"
            [max]="59"
            type="number"
            fxFlex="25%"
            (input)="onChange()"
          >
          <input
            [formControl]="secondControl"
            [step]="secondStep"
            [min]="0"
            [max]="59"
            type="number"
            fxFlex="25%"
            (input)="onChange()"
            *ngIf="instance?.component?.dataFormat === 'HH:mm:ss' ||
             instance?.component?.dataFormat === 'HH:mm:ss.SSS'"
          >
          <button
            [disabled]="instance?.component?.disabled"
            fxFlex="25%"
            (click)="changePeriod()"
          >
            {{period}}
          </button>
        </div>
        <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
      </div>
    </ng-template>
  `
            },] }
];
MaterialTimeComponent.propDecorators = {
    selectedEvent: [{ type: Output }],
    hourStep: [{ type: Input }],
    minuteStep: [{ type: Input }],
    secondStep: [{ type: Input }],
    renderElementOnly: [{ type: Input }]
};
TimeComponent.MaterialComponent = MaterialTimeComponent;

const Components = require('formiojs/components/Components').default;
// Set the components.
const components = {
    textfield: TextFieldComponent,
    password: PasswordComponent,
    url: UrlComponent,
    checkbox: CheckboxComponent,
    email: EmailComponent,
    phoneNumber: PhoneNumberComponent,
    number: NumberComponent,
    currency: CurrencyComponent,
    day: DayComponent,
    hidden: HiddenComponent,
    htmlelement: HtmlComponent,
    tags: TagsComponent,
    textarea: TextAreaComponent,
    button: ButtonComponent,
    datetime: DateTimeComponent,
    panel: PanelComponent,
    columns: ColumnsComponent,
    tabs: TabsComponent,
    table: TableComponent,
    well: WellComponent,
    fieldset: FieldsetComponent,
    content: ContentComponent,
    signature: SignatureComponent,
    survey: SurveyComponent,
    selectboxes: SelectBoxesComponent,
    radio: RadioComponent,
    select: SelectComponent,
    container: ContainerComponent,
    datagrid: DataGridComponent,
    editgrid: EditGridComponent,
    unknown: FormioComponent,
    time: TimeComponent,
    wizard: Wizard
};
function getComponents() {
    for (const type of Object.keys(components)) {
        const CompClass = components[type];
        CompClass.prototype.render = (function () {
            if (this.materialComponent) {
                return this.materialComponent.renderComponents();
            }
            const viewContainer = this.parent ? this.parent.viewContainer(this) : this.viewContainer(this);
            if (!viewContainer) {
                return;
            }
            const factory = this.options.viewResolver.resolveComponentFactory(CompClass.MaterialComponent);
            const componentRef = viewContainer.createComponent(factory);
            componentRef.instance.setInstance(this);
        });
        const setValue = CompClass.prototype.setValue;
        CompClass.prototype.setValue = (function (...args) {
            if (this.materialComponent) {
                this.materialComponent.setValue(args[0]);
            }
            return setValue.call(this, ...args);
        });
        components[type] = CompClass;
    }
    return components;
}
function registerComponent(name, CompClass) {
    class DummyComponent extends FormioComponent$2 {
    }
    ;
    const formIOComp = DummyComponent;
    formIOComp.MaterialComponent = CompClass;
    formIOComp.prototype.render = (function () {
        if (this.materialComponent) {
            return this.materialComponent;
        }
        const viewContainer = this.parent ? this.parent.viewContainer(this) : this.viewContainer(this);
        if (!viewContainer) {
            return;
        }
        const factory = this.options.viewResolver.resolveComponentFactory(formIOComp.MaterialComponent);
        const componentRef = viewContainer.createComponent(factory);
        componentRef.instance.setInstance(this);
    });
    const setValue = formIOComp.prototype.setValue;
    formIOComp.prototype.setValue = (function (...args) {
        if (this.materialComponent) {
            this.materialComponent.setValue(args[0]);
        }
        return setValue.call(this, ...args);
    });
    Components.addComponent(name, formIOComp);
}

const Components$1 = require('formiojs/components/Components').default;
const Formio = require('formiojs/Formio').default;
const Form = require('formiojs/Form').default;
const Utils = require('formiojs/utils').default;
function initRenderer() {
    Components$1.setComponents(getComponents());
    Formio.Components = Components$1;
    Formio.Templates = {};
}

class FormioComponent$1 extends FormioBaseComponent {
    constructor(resolver, cd, ngZone, config) {
        super(ngZone, config);
        this.resolver = resolver;
        this.cd = cd;
        this.ngZone = ngZone;
        this.config = config;
    }
    getRendererOptions() {
        const rendererOptions = super.getRendererOptions();
        return Object.assign(Object.assign({}, rendererOptions), { validateOnInit: get$1(rendererOptions, 'validateOnInit', true) });
    }
    createRenderer() {
        const options = this.getRendererOptions();
        const flags = {
            validateOnInit: options.validateOnInit
        };
        options.viewResolver = this.resolver;
        const form = new Form();
        form._form = this.form;
        form.options = options;
        form.options.events = form.events;
        form.instance = form.create(this.form.display);
        form.instance.viewContainer = () => this.formioViewContainer;
        if (this.submission && this.submission.data) {
            form.instance.data = this.submission.data;
        }
        this.ngZone.run(() => form.instance.setForm(this.form, flags)
            .then(() => form.readyResolve(form.instance))
            .catch(() => form.readyReject()));
        return form.instance;
    }
}
FormioComponent$1.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio',
                template: `
    <mat-spinner *ngIf="isLoading"></mat-spinner>
    <div *ngIf="!this.options?.disableAlerts">
      <div *ngFor="let alert of alerts.alerts"
           class="alert alert-{{ alert.type }}"
           role="alert"
      >
        {{ alert.message }}
      </div>
    </div>
    <div fxLayout="column" fxLayoutGap="1em">
      <ng-template #formio></ng-template>
    </div>
  `,
                styles: [`.alert-danger {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }
    .alert-success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }
    .alert {
      position: relative;
      padding: .75rem 1.25rem;
      margin-bottom: 0.5rem;
      border: 1px solid transparent;
      border-radius: .25rem;
    }
    ::ng-deep mat-card {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    `]
            },] }
];
FormioComponent$1.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: FormioAppConfig, decorators: [{ type: Optional }] }
];
FormioComponent$1.propDecorators = {
    formioViewContainer: [{ type: ViewChild, args: ['formio', { static: true, read: ViewContainerRef },] }]
};

class MaterialCalendarComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.timeSelectEvent = new EventEmitter();
        this.dateSelectEvent = new EventEmitter();
    }
    setInstance(instance) {
        super.setInstance(instance);
    }
    setExistedDate(value) {
        this.selectedDate = value;
    }
    setExistedTime(value, forTime) {
        this.selectedTime = value;
        this.time.setValue(forTime);
    }
    onDate(event) {
        this.selectedDate = event;
        this.dateSelectEvent.emit(this.selectedDate);
    }
    onTime(event) {
        this.selectedTime = event.value;
        this.timeSelectEvent.emit(this.selectedTime);
    }
    getPopupStyles() {
        return {
            position: 'absolute',
            zIndex: '1000',
            display: 'flex',
            maxWidth: '100%',
            maxHeight: '100%',
            top: '90px',
            left: '30px'
        };
    }
}
MaterialCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-calendar',
                template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutGap="0.5%">
      <div [ngStyle]="getPopupStyles()">
        <mat-card style="padding: 0;">
          <mat-calendar
                  [dateFilter]="dateFilter"
                  [maxDate]="maxDate"
                  [minDate]="minDate"
                  [selected]="selectedDate"
                  (selectedChange)="onDate($event)"
                  class="calendar"
                  *ngIf="enableDate !== false"
          >
          </mat-calendar>
          <mat-formio-time
                  #time
                  [hourStep]="hourStep"
                  [instance]="instance"
                  [renderElementOnly]="true"
                  [minuteStep]="minuteStep"
                  (selectedEvent)="onTime($event)"
                  class="ml-3 formio-time"
                  *ngIf="enableTime"
          >
          </mat-formio-time>
        </mat-card>
      </div>
    </div>
  `,
                styles: [`.calendar, .formio-time {
      padding: 16px;
      background-color: white;
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    }
    .formio-time {
      display: flex;
    }
    `]
            },] }
];
MaterialCalendarComponent.propDecorators = {
    time: [{ type: ViewChild, args: ['time',] }],
    enableDate: [{ type: Input }],
    enableTime: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateFilter: [{ type: Input }],
    hourStep: [{ type: Input }],
    minuteStep: [{ type: Input }],
    timeSelectEvent: [{ type: Output }],
    dateSelectEvent: [{ type: Output }]
};

var LabelPositions;
(function (LabelPositions) {
    LabelPositions["RIGHT_RIGHT"] = "right-right";
    LabelPositions["RIGHT_LEFT"] = "right-left";
    LabelPositions["LEFT_LEFT"] = "left-left";
    LabelPositions["LEFT_RIGHT"] = "left-right";
    LabelPositions["BOTTOM"] = "bottom";
    LabelPositions["TOP"] = "top";
})(LabelPositions || (LabelPositions = {}));

class FormioFormFieldComponent {
    constructor() {
        this.labelPositions = LabelPositions;
        this.renderTopLabel = false;
        this.showDescription = true;
        this.renderElementOnly = false;
    }
    set instance(instance) {
        this._instance = instance;
        if (instance) {
            this.componentTemplateContext = { $implicit: this.hasLabel(['top']) };
        }
    }
    get instance() {
        return this._instance;
    }
    hasLabel(labelPositions) {
        const { component } = this.instance;
        const hasNoLabel = !component.label || component.hideLabel;
        const labelPositionIsNotSpecified = !labelPositions ||
            !labelPositions.length ||
            !component.labelPosition;
        if (hasNoLabel || labelPositionIsNotSpecified || this.renderElementOnly) {
            return false;
        }
        if (labelPositions.includes(component.labelPosition)) {
            return true;
        }
    }
}
FormioFormFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-form-field',
                template: "<div class=\"mat-formio-component-wrapper\" *ngIf=\"instance && !renderElementOnly\"\n     [ngClass]=\"{\n        'mat-formio-label-right': hasLabel([labelPositions.RIGHT_RIGHT, labelPositions.RIGHT_LEFT]),\n        'mat-formio-label-left': hasLabel([labelPositions.LEFT_LEFT, labelPositions.LEFT_RIGHT])\n     }\"\n>\n  <span *ngIf=\"renderTopLabel && hasLabel([labelPositions.TOP])\"\n        class=\"mat-formio-label\"\n        [ngClass]=\"{\n          'mat-formio-label-align-right': hasLabel([labelPositions.LEFT_RIGHT, labelPositions.RIGHT_RIGHT]),\n          'mat-formio-label-align-left': hasLabel([labelPositions.LEFT_LEFT, labelPositions.RIGHT_LEFT])\n        }\"\n  >\n    <ng-container *ngTemplateOutlet=\"labelTemplate || defaultLabel\"></ng-container>\n  </span>\n\n  <div class=\"mat-formio-component\" *ngTemplateOutlet=\"componentTemplate; context: componentTemplateContext\"></div>\n\n  <span *ngIf=\"hasLabel([\n                          labelPositions.BOTTOM,\n                          labelPositions.RIGHT_RIGHT,\n                          labelPositions.RIGHT_LEFT,\n                          labelPositions.LEFT_LEFT,\n                          labelPositions.LEFT_RIGHT\n                        ])\"\n        class=\"mat-formio-label\"\n        [ngClass]=\"{\n          'mat-formio-label-align-right': hasLabel([labelPositions.LEFT_RIGHT, labelPositions.RIGHT_RIGHT]),\n          'mat-formio-label-align-left': hasLabel([labelPositions.LEFT_LEFT, labelPositions.RIGHT_LEFT])\n        }\"\n  >\n    <ng-container *ngTemplateOutlet=\"labelTemplate || defaultLabel\"></ng-container>\n  </span>\n\n  <mat-hint *ngIf=\"showDescription && instance.component.description\" class=\"mat-formio-component-description\">\n    {{ instance.component.description }}\n  </mat-hint>\n</div>\n\n<div class=\"mat-formio-component-wrapper\" *ngIf=\"renderElementOnly\">\n  <div class=\"mat-formio-component\" *ngTemplateOutlet=\"componentTemplate; context: componentTemplateContext\"></div>\n</div>\n\n<ng-template #defaultLabel>\n  <mat-label>\n    <span style=\"display: block;\"\n          [instance]=\"instance\" matFormioLabel>\n    </span>\n  </mat-label>\n</ng-template>\n",
                styles: [".mat-formio-component-description{-ms-grid-column:1;-ms-grid-row:2;display:block;grid-area:description}.mat-formio-component-wrapper.mat-formio-label-left>.mat-formio-component-description{-ms-grid-column:2;-ms-grid-row:2}.mat-formio-component{-ms-grid-column:1;-ms-grid-row:1;grid-area:component}.mat-formio-component-wrapper.mat-formio-label-left>.mat-formio-component{-ms-grid-column:2;-ms-grid-row:1}.mat-formio-label{-ms-grid-column:2;-ms-grid-row:1;-ms-grid-row-span:2;grid-area:label}.mat-formio-component-wrapper.mat-formio-label-left>.mat-formio-label{-ms-grid-column:1;-ms-grid-row:1;-ms-grid-row-span:2}.mat-formio-label.mat-formio-label-align-right{margin-left:auto}.mat-formio-label.mat-formio-label-align-left{margin-right:auto}.mat-formio-component-wrapper.mat-formio-label-left,.mat-formio-component-wrapper.mat-formio-label-right{-ms-grid-columns:auto auto;display:-ms-grid;display:grid;grid-column-gap:1em;grid-template-columns:auto auto}.mat-formio-component-wrapper.mat-formio-label-right{grid-template-areas:\"component label\" \"description label\"}.mat-formio-component-wrapper.mat-formio-label-left{grid-template-areas:\"label component\" \"label description\"}"]
            },] }
];
FormioFormFieldComponent.propDecorators = {
    labelTemplate: [{ type: Input }],
    renderTopLabel: [{ type: Input }],
    showDescription: [{ type: Input }],
    renderElementOnly: [{ type: Input }],
    instance: [{ type: Input, args: ['instance',] }],
    componentTemplate: [{ type: Input }]
};

class LabelComponent {
}
LabelComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'span[matFormioLabel]',
                template: "<ng-container *ngIf=\"instance\">\n  {{ instance.component.label }}<span class=\"required-star\" *ngIf=\"instance.component.validate.required\">*</span>\n  <mat-icon *ngIf=\"instance.component.tooltip\" style=\"font-size: 1rem;\"\n            matTooltip=\"{{ instance.component.tooltip }}\" matSuffix\n  >\n    info\n  </mat-icon>\n</ng-container>\n",
                styles: [":host{display:block;pointer-events:all}.required-star{color:red;font-size:.8rem;margin-left:.2rem;vertical-align:top}"]
            },] }
];
LabelComponent.propDecorators = {
    instance: [{ type: Input }]
};

class MaskDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.formatValue(value);
    }
    formatValue(value) {
        if (value !== null) {
            this.elementRef.nativeElement.value = this.format(value);
        }
        else {
            this.elementRef.nativeElement.value = '';
        }
    }
    _onChange(value) {
    }
    writeValue(value) {
        this._value = value;
        this.formatValue(this._value); // format Value
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched() {
    }
}
MaskDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[matMask]',
                providers: [
                    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MaskDirective },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MaskDirective),
                        multi: true,
                    }
                ]
            },] }
];
MaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
MaskDirective.propDecorators = {
    format: [{ type: Input, args: ['matMask',] }],
    value: [{ type: Input, args: ['value',] }]
};

class MatFormioModule {
    constructor() {
        initRenderer();
    }
}
MatFormioModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FormioComponent$1,
                    MaterialButtonComponent,
                    MaterialTextfieldComponent,
                    MaterialPasswordComponent,
                    MaterialUrlComponent,
                    MaterialEmailComponent,
                    MaterialPhoneNumberComponent,
                    MaterialNumberComponent,
                    MaterialCurrencyComponent,
                    MaterialDayComponent,
                    MaterialHiddenComponent,
                    MaterialHtmlComponent,
                    MaterialTagsComponent,
                    MaterialTextareaComponent,
                    MaterialColumnsComponent,
                    MaterialContainerComponent,
                    MaterialDataGridComponent,
                    MaterialEditGridComponent,
                    MaterialPanelComponent,
                    MaterialCheckboxComponent,
                    MaterialFieldsetComponent,
                    MaterialContentComponent,
                    MaterialSignatureComponent,
                    MaterialSurveyComponent,
                    MaterialSelectBoxesComponent,
                    MaterialRadioComponent,
                    MaterialSelectComponent,
                    MaterialTabsComponent,
                    MaterialTableComponent,
                    MaterialDateComponent,
                    MaterialWellComponent,
                    MaterialWizardComponent,
                    MaterialComponent,
                    MaterialNestedComponent,
                    MaterialTimeComponent,
                    MaterialCalendarComponent,
                    FormioFormFieldComponent,
                    LabelComponent,
                    MaskDirective
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    FlexLayoutModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatSelectModule,
                    MatListModule,
                    MatChipsModule,
                    MatExpansionModule,
                    MatButtonModule,
                    MatCardModule,
                    MatStepperModule,
                    MatTabsModule,
                    MatTableModule,
                    MatNativeDateModule,
                    MatDatepickerModule,
                    MatProgressSpinnerModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatMenuModule,
                    DragDropModule
                ],
                exports: [
                    FormioComponent$1,
                    FlexLayoutModule,
                    MatInputModule,
                    MatFormFieldModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatSelectModule,
                    MatListModule,
                    MatChipsModule,
                    MatExpansionModule,
                    MatButtonModule,
                    MatCardModule,
                    MatTabsModule,
                    MatTableModule,
                    MatNativeDateModule,
                    MatDatepickerModule,
                    MatProgressSpinnerModule,
                    MatTooltipModule,
                    MatIconModule
                ],
                entryComponents: [
                    MaterialButtonComponent,
                    MaterialTextfieldComponent,
                    MaterialPasswordComponent,
                    MaterialUrlComponent,
                    MaterialEmailComponent,
                    MaterialPhoneNumberComponent,
                    MaterialNumberComponent,
                    MaterialCurrencyComponent,
                    MaterialDayComponent,
                    MaterialHiddenComponent,
                    MaterialHtmlComponent,
                    MaterialTagsComponent,
                    MaterialTextareaComponent,
                    MaterialColumnsComponent,
                    MaterialContainerComponent,
                    MaterialDataGridComponent,
                    MaterialEditGridComponent,
                    MaterialPanelComponent,
                    MaterialCheckboxComponent,
                    MaterialFieldsetComponent,
                    MaterialContentComponent,
                    MaterialSignatureComponent,
                    MaterialSurveyComponent,
                    MaterialSelectBoxesComponent,
                    MaterialRadioComponent,
                    MaterialSelectComponent,
                    MaterialTabsComponent,
                    MaterialTableComponent,
                    MaterialDateComponent,
                    MaterialWellComponent,
                    MaterialComponent,
                    MaterialNestedComponent,
                    MaterialTimeComponent,
                    MaterialWizardComponent
                ],
                providers: []
            },] }
];
MatFormioModule.ctorParameters = () => [];

/*
 * Public API Surface of angular-material-formio
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Components$1 as Components, Form, Formio, FormioComponent$1 as FormioComponent, MatFormioModule, MaterialButtonComponent, MaterialCheckboxComponent, MaterialColumnsComponent, MaterialComponent, MaterialContainerComponent, MaterialContentComponent, MaterialCurrencyComponent, MaterialDataGridComponent, MaterialDateComponent, MaterialDayComponent, MaterialEditGridComponent, MaterialEmailComponent, MaterialFieldsetComponent, MaterialHiddenComponent, MaterialHtmlComponent, MaterialNestedComponent, MaterialNumberComponent, MaterialPanelComponent, MaterialPasswordComponent, MaterialPhoneNumberComponent, MaterialRadioComponent, MaterialSelectBoxesComponent, MaterialSelectComponent, MaterialSignatureComponent, MaterialSurveyComponent, MaterialTableComponent, MaterialTabsComponent, MaterialTagsComponent, MaterialTextareaComponent, MaterialTextfieldComponent, MaterialTimeComponent, MaterialUrlComponent, MaterialWellComponent, Utils, initRenderer, registerComponent, TEXTFIELD_TEMPLATE as ɵa, MaterialWizardComponent as ɵb, MaterialCalendarComponent as ɵc, FormioFormFieldComponent as ɵd, LabelComponent as ɵe, MaskDirective as ɵf };
//# sourceMappingURL=formio-angular-material.js.map
