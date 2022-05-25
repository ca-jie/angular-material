import { Component, ViewChild } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import DateTimeComponent from 'formiojs/components/datetime/DateTime.js';
import { momentDate } from 'formiojs/utils/utils.js';
import { FormControl } from '@angular/forms';
export class MaterialDateComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.timeControl = new FormControl();
        this.displayControl = new FormControl();
        this.selectedTime = '00:00';
        this.allowManualInput = true;
        this.formatTime = (value) => {
            if (!value) {
                return this.instance.emptyValue;
            }
            return momentDate(value).format(this.instance.component.format);
        };
        this.dateFilter = (d) => {
            const isValid = this.instance.component.datePicker.disableWeekends ? this.disableWeekends(d) : true;
            return this.instance.component.widget.disabledDates && isValid ?
                this.disableDates(this.instance.component.widget.disabledDates.split(','), d) : isValid;
        };
    }
    get enableDate() {
        return this.instance && this.instance.component.enableDate !== false;
    }
    get enableTime() {
        return this.instance && this.instance.component.enableTime === true;
    }
    setDisplayControlValue(value = null) {
        const format = `MM/DD/YYYY${this.enableTime ? 'THH:mm' : ''}`;
        value = value || this.getDateTimeValue();
        if (value) {
            this.displayControl.setValue(momentDate(value).format(format));
        }
        else {
            this.displayControl.setValue('');
        }
    }
    onChangeDate(event) {
        console.log('change date =>', event);
        this.selectedDate = momentDate(event).utc().format();
        this.control.setValue(this.selectedDate);
        this.setDateTime();
    }
    onChangeTime(time) {
        this.selectedTime = time;
        if (this.selectedDate || (this.enableTime && !this.enableDate)) {
            this.setDateTime();
        }
    }
    onChangeInput() {
        const value = this.dateFilter(this.displayControl.value) &&
            this.checkMinMax(this.displayControl.value) ? this.displayControl.value : '';
        this.control.setValue(value);
        this.onChange();
    }
    getDateTimeValue() {
        let newDate = '';
        let isSelectedTime = false;
        if (this.calendar && this.calendar.selectedTime) {
            const { selectedTime } = this.calendar;
            isSelectedTime = true;
            if (this.selectedTime !== selectedTime) {
                this.selectedTime = selectedTime;
            }
        }
        if (this.enableTime && this.enableDate) {
            const [hours, minutes] = this.selectedTime.split(':');
            newDate = isSelectedTime
                ? momentDate(this.selectedDate)
                    .hours(Number.parseInt(hours))
                    .minutes(Number.parseInt(minutes))
                    .utc()
                : this.selectedDate;
        }
        if (!this.enableTime && this.enableDate) {
            newDate = this.selectedDate;
        }
        if (this.enableTime && !this.enableDate) {
            const [hours, minutes] = this.selectedTime.split(':');
            newDate = momentDate(new Date())
                .hours(Number.parseInt(hours))
                .minutes(Number.parseInt(minutes))
                .seconds(0)
                .utc();
        }
        return newDate;
    }
    setDateTime() {
        this.control.setValue(this.getDateTimeValue());
        this.onChange();
    }
    setInstance(instance) {
        super.setInstance(instance);
        this.isDisabled() ? this.control.disable() : this.control.enable();
        this.isDisabled() ? this.displayControl.disable() : this.displayControl.enable();
        if (this.instance) {
            this.allowManualInput = this.instance.component.allowInput === false ? false : true;
            if (this.instance.component && this.instance.component.datePicker) {
                const { minDate: min, maxDate: max } = this.instance.component.datePicker;
                // It improves the date to the full format if the customer set only a year. Otherwise we will have conflicts into the moment.js.
                const { minDate, maxDate } = this.improveMinMaxDate(min, max);
                this.instance.component.datePicker.minDate = minDate;
                this.instance.component.datePicker.maxDate = maxDate;
            }
        }
    }
    toggleCalendar(event) {
        if (!this.isDisabled()) {
            if (!this.isPickerOpened) {
                const date = this.getValue();
                if (date && this.checkMinMax(date)) {
                    if (this.enableDate && this.calendar && !this.calendar.selectedDate) {
                        this.calendar.setExistedDate(momentDate(date).toDate());
                    }
                    if (this.enableTime && this.calendar && !this.calendar.selectedTime) {
                        const time = momentDate(date);
                        this.calendar.setExistedTime(time.format('HH:mm'), time.format('h:mm:A'));
                    }
                }
            }
            this.isPickerOpened = !this.isPickerOpened;
            event.stopPropagation();
        }
    }
    isDisabled() {
        const { readonly, disabled } = this.instance.component;
        return readonly || disabled || this.instance.root.options.readOnly;
    }
    setValue(value) {
        if (this.dateFilter(value) && this.checkMinMax(value)) {
            this.setDisplayControlValue(value);
            super.setValue(value);
        }
    }
    onChange() {
        const value = this.dateFilter(this.getValue()) && this.checkMinMax(this.getValue()) ? this.getValue() : '';
        this.setDisplayControlValue(value);
    }
    beforeSubmit() {
        this.onChange();
        super.beforeSubmit();
    }
    checkMinMax(value) {
        let isValid = true;
        const { minDate: min, maxDate: max } = this.instance.component.datePicker;
        const { minDate, maxDate } = this.improveMinMaxDate(min, max);
        if (minDate) {
            isValid = momentDate(value).isSameOrAfter(minDate);
        }
        if (maxDate && isValid) {
            isValid = momentDate(value).isSameOrBefore(maxDate);
        }
        return isValid;
    }
    disableWeekends(d) {
        if (d && d.getDay) {
            const day = d.getDay();
            return day !== 0 && day !== 6;
        }
        return true;
    }
    disableDates(dates, d) {
        const formattedDates = dates.map((date) => momentDate(date).format('MM/DD/YYYY'));
        return !formattedDates.includes(momentDate(d).format('MM/DD/YYYY'));
    }
    clickOutside(event) {
        if (!this.calendar.element.nativeElement.contains(event.target) && this.isPickerOpened)
            this.toggleCalendar(event);
    }
    improveMinMaxDate(minDate, maxDate) {
        if (minDate && minDate.length === 4) {
            minDate = momentDate(`${minDate}-01-01`).format('MM/DD/YYYY');
        }
        if (maxDate && maxDate.length === 4) {
            maxDate = momentDate(`${maxDate}-01-01`).subtract(1, 'day').format('MM/DD/YYYY');
        }
        return { minDate, maxDate };
    }
}
MaterialDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-date',
                host: {
                    '(document:click)': 'clickOutside($event)',
                },
                template: `
    <mat-formio-form-field [instance]="instance" [componentTemplate]="componentTemplate"></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-label *ngIf="hasLabel" fxFill>
        <span [instance]="instance" matFormioLabel></span>
      </mat-label>

      <form class="example-form">
        <mat-datepicker-toggle [disabled]="isDisabled()" (click)="toggleCalendar($event)">
          <mat-icon matDatepickerToggleIcon *ngIf="enableTime && !enableDate">schedule</mat-icon>
        </mat-datepicker-toggle>
        <mat-form-field class="example-full-width">
          <input
            *ngIf="enableTime && enableDate"
            matInput
            type="datetime-local"
            [placeholder]="instance.component.placeholder"
            [formControl]="displayControl"
            (input)="onChangeInput()"
            [readonly]="!allowManualInput"
          >
          <input
            *ngIf="enableTime && !enableDate"
            matInput
            [placeholder]="instance.component.placeholder"
            [formControl]="displayControl"
            [matMask]="formatTime"
            (input)="onChangeInput()"
            [readonly]="!allowManualInput"
          >
          <input
            *ngIf="!enableTime && enableDate"
            matInput
            [placeholder]="instance.component.placeholder"
            [formControl]="displayControl"
            (input)="onChangeInput()"
            [readonly]="!allowManualInput"
          >
        </mat-form-field>

        <mat-formio-calendar
          #calendar
          [minDate]="instance.component.datePicker.minDate || ''"
          [maxDate]="instance.component.datePicker.maxDate || ''"
          [dateFilter]="dateFilter"
          [hidden]="!isPickerOpened"
          (dateSelectEvent)="onChangeDate($event)"
          (timeSelectEvent)="onChangeTime($event)"
          [enableDate]="enableDate"
          [enableTime]="enableTime"
          [hourStep]="instance.component.timePicker.hourStep"
          [minuteStep]="instance.component.timePicker.minuteStep"
          [instance]="instance"
        ></mat-formio-calendar>
        <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
      </form>
    </ng-template>
  `
            },] }
];
MaterialDateComponent.propDecorators = {
    calendar: [{ type: ViewChild, args: ['calendar',] }]
};
DateTimeComponent.MaterialComponent = MaterialDateComponent;
export { DateTimeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLGlCQUFpQixNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFrRTNDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxpQkFBaUI7SUFqRTVEOztRQWtFUyxnQkFBVyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzdDLG1CQUFjLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFHaEQsaUJBQVksR0FBUSxPQUFPLENBQUM7UUFDNUIscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBb0lqQyxlQUFVLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7YUFDakM7WUFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFBO1FBOENELGVBQVUsR0FBRyxDQUFDLENBQWMsRUFBVyxFQUFFO1lBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElB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Q0FBQyxFQUFFO1lBQ25DLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxPQUFPLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25DLE9BQU8sR0FBRyxVQUFVLENBQUMsR0FBRyxPQUFPLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xGO1FBQ0QsT0FBTyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFsUkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLElBQUksRUFBRTtvQkFDSixrQkFBa0IsRUFBRSxzQkFBc0I7aUJBQzNDO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeURUO2FBQ0Y7Ozt1QkFVRSxTQUFTLFNBQUMsVUFBVTs7QUEyTXZCLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9NYXRlcmlhbENvbXBvbmVudCc7XG5pbXBvcnQgRGF0ZVRpbWVDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9kYXRldGltZS9EYXRlVGltZS5qcyc7XG5pbXBvcnQgeyBtb21lbnREYXRlIH0gZnJvbSAnZm9ybWlvanMvdXRpbHMvdXRpbHMuanMnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby1kYXRlJyxcbiAgaG9zdDoge1xuICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ2NsaWNrT3V0c2lkZSgkZXZlbnQpJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWZvcm1pby1mb3JtLWZpZWxkIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiIFtjb21wb25lbnRUZW1wbGF0ZV09XCJjb21wb25lbnRUZW1wbGF0ZVwiPjwvbWF0LWZvcm1pby1mb3JtLWZpZWxkPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29tcG9uZW50VGVtcGxhdGUgbGV0LWhhc0xhYmVsPlxuICAgICAgPG1hdC1sYWJlbCAqbmdJZj1cImhhc0xhYmVsXCIgZnhGaWxsPlxuICAgICAgICA8c3BhbiBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIiBtYXRGb3JtaW9MYWJlbD48L3NwYW4+XG4gICAgICA8L21hdC1sYWJlbD5cblxuICAgICAgPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZCgpXCIgKGNsaWNrKT1cInRvZ2dsZUNhbGVuZGFyKCRldmVudClcIj5cbiAgICAgICAgICA8bWF0LWljb24gbWF0RGF0ZXBpY2tlclRvZ2dsZUljb24gKm5nSWY9XCJlbmFibGVUaW1lICYmICFlbmFibGVEYXRlXCI+c2NoZWR1bGU8L21hdC1pY29uPlxuICAgICAgICA8L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAqbmdJZj1cImVuYWJsZVRpbWUgJiYgZW5hYmxlRGF0ZVwiXG4gICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJpbnN0YW5jZS5jb21wb25lbnQucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImRpc3BsYXlDb250cm9sXCJcbiAgICAgICAgICAgIChpbnB1dCk9XCJvbkNoYW5nZUlucHV0KClcIlxuICAgICAgICAgICAgW3JlYWRvbmx5XT1cIiFhbGxvd01hbnVhbElucHV0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAqbmdJZj1cImVuYWJsZVRpbWUgJiYgIWVuYWJsZURhdGVcIlxuICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJpbnN0YW5jZS5jb21wb25lbnQucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImRpc3BsYXlDb250cm9sXCJcbiAgICAgICAgICAgIFttYXRNYXNrXT1cImZvcm1hdFRpbWVcIlxuICAgICAgICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlSW5wdXQoKVwiXG4gICAgICAgICAgICBbcmVhZG9ubHldPVwiIWFsbG93TWFudWFsSW5wdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICpuZ0lmPVwiIWVuYWJsZVRpbWUgJiYgZW5hYmxlRGF0ZVwiXG4gICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImluc3RhbmNlLmNvbXBvbmVudC5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiZGlzcGxheUNvbnRyb2xcIlxuICAgICAgICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlSW5wdXQoKVwiXG4gICAgICAgICAgICBbcmVhZG9ubHldPVwiIWFsbG93TWFudWFsSW5wdXRcIlxuICAgICAgICAgID5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8bWF0LWZvcm1pby1jYWxlbmRhclxuICAgICAgICAgICNjYWxlbmRhclxuICAgICAgICAgIFttaW5EYXRlXT1cImluc3RhbmNlLmNvbXBvbmVudC5kYXRlUGlja2VyLm1pbkRhdGUgfHwgJydcIlxuICAgICAgICAgIFttYXhEYXRlXT1cImluc3RhbmNlLmNvbXBvbmVudC5kYXRlUGlja2VyLm1heERhdGUgfHwgJydcIlxuICAgICAgICAgIFtkYXRlRmlsdGVyXT1cImRhdGVGaWx0ZXJcIlxuICAgICAgICAgIFtoaWRkZW5dPVwiIWlzUGlja2VyT3BlbmVkXCJcbiAgICAgICAgICAoZGF0ZVNlbGVjdEV2ZW50KT1cIm9uQ2hhbmdlRGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAodGltZVNlbGVjdEV2ZW50KT1cIm9uQ2hhbmdlVGltZSgkZXZlbnQpXCJcbiAgICAgICAgICBbZW5hYmxlRGF0ZV09XCJlbmFibGVEYXRlXCJcbiAgICAgICAgICBbZW5hYmxlVGltZV09XCJlbmFibGVUaW1lXCJcbiAgICAgICAgICBbaG91clN0ZXBdPVwiaW5zdGFuY2UuY29tcG9uZW50LnRpbWVQaWNrZXIuaG91clN0ZXBcIlxuICAgICAgICAgIFttaW51dGVTdGVwXT1cImluc3RhbmNlLmNvbXBvbmVudC50aW1lUGlja2VyLm1pbnV0ZVN0ZXBcIlxuICAgICAgICAgIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiXG4gICAgICAgID48L21hdC1mb3JtaW8tY2FsZW5kYXI+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpbnN0YW5jZS5lcnJvclwiPnt7IGluc3RhbmNlLmVycm9yLm1lc3NhZ2UgfX08L21hdC1lcnJvcj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxEYXRlQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQge1xuICBwdWJsaWMgdGltZUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHB1YmxpYyBkaXNwbGF5Q29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIGlzUGlja2VyT3BlbmVkOiBib29sZWFuO1xuICBwdWJsaWMgc2VsZWN0ZWREYXRlOiBhbnk7XG4gIHB1YmxpYyBzZWxlY3RlZFRpbWU6IGFueSA9ICcwMDowMCc7XG4gIHB1YmxpYyBhbGxvd01hbnVhbElucHV0OiBib29sZWFuID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKCdjYWxlbmRhcicpIGNhbGVuZGFyO1xuXG4gIGdldCBlbmFibGVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlICYmIHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LmVuYWJsZURhdGUgIT09IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGVuYWJsZVRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UgJiYgdGhpcy5pbnN0YW5jZS5jb21wb25lbnQuZW5hYmxlVGltZSA9PT0gdHJ1ZTtcbiAgfVxuXG4gIHNldERpc3BsYXlDb250cm9sVmFsdWUodmFsdWUgPSBudWxsKSB7XG4gICAgY29uc3QgZm9ybWF0ID0gYE1NL0REL1lZWVkke3RoaXMuZW5hYmxlVGltZSA/ICdUSEg6bW0nIDogJyd9YDtcbiAgICB2YWx1ZSA9IHZhbHVlIHx8IHRoaXMuZ2V0RGF0ZVRpbWVWYWx1ZSgpO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlDb250cm9sLnNldFZhbHVlKG1vbWVudERhdGUodmFsdWUpLmZvcm1hdChmb3JtYXQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlDb250cm9sLnNldFZhbHVlKCcnKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZURhdGUoZXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG1vbWVudERhdGUoZXZlbnQpLnV0YygpLmZvcm1hdCgpO1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgdGhpcy5zZXREYXRlVGltZSgpO1xuICB9XG5cbiAgb25DaGFuZ2VUaW1lKHRpbWUpIHtcbiAgICB0aGlzLnNlbGVjdGVkVGltZSA9IHRpbWU7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlIHx8ICh0aGlzLmVuYWJsZVRpbWUgJiYgIXRoaXMuZW5hYmxlRGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0RGF0ZVRpbWUoKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZUlucHV0KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlRmlsdGVyKHRoaXMuZGlzcGxheUNvbnRyb2wudmFsdWUpICYmXG4gICAgdGhpcy5jaGVja01pbk1heCh0aGlzLmRpc3BsYXlDb250cm9sLnZhbHVlKSA/IHRoaXMuZGlzcGxheUNvbnRyb2wudmFsdWUgOiAnJztcblxuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSgpO1xuICB9XG5cbiAgZ2V0RGF0ZVRpbWVWYWx1ZSgpIHtcbiAgICBsZXQgbmV3RGF0ZSA9ICcnO1xuICAgIGxldCBpc1NlbGVjdGVkVGltZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuY2FsZW5kYXIgJiYgdGhpcy5jYWxlbmRhci5zZWxlY3RlZFRpbWUpIHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0ZWRUaW1lIH0gPSB0aGlzLmNhbGVuZGFyO1xuICAgICAgaXNTZWxlY3RlZFRpbWUgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFRpbWUgIT09IHNlbGVjdGVkVGltZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGltZSA9IHNlbGVjdGVkVGltZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbmFibGVUaW1lICYmIHRoaXMuZW5hYmxlRGF0ZSkge1xuICAgICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IHRoaXMuc2VsZWN0ZWRUaW1lLnNwbGl0KCc6Jyk7XG4gICAgICBuZXdEYXRlID0gaXNTZWxlY3RlZFRpbWVcbiAgICAgICAgICA/IG1vbWVudERhdGUodGhpcy5zZWxlY3RlZERhdGUpXG4gICAgICAgICAgIC5ob3VycyhOdW1iZXIucGFyc2VJbnQoaG91cnMpKVxuICAgICAgICAgICAubWludXRlcyhOdW1iZXIucGFyc2VJbnQobWludXRlcykpXG4gICAgICAgICAgIC51dGMoKVxuICAgICAgICAgIDogdGhpcy5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmVuYWJsZVRpbWUgJiYgdGhpcy5lbmFibGVEYXRlKSB7XG4gICAgICBuZXdEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZW5hYmxlVGltZSAmJiAhdGhpcy5lbmFibGVEYXRlKSB7XG4gICAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gdGhpcy5zZWxlY3RlZFRpbWUuc3BsaXQoJzonKTtcbiAgICAgIG5ld0RhdGUgPSBtb21lbnREYXRlKG5ldyBEYXRlKCkpXG4gICAgICAgIC5ob3VycyhOdW1iZXIucGFyc2VJbnQoaG91cnMpKVxuICAgICAgICAubWludXRlcyhOdW1iZXIucGFyc2VJbnQobWludXRlcykpXG4gICAgICAgIC5zZWNvbmRzKDApXG4gICAgICAgIC51dGMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RGF0ZTtcbiAgfVxuXG4gIHNldERhdGVUaW1lKCkge1xuICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh0aGlzLmdldERhdGVUaW1lVmFsdWUoKSk7XG4gICAgdGhpcy5vbkNoYW5nZSgpO1xuICB9XG5cbiAgc2V0SW5zdGFuY2UoaW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyLnNldEluc3RhbmNlKGluc3RhbmNlKTtcbiAgICB0aGlzLmlzRGlzYWJsZWQoKSA/IHRoaXMuY29udHJvbC5kaXNhYmxlKCkgOiB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgdGhpcy5pc0Rpc2FibGVkKCkgPyB0aGlzLmRpc3BsYXlDb250cm9sLmRpc2FibGUoKSA6IHRoaXMuZGlzcGxheUNvbnRyb2wuZW5hYmxlKCk7XG5cbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5hbGxvd01hbnVhbElucHV0ID0gdGhpcy5pbnN0YW5jZS5jb21wb25lbnQuYWxsb3dJbnB1dCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5jb21wb25lbnQgJiYgdGhpcy5pbnN0YW5jZS5jb21wb25lbnQuZGF0ZVBpY2tlcikge1xuICAgICAgICBjb25zdCB7bWluRGF0ZTogbWluLCBtYXhEYXRlOiBtYXh9ID0gdGhpcy5pbnN0YW5jZS5jb21wb25lbnQuZGF0ZVBpY2tlcjtcblxuICAgICAgICAvLyBJdCBpbXByb3ZlcyB0aGUgZGF0ZSB0byB0aGUgZnVsbCBmb3JtYXQgaWYgdGhlIGN1c3RvbWVyIHNldCBvbmx5IGEgeWVhci4gT3RoZXJ3aXNlIHdlIHdpbGwgaGF2ZSBjb25mbGljdHMgaW50byB0aGUgbW9tZW50LmpzLlxuICAgICAgICBjb25zdCB7IG1pbkRhdGUsIG1heERhdGUgfSA9IHRoaXMuaW1wcm92ZU1pbk1heERhdGUobWluLCBtYXgpO1xuICAgICAgICB0aGlzLmluc3RhbmNlLmNvbXBvbmVudC5kYXRlUGlja2VyLm1pbkRhdGUgPSBtaW5EYXRlO1xuICAgICAgICB0aGlzLmluc3RhbmNlLmNvbXBvbmVudC5kYXRlUGlja2VyLm1heERhdGUgPSBtYXhEYXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNhbGVuZGFyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoKSkge1xuICAgICAgaWYgKCF0aGlzLmlzUGlja2VyT3BlbmVkKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIGlmIChkYXRlICYmdGhpcy5jaGVja01pbk1heChkYXRlKSkge1xuICAgICAgICAgIGlmICh0aGlzLmVuYWJsZURhdGUgJiYgdGhpcy5jYWxlbmRhciAmJiAhdGhpcy5jYWxlbmRhci5zZWxlY3RlZERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXIuc2V0RXhpc3RlZERhdGUobW9tZW50RGF0ZShkYXRlKS50b0RhdGUoKSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5lbmFibGVUaW1lICYmIHRoaXMuY2FsZW5kYXIgJiYgIXRoaXMuY2FsZW5kYXIuc2VsZWN0ZWRUaW1lKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lID0gbW9tZW50RGF0ZShkYXRlKVxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhci5zZXRFeGlzdGVkVGltZSh0aW1lLmZvcm1hdCgnSEg6bW0nKSwgdGltZS5mb3JtYXQoJ2g6bW06QScpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5pc1BpY2tlck9wZW5lZCA9ICF0aGlzLmlzUGlja2VyT3BlbmVkO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCB7IHJlYWRvbmx5LCBkaXNhYmxlZCB9ID0gdGhpcy5pbnN0YW5jZS5jb21wb25lbnQ7XG4gICAgcmV0dXJuIHJlYWRvbmx5IHx8IGRpc2FibGVkIHx8IHRoaXMuaW5zdGFuY2Uucm9vdC5vcHRpb25zLnJlYWRPbmx5XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0VGltZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlLmVtcHR5VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBtb21lbnREYXRlKHZhbHVlKS5mb3JtYXQodGhpcy5pbnN0YW5jZS5jb21wb25lbnQuZm9ybWF0KTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZGF0ZUZpbHRlcih2YWx1ZSkgJiYgdGhpcy5jaGVja01pbk1heCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuc2V0RGlzcGxheUNvbnRyb2xWYWx1ZSh2YWx1ZSk7XG4gICAgICBzdXBlci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVGaWx0ZXIodGhpcy5nZXRWYWx1ZSgpKSAmJiB0aGlzLmNoZWNrTWluTWF4KHRoaXMuZ2V0VmFsdWUoKSkgPyB0aGlzLmdldFZhbHVlKCkgOiAnJztcbiAgICB0aGlzLnNldERpc3BsYXlDb250cm9sVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgYmVmb3JlU3VibWl0KCkge1xuICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICBzdXBlci5iZWZvcmVTdWJtaXQoKTtcbiAgfVxuXG4gIGNoZWNrTWluTWF4KHZhbHVlKSB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIGNvbnN0IHsgbWluRGF0ZTogbWluLCBtYXhEYXRlOiBtYXggfSA9IHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LmRhdGVQaWNrZXI7XG4gICAgY29uc3QgeyBtaW5EYXRlLCBtYXhEYXRlIH0gPSB0aGlzLmltcHJvdmVNaW5NYXhEYXRlKG1pbiwgbWF4KTtcblxuICAgIGlmIChtaW5EYXRlKSB7XG4gICAgICBpc1ZhbGlkID0gbW9tZW50RGF0ZSh2YWx1ZSkuaXNTYW1lT3JBZnRlcihtaW5EYXRlKTtcbiAgICB9XG4gICAgaWYgKG1heERhdGUgJiYgaXNWYWxpZCkge1xuICAgICAgaXNWYWxpZCA9IG1vbWVudERhdGUodmFsdWUpLmlzU2FtZU9yQmVmb3JlKG1heERhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGRpc2FibGVXZWVrZW5kcyhkOiBEYXRlKSB7XG4gICAgaWYgKGQgJiYgZC5nZXREYXkpIHtcbiAgICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XG4gICAgICByZXR1cm4gZGF5ICE9PSAwICYmIGRheSAhPT0gNjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBkaXNhYmxlRGF0ZXMoZGF0ZXM6IEFycmF5PHN0cmluZz4sIGQ6IERhdGUpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlcyA9IGRhdGVzLm1hcCgoZGF0ZSkgPT4gbW9tZW50RGF0ZShkYXRlKS5mb3JtYXQoJ01NL0REL1lZWVknKSk7XG4gICAgcmV0dXJuICFmb3JtYXR0ZWREYXRlcy5pbmNsdWRlcyhtb21lbnREYXRlKGQpLmZvcm1hdCgnTU0vREQvWVlZWScpKTtcbiAgfVxuXG4gIGRhdGVGaWx0ZXIgPSAoZDogRGF0ZSB8IG51bGwpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5pbnN0YW5jZS5jb21wb25lbnQuZGF0ZVBpY2tlci5kaXNhYmxlV2Vla2VuZHMgPyB0aGlzLmRpc2FibGVXZWVrZW5kcyhkKSA6IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuY29tcG9uZW50LndpZGdldC5kaXNhYmxlZERhdGVzICYmIGlzVmFsaWQgP1xuICAgICAgdGhpcy5kaXNhYmxlRGF0ZXModGhpcy5pbnN0YW5jZS5jb21wb25lbnQud2lkZ2V0LmRpc2FibGVkRGF0ZXMuc3BsaXQoJywnKSwgZCkgOiBpc1ZhbGlkO1xuICB9XG5cbiAgY2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmIHRoaXMuaXNQaWNrZXJPcGVuZWQpXG4gICAgICB0aGlzLnRvZ2dsZUNhbGVuZGFyKGV2ZW50KTtcbiAgfVxuXG4gIGltcHJvdmVNaW5NYXhEYXRlKG1pbkRhdGUsIG1heERhdGUpIHtcbiAgICBpZiAobWluRGF0ZSAmJiBtaW5EYXRlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgbWluRGF0ZSA9IG1vbWVudERhdGUoYCR7bWluRGF0ZX0tMDEtMDFgKS5mb3JtYXQoJ01NL0REL1lZWVknKTtcbiAgICB9XG5cbiAgICBpZiAobWF4RGF0ZSAmJiBtYXhEYXRlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgbWF4RGF0ZSA9IG1vbWVudERhdGUoYCR7bWF4RGF0ZX0tMDEtMDFgKS5zdWJ0cmFjdCgxLCAnZGF5JykuZm9ybWF0KCdNTS9ERC9ZWVlZJyk7XG4gICAgfVxuICAgIHJldHVybiB7bWluRGF0ZSwgbWF4RGF0ZX07XG4gIH1cbn1cbkRhdGVUaW1lQ29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxEYXRlQ29tcG9uZW50O1xuZXhwb3J0IHsgRGF0ZVRpbWVDb21wb25lbnQgfTtcbiJdfQ==