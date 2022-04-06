import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MaterialComponent } from '../MaterialComponent';
import TimeComponent from 'formiojs/components/time/Time.js';
import * as moment_ from 'moment';
export class MaterialTimeComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.period = 'AM';
        this.hourControl = new FormControl();
        this.minuteControl = new FormControl();
        this.secondControl = new FormControl();
        this.selectedEvent = new EventEmitter();
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.renderElementOnly = false;
    }
    setDisabled(disabled) {
        if (disabled) {
            this.hourControl.disable();
            this.minuteControl.disable();
            this.secondControl.disable();
        }
    }
    get dataFormat() {
        let format = this.instance.component.dataFormat;
        format = format ? format : 'HH:mm';
        return format;
    }
    setInstance(instance) {
        super.setInstance(instance);
        // this.control.setValue('00:00:00');
        this.onChange();
    }
    onChange() {
        const hours = this.hourControl.value;
        const minutes = this.minuteControl.value || '00';
        const seconds = this.secondControl.value || '';
        const rawValue = `${hours || '00'}:${minutes}${seconds ? ':' + seconds : ''} ${this.period}`;
        let value = this.getTwentyFourHourTime(rawValue);
        if (!hours) {
            value = this.instance.emptyValue;
        }
        this.control.setValue(value);
        if (this.instance) {
            super.onChange();
        }
        this.selectedEvent.emit(this.control);
    }
    setValue(value) {
        if (!value) {
            return;
        }
        super.setValue(value);
        const [hourValue, minuteValue, period] = value.split(':');
        this.hourControl.setValue(hourValue);
        this.minuteControl.setValue(minuteValue);
        // fix for default value with seconds instead of period
        this.period = period === ('AM' || 'PM') ? period : this.period;
    }
    getTwentyFourHourTime(amPmString) {
        const moment = moment_;
        return moment(amPmString, ['h:mm:ss A']).format(this.dataFormat);
    }
    changePeriod() {
        this.period = this.period === 'AM' ? 'PM' : 'AM';
        this.onChange();
    }
}
MaterialTimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-time',
                template: `
    <mat-formio-form-field
      [instance]="instance"
      [componentTemplate]="componentTemplate"
      [renderElementOnly]="renderElementOnly"
    ></mat-formio-form-field>
    <ng-template #componentTemplate let-hasLabel>
      <mat-label fxFill *ngIf="hasLabel">
        <span [instance]="instance" matFormioLabel></span>
      </mat-label>

      <div style="display: block">
        <div fxLayout="row" fxLayoutGap="5%">
          <input
            [formControl]="hourControl"
            [step]="hourStep"
            [min]="0"
            [max]="12"
            type="number"
            fxFlex="25%"
            (input)="onChange()"
          >
          <input
            [formControl]="minuteControl"
            [step]="minuteStep"
            [min]="0"
            [max]="59"
            type="number"
            fxFlex="25%"
            (input)="onChange()"
          >
          <input
            [formControl]="secondControl"
            [step]="secondStep"
            [min]="0"
            [max]="59"
            type="number"
            fxFlex="25%"
            (input)="onChange()"
            *ngIf="instance?.component?.dataFormat === 'HH:mm:ss' ||
             instance?.component?.dataFormat === 'HH:mm:ss.SSS'"
          >
          <button
            [disabled]="instance?.component?.disabled"
            fxFlex="25%"
            (click)="changePeriod()"
          >
            {{period}}
          </button>
        </div>
        <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
      </div>
    </ng-template>
  `
            },] }
];
MaterialTimeComponent.propDecorators = {
    selectedEvent: [{ type: Output }],
    hourStep: [{ type: Input }],
    minuteStep: [{ type: Input }],
    secondStep: [{ type: Input }],
    renderElementOnly: [{ type: Input }]
};
TimeComponent.MaterialComponent = MaterialTimeComponent;
export { TimeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGltZS90aW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLGFBQWEsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQTJEbEMsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGlCQUFpQjtJQTFENUQ7O1FBMkRTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGdCQUFXLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0Msa0JBQWEsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUMvQyxrQkFBYSxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzVDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN6QyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixzQkFBaUIsR0FBRyxLQUFLLENBQUM7SUE2RHJDLENBQUM7SUEzREMsV0FBVyxDQUFDLFFBQVE7UUFDbEIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxRFQ7YUFDRjs7OzRCQVFFLE1BQU07dUJBQ04sS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs7QUErRFIsYUFBYSxDQUFDLGlCQUFpQixHQUFHLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL01hdGVyaWFsQ29tcG9uZW50JztcbmltcG9ydCBUaW1lQ29tcG9uZW50IGZyb20gJ2Zvcm1pb2pzL2NvbXBvbmVudHMvdGltZS9UaW1lLmpzJztcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tdGltZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtaW8tZm9ybS1maWVsZFxuICAgICAgW2luc3RhbmNlXT1cImluc3RhbmNlXCJcbiAgICAgIFtjb21wb25lbnRUZW1wbGF0ZV09XCJjb21wb25lbnRUZW1wbGF0ZVwiXG4gICAgICBbcmVuZGVyRWxlbWVudE9ubHldPVwicmVuZGVyRWxlbWVudE9ubHlcIlxuICAgID48L21hdC1mb3JtaW8tZm9ybS1maWVsZD5cbiAgICA8bmctdGVtcGxhdGUgI2NvbXBvbmVudFRlbXBsYXRlIGxldC1oYXNMYWJlbD5cbiAgICAgIDxtYXQtbGFiZWwgZnhGaWxsICpuZ0lmPVwiaGFzTGFiZWxcIj5cbiAgICAgICAgPHNwYW4gW2luc3RhbmNlXT1cImluc3RhbmNlXCIgbWF0Rm9ybWlvTGFiZWw+PC9zcGFuPlxuICAgICAgPC9tYXQtbGFiZWw+XG5cbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiPlxuICAgICAgICA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXRHYXA9XCI1JVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cImhvdXJDb250cm9sXCJcbiAgICAgICAgICAgIFtzdGVwXT1cImhvdXJTdGVwXCJcbiAgICAgICAgICAgIFttaW5dPVwiMFwiXG4gICAgICAgICAgICBbbWF4XT1cIjEyXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgZnhGbGV4PVwiMjUlXCJcbiAgICAgICAgICAgIChpbnB1dCk9XCJvbkNoYW5nZSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibWludXRlQ29udHJvbFwiXG4gICAgICAgICAgICBbc3RlcF09XCJtaW51dGVTdGVwXCJcbiAgICAgICAgICAgIFttaW5dPVwiMFwiXG4gICAgICAgICAgICBbbWF4XT1cIjU5XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgZnhGbGV4PVwiMjUlXCJcbiAgICAgICAgICAgIChpbnB1dCk9XCJvbkNoYW5nZSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwic2Vjb25kQ29udHJvbFwiXG4gICAgICAgICAgICBbc3RlcF09XCJzZWNvbmRTdGVwXCJcbiAgICAgICAgICAgIFttaW5dPVwiMFwiXG4gICAgICAgICAgICBbbWF4XT1cIjU5XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgZnhGbGV4PVwiMjUlXCJcbiAgICAgICAgICAgIChpbnB1dCk9XCJvbkNoYW5nZSgpXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaW5zdGFuY2U/LmNvbXBvbmVudD8uZGF0YUZvcm1hdCA9PT0gJ0hIOm1tOnNzJyB8fFxuICAgICAgICAgICAgIGluc3RhbmNlPy5jb21wb25lbnQ/LmRhdGFGb3JtYXQgPT09ICdISDptbTpzcy5TU1MnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImluc3RhbmNlPy5jb21wb25lbnQ/LmRpc2FibGVkXCJcbiAgICAgICAgICAgIGZ4RmxleD1cIjI1JVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiY2hhbmdlUGVyaW9kKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7cGVyaW9kfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJpbnN0YW5jZS5lcnJvclwiPnt7IGluc3RhbmNlLmVycm9yLm1lc3NhZ2UgfX08L21hdC1lcnJvcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXRlcmlhbFRpbWVDb21wb25lbnQgZXh0ZW5kcyBNYXRlcmlhbENvbXBvbmVudCB7XG4gIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xuICBwdWJsaWMgcGVyaW9kID0gJ0FNJztcbiAgcHVibGljIGhvdXJDb250cm9sOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBwdWJsaWMgbWludXRlQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHNlY29uZENvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGhvdXJTdGVwID0gMTtcbiAgQElucHV0KCkgbWludXRlU3RlcCA9IDE7XG4gIEBJbnB1dCgpIHNlY29uZFN0ZXAgPSAxO1xuICBASW5wdXQoKSByZW5kZXJFbGVtZW50T25seSA9IGZhbHNlO1xuXG4gIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmhvdXJDb250cm9sLmRpc2FibGUoKTtcbiAgICAgIHRoaXMubWludXRlQ29udHJvbC5kaXNhYmxlKCk7XG4gICAgICB0aGlzLnNlY29uZENvbnRyb2wuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkYXRhRm9ybWF0KCkge1xuICAgIGxldCBmb3JtYXQgPSB0aGlzLmluc3RhbmNlLmNvbXBvbmVudC5kYXRhRm9ybWF0O1xuICAgIGZvcm1hdCA9IGZvcm1hdCA/IGZvcm1hdCA6ICdISDptbSc7XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxuXG4gIHNldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgc3VwZXIuc2V0SW5zdGFuY2UoaW5zdGFuY2UpO1xuICAgIC8vIHRoaXMuY29udHJvbC5zZXRWYWx1ZSgnMDA6MDA6MDAnKTtcbiAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBob3VycyA9IHRoaXMuaG91ckNvbnRyb2wudmFsdWU7XG4gICAgY29uc3QgbWludXRlcyA9IHRoaXMubWludXRlQ29udHJvbC52YWx1ZSB8fCAnMDAnO1xuICAgIGNvbnN0IHNlY29uZHMgPSB0aGlzLnNlY29uZENvbnRyb2wudmFsdWUgfHwgJyc7XG4gICAgY29uc3QgcmF3VmFsdWUgPSBgJHtob3VycyB8fCAnMDAnfToke21pbnV0ZXN9JHtzZWNvbmRzID8gJzonICsgc2Vjb25kcyA6ICcnfSAke3RoaXMucGVyaW9kfWA7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5nZXRUd2VudHlGb3VySG91clRpbWUocmF3VmFsdWUpO1xuXG4gICAgaWYgKCFob3Vycykge1xuICAgICAgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmVtcHR5VmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgc3VwZXIub25DaGFuZ2UoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEV2ZW50LmVtaXQodGhpcy5jb250cm9sKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdXBlci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgY29uc3QgW2hvdXJWYWx1ZSwgbWludXRlVmFsdWUsIHBlcmlvZF0gPSB2YWx1ZS5zcGxpdCgnOicpO1xuICAgIHRoaXMuaG91ckNvbnRyb2wuc2V0VmFsdWUoaG91clZhbHVlKTtcbiAgICB0aGlzLm1pbnV0ZUNvbnRyb2wuc2V0VmFsdWUobWludXRlVmFsdWUpO1xuICAgIC8vIGZpeCBmb3IgZGVmYXVsdCB2YWx1ZSB3aXRoIHNlY29uZHMgaW5zdGVhZCBvZiBwZXJpb2RcbiAgICB0aGlzLnBlcmlvZCA9IHBlcmlvZCA9PT0gKCdBTScgfHwgJ1BNJykgPyBwZXJpb2QgOiB0aGlzLnBlcmlvZDtcbiAgfVxuXG4gIGdldFR3ZW50eUZvdXJIb3VyVGltZShhbVBtU3RyaW5nKSB7XG4gICAgY29uc3QgbW9tZW50ID0gbW9tZW50XztcbiAgICByZXR1cm4gbW9tZW50KGFtUG1TdHJpbmcsIFsnaDptbTpzcyBBJ10pLmZvcm1hdCh0aGlzLmRhdGFGb3JtYXQpO1xuICB9XG5cbiAgY2hhbmdlUGVyaW9kKCkge1xuICAgIHRoaXMucGVyaW9kID0gdGhpcy5wZXJpb2QgPT09ICdBTScgPyAnUE0nIDogJ0FNJztcbiAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gIH1cbn1cblxuVGltZUNvbXBvbmVudC5NYXRlcmlhbENvbXBvbmVudCA9IE1hdGVyaWFsVGltZUNvbXBvbmVudDtcbmV4cG9ydCB7IFRpbWVDb21wb25lbnQgfTtcbiJdfQ==