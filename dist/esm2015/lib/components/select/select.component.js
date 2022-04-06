import { Component } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import SelectComponent from 'formiojs/components/select/Select.js';
import _ from 'lodash';
export class MaterialSelectComponent extends MaterialComponent {
    setInstance(instance) {
        super.setInstance(instance);
        this.instance.triggerUpdate();
    }
    ngOnInit() {
        this.selectOptions = new Promise((resolve) => {
            this.selectOptionsResolve = resolve;
        });
        this.selectOptions.then((options) => {
            this.filteredOptionsLength = options.length;
        });
        this.filteredOptions = this.selectOptions;
    }
    onFilter(value) {
        this.filteredOptions = this.selectOptions.then((options) => {
            const filtered = options.filter((option) => option.label.indexOf(value) !== -1);
            this.filteredOptionsLength = filtered.length;
            return filtered;
        });
    }
    compareObjects(o1, o2) {
        return _.isEqual(o1, o2);
    }
}
MaterialSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-select',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-form-field fxFill>

        <mat-label *ngIf="hasLabel">
          <span [instance]="instance" matFormioLabel></span>
        </mat-label>

        <span *ngIf="instance.component.prefix" matPrefix>
          {{ instance.component.prefix }}&nbsp;
        </span>
        <mat-select
                [multiple]="instance.component.multiple"
                [formControl]="control"
                [placeholder]="instance.component.placeholder"
                (selectionChange)="onChange()"
                [compareWith]="compareObjects"
        >
          <div class="mat-option">
            <input class="mat-input-element" placeholder="Type to search" (input)="onFilter($event.target.value)">
          </div>
          <mat-option *ngIf="!filteredOptionsLength" disabled>
            <span>Nothing was found</span>
          </mat-option>
          <mat-option *ngFor="let option of filteredOptions | async" [value]="option.value">
            <span [innerHTML]="option.label"></span>
          </mat-option>
        </mat-select>

        <span *ngIf="instance.component.suffix" matSuffix>
          {{ instance.component.suffix }}
        </span>
        <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
      </mat-form-field>
    </ng-template>
  `
            },] }
];
SelectComponent.MaterialComponent = MaterialSelectComponent;
// Make sure we detect changes when new items make their way into the select dropdown.
const setItems = SelectComponent.prototype.setItems;
SelectComponent.prototype.setItems = function (...args) {
    setItems.call(this, ...args);
    if (this.materialComponent && this.materialComponent.selectOptionsResolve) {
        this.materialComponent.selectOptionsResolve(this.selectOptions);
    }
};
export { SelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sZUFBZSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQXlDdkIsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGlCQUFpQjtJQU81RCxXQUFXLENBQUMsUUFBYTtRQUN2QixLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE9BQU8sQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3pELE1BQU0sUUFBUSxHQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDN0MsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxDQUFDLEVBQU8sRUFBRSxFQUFPO1FBQzdCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DVDthQUNGOztBQW9DRCxlQUFlLENBQUMsaUJBQWlCLEdBQUcsdUJBQXVCLENBQUM7QUFFNUQsc0ZBQXNGO0FBQ3RGLE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0FBQ3BELGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVMsR0FBRyxJQUFJO0lBQ25ELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDN0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFO1FBQ3pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDakU7QUFDSCxDQUFDLENBQUM7QUFFRixPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9NYXRlcmlhbENvbXBvbmVudCc7XG5pbXBvcnQgU2VsZWN0Q29tcG9uZW50IGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdC5qcyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybWlvLWZvcm0tZmllbGQgW2luc3RhbmNlXT1cImluc3RhbmNlXCIgW2NvbXBvbmVudFRlbXBsYXRlXT1cImNvbXBvbmVudFRlbXBsYXRlXCI+PC9tYXQtZm9ybWlvLWZvcm0tZmllbGQ+XG4gICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRUZW1wbGF0ZSBsZXQtaGFzTGFiZWw+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgZnhGaWxsPlxuXG4gICAgICAgIDxtYXQtbGFiZWwgKm5nSWY9XCJoYXNMYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiIG1hdEZvcm1pb0xhYmVsPjwvc3Bhbj5cbiAgICAgICAgPC9tYXQtbGFiZWw+XG5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJpbnN0YW5jZS5jb21wb25lbnQucHJlZml4XCIgbWF0UHJlZml4PlxuICAgICAgICAgIHt7IGluc3RhbmNlLmNvbXBvbmVudC5wcmVmaXggfX0mbmJzcDtcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8bWF0LXNlbGVjdFxuICAgICAgICAgICAgICAgIFttdWx0aXBsZV09XCJpbnN0YW5jZS5jb21wb25lbnQubXVsdGlwbGVcIlxuICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiaW5zdGFuY2UuY29tcG9uZW50LnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uQ2hhbmdlKClcIlxuICAgICAgICAgICAgICAgIFtjb21wYXJlV2l0aF09XCJjb21wYXJlT2JqZWN0c1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0LW9wdGlvblwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWF0LWlucHV0LWVsZW1lbnRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgdG8gc2VhcmNoXCIgKGlucHV0KT1cIm9uRmlsdGVyKCRldmVudC50YXJnZXQudmFsdWUpXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nSWY9XCIhZmlsdGVyZWRPcHRpb25zTGVuZ3RoXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICA8c3Bhbj5Ob3RoaW5nIHdhcyBmb3VuZDwvc3Bhbj5cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWx0ZXJlZE9wdGlvbnMgfCBhc3luY1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj5cbiAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwib3B0aW9uLmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaW5zdGFuY2UuY29tcG9uZW50LnN1ZmZpeFwiIG1hdFN1ZmZpeD5cbiAgICAgICAgICB7eyBpbnN0YW5jZS5jb21wb25lbnQuc3VmZml4IH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImluc3RhbmNlLmVycm9yXCI+e3sgaW5zdGFuY2UuZXJyb3IubWVzc2FnZSB9fTwvbWF0LWVycm9yPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzZWxlY3RPcHRpb25zOiBQcm9taXNlPGFueVtdPjtcbiAgZmlsdGVyZWRPcHRpb25zOiBQcm9taXNlPGFueVtdPjtcbiAgZmlsdGVyZWRPcHRpb25zTGVuZ3RoOiBudW1iZXI7XG4gIFxuICBzZWxlY3RPcHRpb25zUmVzb2x2ZTogYW55O1xuXG4gIHNldEluc3RhbmNlKGluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlci5zZXRJbnN0YW5jZShpbnN0YW5jZSk7XG4gICAgdGhpcy5pbnN0YW5jZS50cmlnZ2VyVXBkYXRlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNlbGVjdE9wdGlvbnMgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RPcHRpb25zUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3RPcHRpb25zLnRoZW4oKG9wdGlvbnMpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zTGVuZ3RoID0gb3B0aW9ucy5sZW5ndGg7XG4gICAgfSlcblxuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5zZWxlY3RPcHRpb25zO1xuICB9XG5cbiAgb25GaWx0ZXIodmFsdWUpIHtcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuc2VsZWN0T3B0aW9ucy50aGVuKChvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9ICBvcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24ubGFiZWwuaW5kZXhPZih2YWx1ZSkgIT09IC0xKTtcbiAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zTGVuZ3RoID0gZmlsdGVyZWQubGVuZ3RoO1xuICAgICAgcmV0dXJuIGZpbHRlcmVkO1xuICAgIH0pXG4gIH1cblxuICBjb21wYXJlT2JqZWN0cyhvMTogYW55LCBvMjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIF8uaXNFcXVhbChvMSwgbzIpO1xuICB9XG59XG5TZWxlY3RDb21wb25lbnQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbFNlbGVjdENvbXBvbmVudDtcblxuLy8gTWFrZSBzdXJlIHdlIGRldGVjdCBjaGFuZ2VzIHdoZW4gbmV3IGl0ZW1zIG1ha2UgdGhlaXIgd2F5IGludG8gdGhlIHNlbGVjdCBkcm9wZG93bi5cbmNvbnN0IHNldEl0ZW1zID0gU2VsZWN0Q29tcG9uZW50LnByb3RvdHlwZS5zZXRJdGVtcztcblNlbGVjdENvbXBvbmVudC5wcm90b3R5cGUuc2V0SXRlbXMgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gIHNldEl0ZW1zLmNhbGwodGhpcywgLi4uYXJncyk7XG4gIGlmICh0aGlzLm1hdGVyaWFsQ29tcG9uZW50ICYmIHRoaXMubWF0ZXJpYWxDb21wb25lbnQuc2VsZWN0T3B0aW9uc1Jlc29sdmUpIHtcbiAgICB0aGlzLm1hdGVyaWFsQ29tcG9uZW50LnNlbGVjdE9wdGlvbnNSZXNvbHZlKHRoaXMuc2VsZWN0T3B0aW9ucyk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IFNlbGVjdENvbXBvbmVudCB9O1xuIl19