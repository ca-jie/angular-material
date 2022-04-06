import { ElementRef, AfterViewInit } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import SignatureComponent from 'formiojs/components/signature/Signature.js';
export declare class MaterialSignatureComponent extends MaterialComponent implements AfterViewInit {
    signatureElement: ElementRef;
    renderComponents(): void;
    ngAfterViewInit(): void;
}
export { SignatureComponent };
