import { Component } from '@angular/core';
import { MaterialTextfieldComponent, TEXTFIELD_TEMPLATE } from '../textfield/textfield.component';
import UrlComponent from 'formiojs/components/url/Url.js';
export class MaterialUrlComponent extends MaterialTextfieldComponent {
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
export { UrlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91cmwvdXJsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xHLE9BQU8sWUFBWSxNQUFNLGdDQUFnQyxDQUFDO0FBSzFELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSwwQkFBMEI7SUFKcEU7O1FBS1MsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDOzs7WUFOQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7QUFJRCxZQUFZLENBQUMsaUJBQWlCLEdBQUcsb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbFRleHRmaWVsZENvbXBvbmVudCwgVEVYVEZJRUxEX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGV4dGZpZWxkL3RleHRmaWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IFVybENvbXBvbmVudCBmcm9tICdmb3JtaW9qcy9jb21wb25lbnRzL3VybC9VcmwuanMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby11cmwnLFxuICB0ZW1wbGF0ZTogVEVYVEZJRUxEX1RFTVBMQVRFXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsVXJsQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxUZXh0ZmllbGRDb21wb25lbnQge1xuICBwdWJsaWMgaW5wdXRUeXBlID0gJ3VybCc7XG59XG5VcmxDb21wb25lbnQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbFVybENvbXBvbmVudDtcbmV4cG9ydCB7IFVybENvbXBvbmVudCB9O1xuIl19