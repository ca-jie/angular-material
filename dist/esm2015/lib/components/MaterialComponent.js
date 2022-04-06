import { Component, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import FormioComponent from './Base';
import Validator from 'formiojs/validator/Validator.js';
import { FormioControl } from '../FormioControl';
import get from 'lodash/get';
export class MaterialComponent {
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
export { FormioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWF0ZXJpYWxDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvTWF0ZXJpYWxDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxlQUFlLE1BQU0sUUFBUSxDQUFDO0FBQ3JDLE9BQU8sU0FBUyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEdBQUcsTUFBTSxZQUFZLENBQUM7QUFNN0IsTUFBTSxPQUFPLGlCQUFpQjtJQUk1QixZQUFtQixPQUFtQixFQUFTLEdBQXNCO1FBQWxELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUQ1RCxZQUFPLEdBQWtCLElBQUksYUFBYSxFQUFFLENBQUM7SUFDa0IsQ0FBQztJQUV6RSxXQUFXLENBQUMsUUFBYTtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuQyxRQUFRLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFFBQVEs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bkpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsdUVBQXVFO2FBQ2xGOzs7WUFUb0MsVUFBVTtZQUFFLGlCQUFpQjs7O3VCQVcvRCxLQUFLO29CQUNMLFNBQVMsU0FBQyxPQUFPO3NCQUNqQixLQUFLOztBQStJUixlQUFlLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEZvcm1pb0NvbXBvbmVudCBmcm9tICcuL0Jhc2UnO1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICdmb3JtaW9qcy92YWxpZGF0b3IvVmFsaWRhdG9yLmpzJztcbmltcG9ydCB7IEZvcm1pb0NvbnRyb2wgfSBmcm9tICcuLi9Gb3JtaW9Db250cm9sJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tY29tcCcsXG4gIHRlbXBsYXRlOiAnPG1hdC1jYXJkPlVua25vd24gQ29tcG9uZW50OiB7eyBpbnN0YW5jZS5jb21wb25lbnQudHlwZSB9fTwvbWF0LWNhcmQ+J1xufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGluc3RhbmNlOiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIGNvbnRyb2w6IEZvcm1pb0NvbnRyb2wgPSBuZXcgRm9ybWlvQ29udHJvbCgpO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgc2V0SW5zdGFuY2UoaW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMuY29udHJvbC5zZXRJbnN0YW5jZShpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2UubWF0ZXJpYWxDb21wb25lbnQgPSB0aGlzO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICB0aGlzLmluc3RhbmNlLmRpc2FibGVkID0gdGhpcy5pbnN0YW5jZS5zaG91bGREaXNhYmxlZDtcbiAgICB0aGlzLnNldFZpc2libGUodGhpcy5pbnN0YW5jZS52aXNpYmxlKTtcbiAgICB0aGlzLnJlbmRlckNvbXBvbmVudHMoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRWYWxpZGF0ZU9uSW5pdCgpKSB7XG4gICAgICAgIHRoaXMuc3RvcmVGb3JtRGF0YSgpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlT25Jbml0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluc3RhbmNlLmNvbXBvbmVudC5kZWZhdWx0VmFsdWUgPyB0aGlzLnNldFZhbHVlKHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LmRlZmF1bHRWYWx1ZSkgOiAnJztcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZU9uSW5pdCgpIHtcbiAgICBjb25zdCB7a2V5fSA9IHRoaXMuaW5zdGFuY2UuY29tcG9uZW50O1xuICAgIGNvbnN0IHZhbGlkYXRpb25WYWx1ZSA9IHRoaXMuZ2V0Rm9ybVZhbHVlKHRoaXMuaW5zdGFuY2UucGF0aCk7XG5cbiAgICBpZiAodmFsaWRhdGlvblZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcmlzdGluZShmYWxzZSk7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uUmVzdWx0ID0gVmFsaWRhdG9yLmNoZWNrQ29tcG9uZW50KFxuICAgICAgdGhpcy5pbnN0YW5jZSxcbiAgICAgIHtba2V5XTogdmFsaWRhdGlvblZhbHVlfSxcbiAgICAgIHtba2V5XTogdmFsaWRhdGlvblZhbHVlfVxuICAgICk7XG5cbiAgICBpZiAodmFsaWRhdGlvblJlc3VsdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Q3VzdG9tVmFsaWRpdHkodmFsaWRhdGlvblJlc3VsdCwgZmFsc2UpO1xuICAgICAgaWYgKCEhdmFsaWRhdGlvblZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgc3RvcmVGb3JtRGF0YSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZS5wYXJlbnQgJiYgdGhpcy5pbnN0YW5jZS5wYXJlbnQuc3VibWlzc2lvbiAmJiB0aGlzLmluc3RhbmNlLnBhcmVudC5zdWJtaXNzaW9uLmRhdGEpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2Zvcm1EYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pbnN0YW5jZS5wYXJlbnQuc3VibWlzc2lvbi5kYXRhKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Rm9ybVZhbHVlKHBhdGgpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZm9ybURhdGEnKSk7XG5cbiAgICBpZiAoIWZvcm1EYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0KGZvcm1EYXRhLCBwYXRoKTtcbiAgfVxuXG4gIHJlbmRlckNvbXBvbmVudHMoKSB7fVxuXG4gIG9uQ2hhbmdlKGtlZXBJbnB1dFJhdz86IGJvb2xlYW4pIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmVtcHR5VmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50Lm1hc2sgJiYgdmFsdWUgJiYgIWtlZXBJbnB1dFJhdykge1xuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50Lm1hc2sudGV4dE1hc2tJbnB1dEVsZW1lbnQudXBkYXRlKHZhbHVlKTtcbiAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICAgICAgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgfVxuICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlVmFsdWUodmFsdWUsIHttb2RpZmllZDogdHJ1ZX0pO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWx1ZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGJlZm9yZVN1Ym1pdCgpIHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICB9XG5cbiAgaGFzRXJyb3IoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5pbnN0YW5jZSAmJiAhIXRoaXMuaW5zdGFuY2UuZXJyb3I7XG4gIH1cblxuICBzaG91bGRWYWxpZGF0ZU9uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5vcHRpb25zLnZhbGlkYXRlT25Jbml0XG4gICAgICB8fCB0aGlzLmluc3RhbmNlLnBhcmVudC5vcHRpb25zLnZhbGlkYXRlT25Jbml0O1xuICB9XG5cbiAgc2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbC5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBzZXRWaXNpYmxlKHZpc2libGUpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCAmJiB0aGlzLmluc3RhbmNlKSB7XG4gICAgICAvLyBBZGQgY3VzdG9tIGNsYXNzZXMgdG8gZWxlbWVudHMuXG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jb21wb25lbnQuY3VzdG9tQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmluc3RhbmNlLmNvbXBvbmVudC5jdXN0b21DbGFzcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgIC8vIFNldCB0aGUgaW5wdXQgbWFza3MuXG4gICAgICB0aGlzLmluc3RhbmNlLnNldElucHV0TWFzayh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5pbnN0YW5jZS5hZGRGb2N1c0JsdXJFdmVudHModGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuRm9ybWlvQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxDb21wb25lbnQ7XG5leHBvcnQgeyBGb3JtaW9Db21wb25lbnQgfTtcbiJdfQ==