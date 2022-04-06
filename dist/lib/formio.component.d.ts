import { ChangeDetectorRef, ViewContainerRef, ComponentFactoryResolver, NgZone } from '@angular/core';
import { FormioAppConfig, FormioBaseComponent } from '@formio/angular';
export declare class FormioComponent extends FormioBaseComponent {
    private resolver;
    private cd;
    ngZone: NgZone;
    config: FormioAppConfig;
    formioViewContainer: ViewContainerRef;
    constructor(resolver: ComponentFactoryResolver, cd: ChangeDetectorRef, ngZone: NgZone, config: FormioAppConfig);
    getRendererOptions(): any;
    createRenderer(): any;
}
