import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MaterialComponent } from '../MaterialComponent';
import DayComponent from 'formiojs/components/day/Day.js';
import { momentDate } from 'formiojs/utils/utils.js';
DayComponent.prototype.getFieldValue = function (name) {
    return this.refs[name] ? this.refs[name].value : '';
};
export class MaterialDayComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.dayControl = new FormControl();
        this.monthControl = new FormControl();
        this.yearControl = new FormControl();
    }
    setInstance(instance) {
        // Add stub methods to match dom elements.
        this.dayControl.setAttribute = () => { };
        this.dayControl.removeAttribute = () => { };
        this.monthControl.setAttribute = () => { };
        this.monthControl.removeAttribute = () => { };
        this.yearControl.setAttribute = () => { };
        this.yearControl.removeAttribute = () => { };
        instance.refs = {
            day: this.dayControl,
            month: this.monthControl,
            year: this.yearControl
        };
        return super.setInstance(instance);
    }
    setDisabled(disabled) {
        if (disabled) {
            this.dayControl.disable();
            this.monthControl.disable();
            this.yearControl.disable();
        }
        else {
            this.dayControl.enable();
            this.monthControl.enable();
            this.yearControl.enable();
        }
    }
    getValue() {
        return this.instance.getDate();
    }
    setValue(value) {
        if (value) {
            this.dayControl.setValue(parseInt(momentDate(value).format('D')));
            this.monthControl.setValue(parseInt(momentDate(value).format('M')));
            this.yearControl.setValue(parseInt(momentDate(value).format('YYYY')));
        }
        this.instance.setValueAt(0, value);
    }
}
MaterialDayComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-day',
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-label *ngIf="hasLabel">
        <span [instance]="instance" matFormioLabel></span>
      </mat-label>
      <mat-form-field *ngIf="instance.dayFirst && instance.showDay">
        <mat-label *ngIf="!instance.component.hideInputLabels">Day</mat-label>
        <mat-select [formControl]="dayControl" (selectionChange)="onChange()" [required]="instance.dayRequired">
          <mat-option *ngFor="let day of instance.days" [value]="day.value">
            {{day.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field *ngIf="instance.showMonth">
        <mat-label *ngIf="!instance.component.hideInputLabels">Month</mat-label>
        <mat-select [formControl]="monthControl" (selectionChange)="onChange()" [required]="instance.monthRequired">
          <mat-option *ngFor="let month of instance.months" [value]="month.value">
            {{month.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field *ngIf="!instance.dayFirst && instance.showDay">
        <mat-label *ngIf="!instance.component.hideInputLabels">Day</mat-label>
        <mat-select [formControl]="dayControl" (selectionChange)="onChange()" [required]="instance.dayRequired">
          <mat-option *ngFor="let day of instance.days" [value]="day.value">
            {{day.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field *ngIf="instance.showYear">
        <mat-label *ngIf="!instance.component.hideInputLabels">Year</mat-label>
        <mat-select [formControl]="yearControl" (selectionChange)="onChange()" [required]="instance.yearRequired">
          <mat-option *ngFor="let year of instance.years" [value]="year.value">
            {{year.label}}
          </mat-option>
        </mat-select>
      </mat-form-field>
      <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
    </ng-template>
  `
            },] }
];
DayComponent.MaterialComponent = MaterialDayComponent;
export { DayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kYXkvZGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLFlBQVksTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsWUFBWSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsVUFBUyxJQUFJO0lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUM7QUE4Q0YsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGlCQUFpQjtJQTVDM0Q7O1FBNkNTLGVBQVUsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM1QyxpQkFBWSxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzlDLGdCQUFXLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7SUF5Q3RELENBQUM7SUF4Q0MsV0FBVyxDQUFDLFFBQVE7UUFDbEIsMENBQTBDO1FBQ3pDLElBQUksQ0FBQyxVQUFrQixDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFVBQWtCLENBQUMsZUFBZSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBb0IsQ0FBQyxZQUFZLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFvQixDQUFDLGVBQWUsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQW1CLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsV0FBbUIsQ0FBQyxlQUFlLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxJQUFJLEdBQUc7WUFDZCxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztTQUN2QixDQUFDO1FBQ0YsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBUTtRQUNsQixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBdkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q1Q7YUFDRjs7QUE4Q0QsWUFBWSxDQUFDLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL01hdGVyaWFsQ29tcG9uZW50JztcbmltcG9ydCBEYXlDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9kYXkvRGF5LmpzJztcbmltcG9ydCB7IG1vbWVudERhdGUgfSBmcm9tICdmb3JtaW9qcy91dGlscy91dGlscy5qcyc7XG5EYXlDb21wb25lbnQucHJvdG90eXBlLmdldEZpZWxkVmFsdWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLnJlZnNbbmFtZV0gPyB0aGlzLnJlZnNbbmFtZV0udmFsdWUgOiAnJztcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tZGF5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm1pby1mb3JtLWZpZWxkIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiIFtjb21wb25lbnRUZW1wbGF0ZV09XCJjb21wb25lbnRUZW1wbGF0ZVwiPjwvbWF0LWZvcm1pby1mb3JtLWZpZWxkPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50VGVtcGxhdGUgbGV0LWhhc0xhYmVsPlxuICAgICAgPG1hdC1sYWJlbCAqbmdJZj1cImhhc0xhYmVsXCI+XG4gICAgICAgIDxzcGFuIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiIG1hdEZvcm1pb0xhYmVsPjwvc3Bhbj5cbiAgICAgIDwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiaW5zdGFuY2UuZGF5Rmlyc3QgJiYgaW5zdGFuY2Uuc2hvd0RheVwiPlxuICAgICAgICA8bWF0LWxhYmVsICpuZ0lmPVwiIWluc3RhbmNlLmNvbXBvbmVudC5oaWRlSW5wdXRMYWJlbHNcIj5EYXk8L21hdC1sYWJlbD5cbiAgICAgICAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cImRheUNvbnRyb2xcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uQ2hhbmdlKClcIiBbcmVxdWlyZWRdPVwiaW5zdGFuY2UuZGF5UmVxdWlyZWRcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZGF5IG9mIGluc3RhbmNlLmRheXNcIiBbdmFsdWVdPVwiZGF5LnZhbHVlXCI+XG4gICAgICAgICAgICB7e2RheS5sYWJlbH19XG4gICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwiaW5zdGFuY2Uuc2hvd01vbnRoXCI+XG4gICAgICAgIDxtYXQtbGFiZWwgKm5nSWY9XCIhaW5zdGFuY2UuY29tcG9uZW50LmhpZGVJbnB1dExhYmVsc1wiPk1vbnRoPC9tYXQtbGFiZWw+XG4gICAgICAgIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJtb250aENvbnRyb2xcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uQ2hhbmdlKClcIiBbcmVxdWlyZWRdPVwiaW5zdGFuY2UubW9udGhSZXF1aXJlZFwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aCBvZiBpbnN0YW5jZS5tb250aHNcIiBbdmFsdWVdPVwibW9udGgudmFsdWVcIj5cbiAgICAgICAgICAgIHt7bW9udGgubGFiZWx9fVxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIiFpbnN0YW5jZS5kYXlGaXJzdCAmJiBpbnN0YW5jZS5zaG93RGF5XCI+XG4gICAgICAgIDxtYXQtbGFiZWwgKm5nSWY9XCIhaW5zdGFuY2UuY29tcG9uZW50LmhpZGVJbnB1dExhYmVsc1wiPkRheTwvbWF0LWxhYmVsPlxuICAgICAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiZGF5Q29udHJvbFwiIChzZWxlY3Rpb25DaGFuZ2UpPVwib25DaGFuZ2UoKVwiIFtyZXF1aXJlZF09XCJpbnN0YW5jZS5kYXlSZXF1aXJlZFwiPlxuICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBkYXkgb2YgaW5zdGFuY2UuZGF5c1wiIFt2YWx1ZV09XCJkYXkudmFsdWVcIj5cbiAgICAgICAgICAgIHt7ZGF5LmxhYmVsfX1cbiAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCJpbnN0YW5jZS5zaG93WWVhclwiPlxuICAgICAgICA8bWF0LWxhYmVsICpuZ0lmPVwiIWluc3RhbmNlLmNvbXBvbmVudC5oaWRlSW5wdXRMYWJlbHNcIj5ZZWFyPC9tYXQtbGFiZWw+XG4gICAgICAgIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJ5ZWFyQ29udHJvbFwiIChzZWxlY3Rpb25DaGFuZ2UpPVwib25DaGFuZ2UoKVwiIFtyZXF1aXJlZF09XCJpbnN0YW5jZS55ZWFyUmVxdWlyZWRcIj5cbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgeWVhciBvZiBpbnN0YW5jZS55ZWFyc1wiIFt2YWx1ZV09XCJ5ZWFyLnZhbHVlXCI+XG4gICAgICAgICAgICB7e3llYXIubGFiZWx9fVxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpbnN0YW5jZS5lcnJvclwiPnt7IGluc3RhbmNlLmVycm9yLm1lc3NhZ2UgfX08L21hdC1lcnJvcj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRGF5Q29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQge1xuICBwdWJsaWMgZGF5Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIG1vbnRoQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHllYXJDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBzZXRJbnN0YW5jZShpbnN0YW5jZSkge1xuICAgIC8vIEFkZCBzdHViIG1ldGhvZHMgdG8gbWF0Y2ggZG9tIGVsZW1lbnRzLlxuICAgICh0aGlzLmRheUNvbnRyb2wgYXMgYW55KS5zZXRBdHRyaWJ1dGUgPSAoKSA9PiB7fTtcbiAgICAodGhpcy5kYXlDb250cm9sIGFzIGFueSkucmVtb3ZlQXR0cmlidXRlID0gKCkgPT4ge307XG4gICAgKHRoaXMubW9udGhDb250cm9sIGFzIGFueSkuc2V0QXR0cmlidXRlID0gKCkgPT4ge307XG4gICAgKHRoaXMubW9udGhDb250cm9sIGFzIGFueSkucmVtb3ZlQXR0cmlidXRlID0gKCkgPT4ge307XG4gICAgKHRoaXMueWVhckNvbnRyb2wgYXMgYW55KS5zZXRBdHRyaWJ1dGUgPSAoKSA9PiB7fTtcbiAgICAodGhpcy55ZWFyQ29udHJvbCBhcyBhbnkpLnJlbW92ZUF0dHJpYnV0ZSA9ICgpID0+IHt9O1xuICAgIGluc3RhbmNlLnJlZnMgPSB7XG4gICAgICBkYXk6IHRoaXMuZGF5Q29udHJvbCxcbiAgICAgIG1vbnRoOiB0aGlzLm1vbnRoQ29udHJvbCxcbiAgICAgIHllYXI6IHRoaXMueWVhckNvbnRyb2xcbiAgICB9O1xuICAgIHJldHVybiBzdXBlci5zZXRJbnN0YW5jZShpbnN0YW5jZSk7XG4gIH1cblxuICBzZXREaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5kYXlDb250cm9sLmRpc2FibGUoKTtcbiAgICAgIHRoaXMubW9udGhDb250cm9sLmRpc2FibGUoKTtcbiAgICAgIHRoaXMueWVhckNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRheUNvbnRyb2wuZW5hYmxlKCk7XG4gICAgICB0aGlzLm1vbnRoQ29udHJvbC5lbmFibGUoKTtcbiAgICAgIHRoaXMueWVhckNvbnRyb2wuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZGF5Q29udHJvbC5zZXRWYWx1ZShwYXJzZUludChtb21lbnREYXRlKHZhbHVlKS5mb3JtYXQoJ0QnKSkpO1xuICAgICAgdGhpcy5tb250aENvbnRyb2wuc2V0VmFsdWUocGFyc2VJbnQobW9tZW50RGF0ZSh2YWx1ZSkuZm9ybWF0KCdNJykpKTtcbiAgICAgIHRoaXMueWVhckNvbnRyb2wuc2V0VmFsdWUocGFyc2VJbnQobW9tZW50RGF0ZSh2YWx1ZSkuZm9ybWF0KCdZWVlZJykpKTtcbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRWYWx1ZUF0KDAsIHZhbHVlKTtcbiAgfVxufVxuRGF5Q29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxEYXlDb21wb25lbnQ7XG5leHBvcnQgeyBEYXlDb21wb25lbnQgfTtcbiJdfQ==