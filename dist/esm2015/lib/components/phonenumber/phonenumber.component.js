import { Component } from '@angular/core';
import { MaterialTextfieldComponent, TEXTFIELD_TEMPLATE } from '../textfield/textfield.component';
import PhoneNumberComponent from 'formiojs/components/phonenumber/PhoneNumber.js';
export class MaterialPhoneNumberComponent extends MaterialTextfieldComponent {
    constructor() {
        super(...arguments);
        this.inputType = 'text';
    }
}
MaterialPhoneNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-phonenumber',
                template: TEXTFIELD_TEMPLATE
            },] }
];
PhoneNumberComponent.MaterialComponent = MaterialPhoneNumberComponent;
export { PhoneNumberComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmVudW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Bob25lbnVtYmVyL3Bob25lbnVtYmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xHLE9BQU8sb0JBQW9CLE1BQU0sZ0RBQWdELENBQUM7QUFLbEYsTUFBTSxPQUFPLDRCQUE2QixTQUFRLDBCQUEwQjtJQUo1RTs7UUFLUyxjQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzVCLENBQUM7OztZQU5BLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOztBQUlELG9CQUFvQixDQUFDLGlCQUFpQixHQUFHLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbFRleHRmaWVsZENvbXBvbmVudCwgVEVYVEZJRUxEX1RFTVBMQVRFIH0gZnJvbSAnLi4vdGV4dGZpZWxkL3RleHRmaWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IFBob25lTnVtYmVyQ29tcG9uZW50IGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvcGhvbmVudW1iZXIvUGhvbmVOdW1iZXIuanMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby1waG9uZW51bWJlcicsXG4gIHRlbXBsYXRlOiBURVhURklFTERfVEVNUExBVEVcbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxQaG9uZU51bWJlckNvbXBvbmVudCBleHRlbmRzIE1hdGVyaWFsVGV4dGZpZWxkQ29tcG9uZW50IHtcbiAgcHVibGljIGlucHV0VHlwZSA9ICd0ZXh0Jztcbn1cblBob25lTnVtYmVyQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxQaG9uZU51bWJlckNvbXBvbmVudDtcbmV4cG9ydCB7IFBob25lTnVtYmVyQ29tcG9uZW50IH07XG4iXX0=