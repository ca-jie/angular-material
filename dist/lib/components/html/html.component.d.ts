import { AfterViewInit, ElementRef } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import HtmlComponent from 'formiojs/components/html/HTML.js';
export declare class MaterialHtmlComponent extends MaterialComponent implements AfterViewInit {
    htmlBody: ElementRef;
    ngAfterViewInit(): void;
}
export { HtmlComponent };
