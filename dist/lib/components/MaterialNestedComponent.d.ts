import { AfterViewInit, QueryList, ViewContainerRef } from '@angular/core';
import { MaterialComponent } from './MaterialComponent';
export declare class MaterialNestedComponent extends MaterialComponent implements AfterViewInit {
    viewContainers: any;
    components: QueryList<ViewContainerRef>;
    setInstance(instance: any): void;
    renderComponents(): void;
    render(): void;
    ngAfterViewInit(): void;
}
