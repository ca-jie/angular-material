import TagsComponent from 'formiojs/components/tags/Tags.js';
import { MaterialComponent } from '../MaterialComponent';
import { MatChipInputEvent } from '@angular/material/chips';
export declare class MaterialTagsComponent extends MaterialComponent {
    readonly separatorKeysCodes: number[];
    tags: string[];
    add(event: MatChipInputEvent): void;
    remove(index: any): void;
    getValue(): string | string[];
    setValue(value: any): void;
}
export { TagsComponent };
