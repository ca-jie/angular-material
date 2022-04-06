import { Component } from '@angular/core';
import ButtonComponent from 'formiojs/components/button/Button.js';
import { MaterialComponent } from '../MaterialComponent';
import { AngularButtonsThemes, ButtonsThemes } from '../../const/ButtonsThemes';
export class MaterialButtonComponent extends MaterialComponent {
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
export { ButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sZUFBZSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU9oRixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsaUJBQWlCO0lBTDlEOztRQU1TLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUE2RXpCLENBQUM7SUEzRUMsSUFBSSxLQUFLO1FBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7U0FDbEM7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDdEMsT0FBTyxLQUFLLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNyQyxLQUFLLGFBQWEsQ0FBQyxPQUFPO2dCQUN4QixPQUFPLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztZQUV0QyxLQUFLLGFBQWEsQ0FBQyxPQUFPO2dCQUN4QixPQUFPLG9CQUFvQixDQUFDLE1BQU0sQ0FB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Q0FBQyxDQUFDLENBQUM7UUFDcEUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0csSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQXRGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNm9CQUFzQzs7YUFFdkM7O0FBb0ZELGVBQWUsQ0FBQyxpQkFBaUIsR0FBRyx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBCdXR0b25Db21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9idXR0b24vQnV0dG9uLmpzJztcbmltcG9ydCB7IE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vTWF0ZXJpYWxDb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ndWxhckJ1dHRvbnNUaGVtZXMsIEJ1dHRvbnNUaGVtZXMgfSBmcm9tICcuLi8uLi9jb25zdC9CdXR0b25zVGhlbWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbEJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIE1hdGVyaWFsQ29tcG9uZW50IHtcbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIGRvbmUgPSBmYWxzZTtcbiAgcHVibGljIGVycm9yID0gZmFsc2U7XG4gIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICBwdWJsaWMgY2xpY2tlZCA9IGZhbHNlO1xuXG4gIGdldCBjb2xvcigpIHtcbiAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgcmV0dXJuIEFuZ3VsYXJCdXR0b25zVGhlbWVzLldBUk47XG4gICAgfVxuICAgIGNvbnN0IHRoZW1lID0gdGhpcy5hbmd1bGFyQnV0dG9uVGhlbWU7XG4gICAgcmV0dXJuIHRoZW1lIHx8IEFuZ3VsYXJCdXR0b25zVGhlbWVzLlBSSU1BUlk7XG4gIH1cblxuICBnZXQgYW5ndWxhckJ1dHRvblRoZW1lKCkge1xuICAgIHN3aXRjaCAodGhpcy5pbnN0YW5jZS5jb21wb25lbnQudGhlbWUpIHtcbiAgICAgIGNhc2UgQnV0dG9uc1RoZW1lcy5QUklNQVJZOlxuICAgICAgICByZXR1cm4gQW5ndWxhckJ1dHRvbnNUaGVtZXMuUFJJTUFSWTtcblxuICAgICAgY2FzZSBCdXR0b25zVGhlbWVzLldBUk5JTkc6XG4gICAgICAgIHJldHVybiBBbmd1bGFyQnV0dG9uc1RoZW1lcy5BQ0NFTlQ7XG5cbiAgICAgIGNhc2UgQnV0dG9uc1RoZW1lcy5EQU5HRVI6XG4gICAgICAgIHJldHVybiBBbmd1bGFyQnV0dG9uc1RoZW1lcy5XQVJOO1xuXG4gICAgICBjYXNlIEJ1dHRvbnNUaGVtZXMuU0VDT05EQVJZOlxuICAgICAgICByZXR1cm4gQW5ndWxhckJ1dHRvbnNUaGVtZXMuQkFTSUM7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBnZXQgYnV0dG9uQ2xhc3MoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LmJsb2NrID8gJ21hdC1mb3JtaW8tYnV0dG9uLWJsb2NrJyA6ICcnO1xuICAgIGNsYXNzTmFtZSArPSB0aGlzLmluc3RhbmNlLmNvbXBvbmVudC5zaXplID8gYCBtYXQtZm9ybWlvLWJ1dHRvbi0ke3RoaXMuaW5zdGFuY2UuY29tcG9uZW50LnNpemV9YCA6ICcnO1xuICAgIGNsYXNzTmFtZSArPSAhdGhpcy5hbmd1bGFyQnV0dG9uVGhlbWUgPyBgIG1hdC1mb3JtaW8tdGhlbWUtJHt0aGlzLmluc3RhbmNlLmNvbXBvbmVudC50aGVtZX1gIDogJyc7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5zdGFuY2Uub25DbGljayhldmVudCk7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGlja2VkO1xuICB9XG5cbiAgc2V0U3RhdGUobG9hZGluZywgZXJyb3IsIGRvbmUpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBsb2FkaW5nO1xuICAgIHRoaXMuZG9uZSA9IGRvbmU7XG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICB9XG5cbiAgZ2V0SWNvbkZvbnRTZXQoaWNvbjogc3RyaW5nKSB7XG4gICAgY29uc3QgZm9udFNldCA9IGljb24uc3BsaXQoJyAnKVswXTtcbiAgICByZXR1cm4gZm9udFNldDtcbiAgfVxuXG4gIGdldEljb25OYW1lKGljb246IHN0cmluZykge1xuICAgIHJldHVybiBpY29uLnJlcGxhY2UodGhpcy5nZXRJY29uRm9udFNldChpY29uKSwgJycpO1xuICB9XG5cbiAgc2V0SW5zdGFuY2UoaW5zdGFuY2UpIHtcbiAgICBjb25zdCByZXRWYWwgPSBzdXBlci5zZXRJbnN0YW5jZShpbnN0YW5jZSk7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGluc3RhbmNlLnNob3VsZERpc2FibGVkO1xuICAgIGluc3RhbmNlLm9uKCdzdWJtaXRCdXR0b24nLCAoKSA9PiB0aGlzLnNldFN0YXRlKHRydWUsIGZhbHNlLCBmYWxzZSkpO1xuICAgIGluc3RhbmNlLm9uKCdzdWJtaXREb25lJywgKCkgPT4gdGhpcy5zZXRTdGF0ZShmYWxzZSwgZmFsc2UsIHRydWUpKTtcbiAgICBpbnN0YW5jZS5vbignc3VibWl0RXJyb3InLCAoKSA9PiB0aGlzLnNldFN0YXRlKGZhbHNlLCB0cnVlLCBmYWxzZSkpO1xuICAgIGluc3RhbmNlLm9uKCdyZXF1ZXN0QnV0dG9uJywgKCkgPT4gdGhpcy5zZXRTdGF0ZSh0cnVlLCBmYWxzZSwgZmFsc2UpKTtcbiAgICBpbnN0YW5jZS5vbigncmVxdWVzdERvbmUnLCAoKSA9PiB0aGlzLnNldFN0YXRlKGZhbHNlLCBmYWxzZSwgdHJ1ZSkpO1xuICAgIGluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmluc3RhbmNlLnNob3VsZERpc2FibGVkIHx8ICh0aGlzLmluc3RhbmNlLmNvbXBvbmVudC5kaXNhYmxlT25JbnZhbGlkICYmICFldmVudC5pc1ZhbGlkKTtcbiAgICAgIGlmIChldmVudC5pc1ZhbGlkKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldFZhbDtcbiAgfVxufVxuQnV0dG9uQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxCdXR0b25Db21wb25lbnQ7XG5leHBvcnQgeyBCdXR0b25Db21wb25lbnQgfTtcbiJdfQ==