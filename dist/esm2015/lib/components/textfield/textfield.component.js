import { Component } from '@angular/core';
import TextFieldComponent from 'formiojs/components/textfield/TextField.js';
import { MaterialComponent } from '../MaterialComponent';
export const TEXTFIELD_TEMPLATE = `
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
export class MaterialTextfieldComponent extends MaterialComponent {
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
export { TextFieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90ZXh0ZmllbGQvdGV4dGZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLGtCQUFrQixNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E4QmpDLENBQUM7QUFNRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsaUJBQWlCO0lBSmpFOztRQUtTLGNBQVMsR0FBRyxNQUFNLENBQUM7SUF3RDVCLENBQUM7SUF0REMsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUMxRCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsTUFBTSxFQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUUvRCxJQUFJLGFBQWEsSUFBSSxhQUFhLEVBQUU7WUFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLGFBQWEsQ0FBQztTQUNqRjthQUFNLElBQUksYUFBYSxFQUFFO1lBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sYUFBYSxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkYsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsc0JBQXNCO1FBQ3BCLE1BQU0sV0FBVyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RyxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ25FLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQ0k7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtZQUN2RCxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFekMsS0FBSyxNQUFNLEdBQUcsSUFBSSxRQUFRLEVBQUU7Z0JBQzFCLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMvRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFDcEM7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOztBQTJERCxrQkFBa0IsQ0FBQyxpQkFBaUIsR0FBRywwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgVGV4dEZpZWxkQ29tcG9uZW50IGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvdGV4dGZpZWxkL1RleHRGaWVsZC5qcyc7XG5pbXBvcnQgeyBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL01hdGVyaWFsQ29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFRFWFRGSUVMRF9URU1QTEFURSA9IGBcbiAgPG1hdC1mb3JtaW8tZm9ybS1maWVsZCBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIiBbY29tcG9uZW50VGVtcGxhdGVdPVwiY29tcG9uZW50VGVtcGxhdGVcIj48L21hdC1mb3JtaW8tZm9ybS1maWVsZD5cbiAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRUZW1wbGF0ZSBsZXQtaGFzTGFiZWw+XG4gICAgPG1hdC1mb3JtLWZpZWxkIFthcHBlYXJhbmNlXT1cImdldEZvcm1GaWVsZEFwcGVhcmFuY2UoKVwiIGZ4RmlsbD5cblxuICAgICAgPG1hdC1sYWJlbCAqbmdJZj1cImhhc0xhYmVsXCI+XG4gICAgICAgICAgPHNwYW4gW2luc3RhbmNlXT1cImluc3RhbmNlXCIgbWF0Rm9ybWlvTGFiZWw+PC9zcGFuPlxuICAgICAgPC9tYXQtbGFiZWw+XG5cbiAgICAgIDxzcGFuICpuZ0lmPVwiaW5zdGFuY2UuY29tcG9uZW50LnByZWZpeCAmJiBpbnN0YW5jZS50eXBlICE9PSAnY3VycmVuY3knXCJcbiAgICAgICAgICAgIG1hdFByZWZpeFxuICAgICAgPlxuICAgICAgICB7eyBpbnN0YW5jZS5jb21wb25lbnQucHJlZml4IH19Jm5ic3A7XG4gICAgICA8L3NwYW4+XG4gICAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ7eyBpbnB1dFR5cGUgfX1cIlxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImluc3RhbmNlLmNvbXBvbmVudC5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAoaW5wdXQpPVwib25DaGFuZ2UoKVwiICNpbnB1dFxuICAgICAgPlxuICAgICAgPHNwYW4gKm5nSWY9XCJpbnN0YW5jZS5jb21wb25lbnQuc3VmZml4XCIgbWF0U3VmZml4Pnt7IGluc3RhbmNlLmNvbXBvbmVudC5zdWZmaXggfX08L3NwYW4+XG5cbiAgICAgIDxtYXQtaGludCAqbmdJZj1cImluc3RhbmNlLmNvbXBvbmVudC5zaG93V29yZENvdW50IHx8IGluc3RhbmNlLmNvbXBvbmVudC5zaG93Q2hhckNvdW50XCI+XG4gICAgICAgIHt7IGdldEhpbnQoKSB9fVxuICAgICAgPC9tYXQtaGludD5cblxuICAgICAgPGJyLz5cbiAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpc0Vycm9yKClcIiA+e3sgZ2V0RXJyb3JNZXNzYWdlKCkgfX08L21hdC1lcnJvcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L25nLXRlbXBsYXRlPlxuYDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby10ZXh0ZmllbGQnLFxuICB0ZW1wbGF0ZTogVEVYVEZJRUxEX1RFTVBMQVRFXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsVGV4dGZpZWxkQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHVibGljIGlucHV0VHlwZSA9ICd0ZXh0JztcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UgJiYgdGhpcy5jb250cm9sICYmIHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldEhpbnQoKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlIHx8ICF0aGlzLmNvbnRyb2wgfHwgIXRoaXMuY29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHtzaG93V29yZENvdW50LCBzaG93Q2hhckNvdW50fSA9IHRoaXMuaW5zdGFuY2UuY29tcG9uZW50O1xuXG4gICAgaWYgKHNob3dXb3JkQ291bnQgJiYgc2hvd0NoYXJDb3VudCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMuZ2V0V29yZHNDb3VudCgpfSB3b3JkcywgJHt0aGlzLmNvbnRyb2wudmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzYDtcbiAgICB9IGVsc2UgaWYgKHNob3dXb3JkQ291bnQpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLmdldFdvcmRzQ291bnQoKX0gd29yZHNgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5jb250cm9sLnZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2A7XG4gICAgfVxuICB9XG5cbiAgZ2V0V29yZHNDb3VudCgpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5jb250cm9sLnZhbHVlID8gdGhpcy5jb250cm9sLnZhbHVlLm1hdGNoKC9bXFx3XFxk4oCZJy1dKy9naSkgOiBbXTtcbiAgICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXMubGVuZ3RoIDogMDtcbiAgfVxuXG4gIGdldEZvcm1GaWVsZEFwcGVhcmFuY2UoKSB7XG4gICAgY29uc3QgYXBwZWFyYW5jZXMgPSBbJ2xlZ2FjeScsICdzdGFuZGFyZCcsICdmaWxsJywgJ291dGxpbmUnXTtcbiAgICBjb25zdCBhcHBlYXJhbmNlID0gdGhpcy5pbnN0YW5jZS5jb21wb25lbnQuYXBwZWFyYW5jZSA/IHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LmFwcGVhcmFuY2UudG9Mb3dlckNhc2UoKSA6ICcnO1xuICAgIHJldHVybiBhcHBlYXJhbmNlcy5pbmNsdWRlcyhhcHBlYXJhbmNlKSA/IGFwcGVhcmFuY2UgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBpc0Vycm9yKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLmVycm9yKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuc2V0RXJyb3JzKHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LnZhbGlkYXRlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXRFcnJvck1lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UuZXJyb3IgJiYgdGhpcy5pbnN0YW5jZS5lcnJvci5tZXNzYWdlcykge1xuICAgICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5pbnN0YW5jZS5lcnJvcjtcblxuICAgICAgZm9yIChjb25zdCBtc2cgb2YgbWVzc2FnZXMpIHtcbiAgICAgICAgaWYgKG1zZy5jb250ZXh0ICYmIHRoaXMuY29udHJvbC5oYXNFcnJvcihtc2cuY29udGV4dC52YWxpZGF0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuVGV4dEZpZWxkQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxUZXh0ZmllbGRDb21wb25lbnQ7XG5leHBvcnQgeyBUZXh0RmllbGRDb21wb25lbnQgfTtcbiJdfQ==