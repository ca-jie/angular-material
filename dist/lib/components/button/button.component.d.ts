import ButtonComponent from 'formiojs/components/button/Button.js';
import { MaterialComponent } from '../MaterialComponent';
import { AngularButtonsThemes } from '../../const/ButtonsThemes';
export declare class MaterialButtonComponent extends MaterialComponent {
    loading: boolean;
    done: boolean;
    error: boolean;
    disabled: boolean;
    clicked: boolean;
    get color(): AngularButtonsThemes;
    get angularButtonTheme(): "" | AngularButtonsThemes;
    get buttonClass(): string;
    onClick(event: any): void;
    getValue(): boolean;
    setState(loading: any, error: any, done: any): void;
    getIconFontSet(icon: string): string;
    getIconName(icon: string): string;
    setInstance(instance: any): void;
}
export { ButtonComponent };
