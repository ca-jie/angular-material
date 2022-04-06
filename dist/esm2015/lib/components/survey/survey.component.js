import { Component } from '@angular/core';
import { MaterialComponent } from '../MaterialComponent';
import SurveyComponent from 'formiojs/components/survey/Survey.js';
import { FormControl } from '@angular/forms';
export class MaterialSurveyComponent extends MaterialComponent {
    constructor() {
        super(...arguments);
        this.controls = {};
    }
    getFormControl(question) {
        if (!this.controls[question]) {
            this.controls[question] = new FormControl();
            if (this.instance.shouldDisabled) {
                this.controls[question].disable();
            }
        }
        return this.controls[question];
    }
    setDisabled(disabled) {
        const method = disabled ? 'disable' : 'enable';
        for (const question in this.controls) {
            if (this.controls.hasOwnProperty(question)) {
                this.controls[question][method]();
            }
        }
    }
    getValue() {
        const values = {};
        for (const question in this.controls) {
            if (this.controls.hasOwnProperty(question)) {
                values[question] = this.controls[question].value || false;
            }
        }
        return values;
    }
    setValue(value) {
        for (const question in value) {
            if (value.hasOwnProperty(question)) {
                const control = this.getFormControl(question);
                if (control) {
                    control.setValue(value[question] || false);
                }
            }
        }
    }
    getUniqueName(question) {
        return `${this.instance.id}-${question}`;
    }
}
MaterialSurveyComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-survey',
                template: `

      <mat-formio-form-field
              [instance]="instance"
              [componentTemplate]="componentTemplate"
              [showDescription]="false"
      ></mat-formio-form-field>
      <ng-template #componentTemplate let-hasLabel>

        <table class="mat-elevation-z8 mat-table" fxFill>
          <thead>
          <tr class="mat-header-row">
            <th class="mat-header-cell">
              <h2 *ngIf="hasLabel">
                <span [instance]="instance" matFormioLabel></span>
              </h2>
            </th>
            <th class="mat-header-cell"
                *ngFor="let value of instance.component.values"
                style="text-align: center;"
            >
              {{ value.label }}
            </th>
          </tr>
          </thead>

          <tbody>
          <tr class="mat-row" *ngFor="let question of instance.component.questions; index as i;">
            <td class="mat-cell">{{ question.label }}</td>
            <td class="mat-cell"
                *ngFor="let value of instance.component.values; index as j;"
                style="text-align: center;"
            >
              <mat-radio-group (change)="onChange()"
                               [formControl]="getFormControl(question.value)"
                               [name]="getUniqueName(question.value)"
              >
                <mat-radio-button [value]="value.value"></mat-radio-button>
              </mat-radio-group>
            </td>
          </tr>
          <mat-hint *ngIf="instance.component.description" class="mat-formio-component-description">
            {{ instance.component.description }}
          </mat-hint>
          </tbody>

          <mat-error *ngIf="instance.error">{{ instance.error.message }}</mat-error>
        </table>
      </ng-template>
    `
            },] }
];
SurveyComponent.MaterialComponent = MaterialSurveyComponent;
export { SurveyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VydmV5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdXJ2ZXkvc3VydmV5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sZUFBZSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXVEN0MsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGlCQUFpQjtJQXJEOUQ7O1FBc0RTLGFBQVEsR0FBUSxFQUFFLENBQUM7SUE0QzVCLENBQUM7SUEzQ0MsY0FBYyxDQUFDLFFBQVE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzVDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkM7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQVE7UUFDbEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvQyxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDMUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQzthQUMzRDtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ1osS0FBSyxNQUFNLFFBQVEsSUFBSSxLQUFLLEVBQUU7WUFDNUIsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztpQkFDNUM7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUFRO1FBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7WUFqR0YsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWlEVDthQUNKOztBQStDRCxlQUFlLENBQUMsaUJBQWlCLEdBQUcsdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL01hdGVyaWFsQ29tcG9uZW50JztcbmltcG9ydCBTdXJ2ZXlDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9zdXJ2ZXkvU3VydmV5LmpzJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21hdC1mb3JtaW8tc3VydmV5JyxcbiAgICB0ZW1wbGF0ZTogYFxuXG4gICAgICA8bWF0LWZvcm1pby1mb3JtLWZpZWxkXG4gICAgICAgICAgICAgIFtpbnN0YW5jZV09XCJpbnN0YW5jZVwiXG4gICAgICAgICAgICAgIFtjb21wb25lbnRUZW1wbGF0ZV09XCJjb21wb25lbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtzaG93RGVzY3JpcHRpb25dPVwiZmFsc2VcIlxuICAgICAgPjwvbWF0LWZvcm1pby1mb3JtLWZpZWxkPlxuICAgICAgPG5nLXRlbXBsYXRlICNjb21wb25lbnRUZW1wbGF0ZSBsZXQtaGFzTGFiZWw+XG5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OCBtYXQtdGFibGVcIiBmeEZpbGw+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBjbGFzcz1cIm1hdC1oZWFkZXItcm93XCI+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJtYXQtaGVhZGVyLWNlbGxcIj5cbiAgICAgICAgICAgICAgPGgyICpuZ0lmPVwiaGFzTGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBbaW5zdGFuY2VdPVwiaW5zdGFuY2VcIiBtYXRGb3JtaW9MYWJlbD48L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwibWF0LWhlYWRlci1jZWxsXCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgaW5zdGFuY2UuY29tcG9uZW50LnZhbHVlc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgdmFsdWUubGFiZWwgfX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciBjbGFzcz1cIm1hdC1yb3dcIiAqbmdGb3I9XCJsZXQgcXVlc3Rpb24gb2YgaW5zdGFuY2UuY29tcG9uZW50LnF1ZXN0aW9uczsgaW5kZXggYXMgaTtcIj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cIm1hdC1jZWxsXCI+e3sgcXVlc3Rpb24ubGFiZWwgfX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwibWF0LWNlbGxcIlxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiBpbnN0YW5jZS5jb21wb25lbnQudmFsdWVzOyBpbmRleCBhcyBqO1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cCAoY2hhbmdlKT1cIm9uQ2hhbmdlKClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJnZXRGb3JtQ29udHJvbChxdWVzdGlvbi52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImdldFVuaXF1ZU5hbWUocXVlc3Rpb24udmFsdWUpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIFt2YWx1ZV09XCJ2YWx1ZS52YWx1ZVwiPjwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPG1hdC1oaW50ICpuZ0lmPVwiaW5zdGFuY2UuY29tcG9uZW50LmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJtYXQtZm9ybWlvLWNvbXBvbmVudC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge3sgaW5zdGFuY2UuY29tcG9uZW50LmRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgPC9tYXQtaGludD5cbiAgICAgICAgICA8L3Rib2R5PlxuXG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cImluc3RhbmNlLmVycm9yXCI+e3sgaW5zdGFuY2UuZXJyb3IubWVzc2FnZSB9fTwvbWF0LWVycm9yPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsU3VydmV5Q29tcG9uZW50IGV4dGVuZHMgTWF0ZXJpYWxDb21wb25lbnQge1xuICBwdWJsaWMgY29udHJvbHM6IGFueSA9IHt9O1xuICBnZXRGb3JtQ29udHJvbChxdWVzdGlvbikge1xuICAgIGlmICghdGhpcy5jb250cm9sc1txdWVzdGlvbl0pIHtcbiAgICAgIHRoaXMuY29udHJvbHNbcXVlc3Rpb25dID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZS5zaG91bGREaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xzW3F1ZXN0aW9uXS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzW3F1ZXN0aW9uXTtcbiAgfVxuXG4gIHNldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgY29uc3QgbWV0aG9kID0gZGlzYWJsZWQgPyAnZGlzYWJsZScgOiAnZW5hYmxlJztcbiAgICBmb3IgKGNvbnN0IHF1ZXN0aW9uIGluIHRoaXMuY29udHJvbHMpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KHF1ZXN0aW9uKSkge1xuICAgICAgICB0aGlzLmNvbnRyb2xzW3F1ZXN0aW9uXVttZXRob2RdKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgZm9yIChjb25zdCBxdWVzdGlvbiBpbiB0aGlzLmNvbnRyb2xzKSB7XG4gICAgICBpZiAodGhpcy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShxdWVzdGlvbikpIHtcbiAgICAgICAgdmFsdWVzW3F1ZXN0aW9uXSA9IHRoaXMuY29udHJvbHNbcXVlc3Rpb25dLnZhbHVlIHx8IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBmb3IgKGNvbnN0IHF1ZXN0aW9uIGluIHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocXVlc3Rpb24pKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLmdldEZvcm1Db250cm9sKHF1ZXN0aW9uKTtcbiAgICAgICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICBjb250cm9sLnNldFZhbHVlKHZhbHVlW3F1ZXN0aW9uXSB8fCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRVbmlxdWVOYW1lKHF1ZXN0aW9uKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuaW5zdGFuY2UuaWR9LSR7cXVlc3Rpb259YDtcbiAgfVxufVxuU3VydmV5Q29tcG9uZW50Lk1hdGVyaWFsQ29tcG9uZW50ID0gTWF0ZXJpYWxTdXJ2ZXlDb21wb25lbnQ7XG5leHBvcnQgeyBTdXJ2ZXlDb21wb25lbnQgfTtcbiJdfQ==