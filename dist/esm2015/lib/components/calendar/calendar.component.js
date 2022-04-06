import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
export class MaterialCalendarComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.timeSelectEvent = new EventEmitter();
        this.dateSelectEvent = new EventEmitter();
    }
    setInstance(instance) {
        super.setInstance(instance);
    }
    setExistedDate(value) {
        this.selectedDate = value;
    }
    setExistedTime(value, forTime) {
        this.selectedTime = value;
        this.time.setValue(forTime);
    }
    onDate(event) {
        this.selectedDate = event;
        this.dateSelectEvent.emit(this.selectedDate);
    }
    onTime(event) {
        this.selectedTime = event.value;
        this.timeSelectEvent.emit(this.selectedTime);
    }
    getPopupStyles() {
        return {
            position: 'absolute',
            zIndex: '1000',
            display: 'flex',
            maxWidth: '100%',
            maxHeight: '100%',
            top: '90px',
            left: '30px'
        };
    }
}
MaterialCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-calendar',
                template: `
    <div class="container" fxLayout="row" fxLayout.xs="column" fxLayoutGap="0.5%">
      <div [ngStyle]="getPopupStyles()">
        <mat-card style="padding: 0;">
          <mat-calendar
                  [dateFilter]="dateFilter"
                  [maxDate]="maxDate"
                  [minDate]="minDate"
                  [selected]="selectedDate"
                  (selectedChange)="onDate($event)"
                  class="calendar"
                  *ngIf="enableDate !== false"
          >
          </mat-calendar>
          <mat-formio-time
                  #time
                  [hourStep]="hourStep"
                  [instance]="instance"
                  [renderElementOnly]="true"
                  [minuteStep]="minuteStep"
                  (selectedEvent)="onTime($event)"
                  class="ml-3 formio-time"
                  *ngIf="enableTime"
          >
          </mat-formio-time>
        </mat-card>
      </div>
    </div>
  `,
                styles: [`.calendar, .formio-time {
      padding: 16px;
      background-color: white;
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    }
    .formio-time {
      display: flex;
    }
    `]
            },] }
];
MaterialCalendarComponent.propDecorators = {
    time: [{ type: ViewChild, args: ['time',] }],
    enableDate: [{ type: Input }],
    enableTime: [{ type: Input }],
    minDate: [{ type: Input }],
    maxDate: [{ type: Input }],
    dateFilter: [{ type: Input }],
    hourStep: [{ type: Input }],
    minuteStep: [{ type: Input }],
    timeSelectEvent: [{ type: Output }],
    dateSelectEvent: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZm9ybWlvL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVksTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQTZDekQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGlCQUFpQjtJQTVDaEU7O1FBMERZLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFvQ3RELENBQUM7SUFsQ0MsV0FBVyxDQUFDLFFBQWE7UUFDdkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFLLEVBQUUsT0FBTztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFFLE1BQU07WUFDaEIsU0FBUyxFQUFFLE1BQU07WUFDakIsR0FBRyxFQUFFLE1BQU07WUFDWCxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUE7SUFDSCxDQUFDOzs7WUE5RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBWS9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCVDt5QkF0Q0M7Ozs7Ozs7O0tBUUM7YUErQko7OzttQkFPRSxTQUFTLFNBQUMsTUFBTTt5QkFFaEIsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxNQUFNOzhCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdNb2R1bGUsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vTWF0ZXJpYWxDb21wb25lbnQnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pby1jYWxlbmRhcicsXG4gIHN0eWxlczogW1xuICAgIGAuY2FsZW5kYXIsIC5mb3JtaW8tdGltZSB7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XG4gICAgfVxuICAgIC5mb3JtaW8tdGltZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGZ4TGF5b3V0PVwicm93XCIgZnhMYXlvdXQueHM9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjAuNSVcIj5cbiAgICAgIDxkaXYgW25nU3R5bGVdPVwiZ2V0UG9wdXBTdHlsZXMoKVwiPlxuICAgICAgICA8bWF0LWNhcmQgc3R5bGU9XCJwYWRkaW5nOiAwO1wiPlxuICAgICAgICAgIDxtYXQtY2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cImRhdGVGaWx0ZXJcIlxuICAgICAgICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZERhdGVcIlxuICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uRGF0ZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXJcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJlbmFibGVEYXRlICE9PSBmYWxzZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvbWF0LWNhbGVuZGFyPlxuICAgICAgICAgIDxtYXQtZm9ybWlvLXRpbWVcbiAgICAgICAgICAgICAgICAgICN0aW1lXG4gICAgICAgICAgICAgICAgICBbaG91clN0ZXBdPVwiaG91clN0ZXBcIlxuICAgICAgICAgICAgICAgICAgW2luc3RhbmNlXT1cImluc3RhbmNlXCJcbiAgICAgICAgICAgICAgICAgIFtyZW5kZXJFbGVtZW50T25seV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIFttaW51dGVTdGVwXT1cIm1pbnV0ZVN0ZXBcIlxuICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkRXZlbnQpPVwib25UaW1lKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtbC0zIGZvcm1pby10aW1lXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZW5hYmxlVGltZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvbWF0LWZvcm1pby10aW1lPlxuICAgICAgICA8L21hdC1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQge1xuICBwdWJsaWMgc2VsZWN0ZWREYXRlOiBhbnk7XG4gIHB1YmxpYyBzZWxlY3RlZFRpbWU6IGFueTtcbiAgcHVibGljIHNlbGVjdGVkVGltZUNvbXBvbmVudDogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ3RpbWUnKSB0aW1lO1xuXG4gIEBJbnB1dCgpIGVuYWJsZURhdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGVuYWJsZVRpbWU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbkRhdGU6IGFueTtcbiAgQElucHV0KCkgbWF4RGF0ZTogYW55O1xuICBASW5wdXQoKSBkYXRlRmlsdGVyOiBhbnk7XG4gIEBJbnB1dCgpIGhvdXJTdGVwOiBhbnk7XG4gIEBJbnB1dCgpIG1pbnV0ZVN0ZXA6IGFueTtcbiAgQE91dHB1dCgpIHRpbWVTZWxlY3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0ZVNlbGVjdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgc2V0SW5zdGFuY2UoaW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyLnNldEluc3RhbmNlKGluc3RhbmNlKTtcbiAgfVxuXG4gIHNldEV4aXN0ZWREYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldEV4aXN0ZWRUaW1lKHZhbHVlLCBmb3JUaW1lKSB7XG4gICAgdGhpcy5zZWxlY3RlZFRpbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnRpbWUuc2V0VmFsdWUoZm9yVGltZSk7XG4gIH1cblxuICBvbkRhdGUoZXZlbnQpe1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZXZlbnQ7XG4gICAgdGhpcy5kYXRlU2VsZWN0RXZlbnQuZW1pdCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gIH1cblxuICBvblRpbWUoZXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkVGltZSA9IGV2ZW50LnZhbHVlO1xuICAgIHRoaXMudGltZVNlbGVjdEV2ZW50LmVtaXQodGhpcy5zZWxlY3RlZFRpbWUpO1xuICB9XG5cbiAgZ2V0UG9wdXBTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgekluZGV4OiAnMTAwMCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICB0b3A6ICc5MHB4JyxcbiAgICAgIGxlZnQ6ICczMHB4J1xuICAgIH1cbiAgfVxufVxuIl19