const Components = require('formiojs/components/Components').default;
import Component from 'formiojs/components/_classes/component/Component.js';
import { TextFieldComponent } from './textfield/textfield.component';
import { PasswordComponent } from './password/password.component';
import { EmailComponent } from './email/email.component';
import { UrlComponent } from './url/url.component';
import { PhoneNumberComponent } from './phonenumber/phonenumber.component';
import { NumberComponent } from './number/number.component';
import { CurrencyComponent } from './currency/currency.component';
import { DayComponent } from './day/day.component';
import { HiddenComponent } from './hidden/hidden.component';
import { HtmlComponent } from './html/html.component';
import { TagsComponent } from './tags/tags.component';
import { ButtonComponent } from './button/button.component';
import { TextAreaComponent } from './textarea/textarea.component';
import { PanelComponent } from './panel/panel.component';
import { ColumnsComponent } from './columns/columns.component';
import { ContainerComponent } from './container/container.component';
import { TabsComponent } from './tabs/tabs.component';
import { DateTimeComponent } from './date/date.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { ContentComponent } from './content/content.component';
import { SignatureComponent } from './signature/signature.component';
import { SurveyComponent } from './survey/survey.component';
import { SelectBoxesComponent } from './selectboxes/selectboxes.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { WellComponent } from './well/well.component';
import { DataGridComponent } from './datagrid/datagrid.component';
import { EditGridComponent } from './editgrid/editgrid.component';
import { TableComponent } from './table/table.component';
import { FormioComponent } from './MaterialComponent';
import { Wizard } from './formio.wizard';
import { TimeComponent } from './time/time.component';
// Set the components.
const components = {
    textfield: TextFieldComponent,
    password: PasswordComponent,
    url: UrlComponent,
    checkbox: CheckboxComponent,
    email: EmailComponent,
    phoneNumber: PhoneNumberComponent,
    number: NumberComponent,
    currency: CurrencyComponent,
    day: DayComponent,
    hidden: HiddenComponent,
    htmlelement: HtmlComponent,
    tags: TagsComponent,
    textarea: TextAreaComponent,
    button: ButtonComponent,
    datetime: DateTimeComponent,
    panel: PanelComponent,
    columns: ColumnsComponent,
    tabs: TabsComponent,
    table: TableComponent,
    well: WellComponent,
    fieldset: FieldsetComponent,
    content: ContentComponent,
    signature: SignatureComponent,
    survey: SurveyComponent,
    selectboxes: SelectBoxesComponent,
    radio: RadioComponent,
    select: SelectComponent,
    container: ContainerComponent,
    datagrid: DataGridComponent,
    editgrid: EditGridComponent,
    unknown: FormioComponent,
    time: TimeComponent,
    wizard: Wizard
};
export function getComponents() {
    for (const type of Object.keys(components)) {
        const CompClass = components[type];
        CompClass.prototype.render = (function () {
            if (this.materialComponent) {
                return this.materialComponent.renderComponents();
            }
            const viewContainer = this.parent ? this.parent.viewContainer(this) : this.viewContainer(this);
            if (!viewContainer) {
                return;
            }
            const factory = this.options.viewResolver.resolveComponentFactory(CompClass.MaterialComponent);
            const componentRef = viewContainer.createComponent(factory);
            componentRef.instance.setInstance(this);
        });
        const setValue = CompClass.prototype.setValue;
        CompClass.prototype.setValue = (function (...args) {
            if (this.materialComponent) {
                this.materialComponent.setValue(args[0]);
            }
            return setValue.call(this, ...args);
        });
        components[type] = CompClass;
    }
    return components;
}
export function registerComponent(name, CompClass) {
    class DummyComponent extends Component {
    }
    ;
    const formIOComp = DummyComponent;
    formIOComp.MaterialComponent = CompClass;
    formIOComp.prototype.render = (function () {
        if (this.materialComponent) {
            return this.materialComponent;
        }
        const viewContainer = this.parent ? this.parent.viewContainer(this) : this.viewContainer(this);
        if (!viewContainer) {
            return;
        }
        const factory = this.options.viewResolver.resolveComponentFactory(formIOComp.MaterialComponent);
        const componentRef = viewContainer.createComponent(factory);
        componentRef.instance.setInstance(this);
    });
    const setValue = formIOComp.prototype.setValue;
    formIOComp.prototype.setValue = (function (...args) {
        if (this.materialComponent) {
            this.materialComponent.setValue(args[0]);
        }
        return setValue.call(this, ...args);
    });
    Components.addComponent(name, formIOComp);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3JFLE9BQU8sU0FBUyxNQUFNLHFEQUFxRCxDQUFDO0FBRTVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FB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RTVDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21wb25lbnRzID0gcmVxdWlyZSgnZm9ybWlvanMvY29tcG9uZW50cy9Db21wb25lbnRzJykuZGVmYXVsdDtcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnZm9ybWlvanMvY29tcG9uZW50cy9fY2xhc3Nlcy9jb21wb25lbnQvQ29tcG9uZW50LmpzJztcblxuaW1wb3J0IHsgVGV4dEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi90ZXh0ZmllbGQvdGV4dGZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEVtYWlsQ29tcG9uZW50IH0gZnJvbSAnLi9lbWFpbC9lbWFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXJsQ29tcG9uZW50IH0gZnJvbSAnLi91cmwvdXJsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG9uZU51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vcGhvbmVudW1iZXIvcGhvbmVudW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vbnVtYmVyL251bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VycmVuY3lDb21wb25lbnQgfSBmcm9tICcuL2N1cnJlbmN5L2N1cnJlbmN5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXlDb21wb25lbnQgfSBmcm9tICcuL2RheS9kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEhpZGRlbkNvbXBvbmVudCB9IGZyb20gJy4vaGlkZGVuL2hpZGRlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHRtbENvbXBvbmVudCB9IGZyb20gJy4vaHRtbC9odG1sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdzQ29tcG9uZW50IH0gZnJvbSAnLi90YWdzL3RhZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dEFyZWFDb21wb25lbnQgfSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwvcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbHVtbnMvY29sdW1ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJzQ29tcG9uZW50IH0gZnJvbSAnLi90YWJzL3RhYnMuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlL2RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRzZXRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkc2V0L2ZpZWxkc2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25hdHVyZUNvbXBvbmVudCB9IGZyb20gJy4vc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VydmV5Q29tcG9uZW50IH0gZnJvbSAnLi9zdXJ2ZXkvc3VydmV5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RCb3hlc0NvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0Ym94ZXMvc2VsZWN0Ym94ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby9yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWxsQ29tcG9uZW50IH0gZnJvbSAnLi93ZWxsL3dlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRhZ3JpZC9kYXRhZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRWRpdEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2VkaXRncmlkL2VkaXRncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUvdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1pb0NvbXBvbmVudCB9IGZyb20gJy4vTWF0ZXJpYWxDb21wb25lbnQnO1xuaW1wb3J0IHsgV2l6YXJkIH0gZnJvbSAnLi9mb3JtaW8ud2l6YXJkJztcbmltcG9ydCB7IFRpbWVDb21wb25lbnQgfSBmcm9tICcuL3RpbWUvdGltZS5jb21wb25lbnQnXG5cbi8vIFNldCB0aGUgY29tcG9uZW50cy5cbmNvbnN0IGNvbXBvbmVudHM6IGFueSA9IHtcbiAgdGV4dGZpZWxkOiBUZXh0RmllbGRDb21wb25lbnQsXG4gIHBhc3N3b3JkOiBQYXNzd29yZENvbXBvbmVudCxcbiAgdXJsOiBVcmxDb21wb25lbnQsXG4gIGNoZWNrYm94OiBDaGVja2JveENvbXBvbmVudCxcbiAgZW1haWw6IEVtYWlsQ29tcG9uZW50LFxuICBwaG9uZU51bWJlcjogUGhvbmVOdW1iZXJDb21wb25lbnQsXG4gIG51bWJlcjogTnVtYmVyQ29tcG9uZW50LFxuICBjdXJyZW5jeTogQ3VycmVuY3lDb21wb25lbnQsXG4gIGRheTogRGF5Q29tcG9uZW50LFxuICBoaWRkZW46IEhpZGRlbkNvbXBvbmVudCxcbiAgaHRtbGVsZW1lbnQ6IEh0bWxDb21wb25lbnQsXG4gIHRhZ3M6IFRhZ3NDb21wb25lbnQsXG4gIHRleHRhcmVhOiBUZXh0QXJlYUNvbXBvbmVudCxcbiAgYnV0dG9uOiBCdXR0b25Db21wb25lbnQsXG4gIGRhdGV0aW1lOiBEYXRlVGltZUNvbXBvbmVudCxcbiAgcGFuZWw6IFBhbmVsQ29tcG9uZW50LFxuICBjb2x1bW5zOiBDb2x1bW5zQ29tcG9uZW50LFxuICB0YWJzOiBUYWJzQ29tcG9uZW50LFxuICB0YWJsZTogVGFibGVDb21wb25lbnQsXG4gIHdlbGw6IFdlbGxDb21wb25lbnQsXG4gIGZpZWxkc2V0OiBGaWVsZHNldENvbXBvbmVudCxcbiAgY29udGVudDogQ29udGVudENvbXBvbmVudCxcbiAgc2lnbmF0dXJlOiBTaWduYXR1cmVDb21wb25lbnQsXG4gIHN1cnZleTogU3VydmV5Q29tcG9uZW50LFxuICBzZWxlY3Rib3hlczogU2VsZWN0Qm94ZXNDb21wb25lbnQsXG4gIHJhZGlvOiBSYWRpb0NvbXBvbmVudCxcbiAgc2VsZWN0OiBTZWxlY3RDb21wb25lbnQsXG4gIGNvbnRhaW5lcjogQ29udGFpbmVyQ29tcG9uZW50LFxuICBkYXRhZ3JpZDogRGF0YUdyaWRDb21wb25lbnQsXG4gIGVkaXRncmlkOiBFZGl0R3JpZENvbXBvbmVudCxcbiAgdW5rbm93bjogRm9ybWlvQ29tcG9uZW50LFxuICB0aW1lOiBUaW1lQ29tcG9uZW50LFxuICB3aXphcmQ6IFdpemFyZFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBvbmVudHMoKSB7XG4gIGZvciAoY29uc3QgdHlwZSBvZiBPYmplY3Qua2V5cyhjb21wb25lbnRzKSkge1xuICAgIGNvbnN0IENvbXBDbGFzcyA9IGNvbXBvbmVudHNbdHlwZV07XG4gICAgQ29tcENsYXNzLnByb3RvdHlwZS5yZW5kZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMubWF0ZXJpYWxDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0ZXJpYWxDb21wb25lbnQucmVuZGVyQ29tcG9uZW50cygpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC52aWV3Q29udGFpbmVyKHRoaXMpIDogdGhpcy52aWV3Q29udGFpbmVyKHRoaXMpO1xuICAgICAgaWYgKCF2aWV3Q29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLm9wdGlvbnMudmlld1Jlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KENvbXBDbGFzcy5NYXRlcmlhbENvbXBvbmVudCk7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB2aWV3Q29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KS5zZXRJbnN0YW5jZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldFZhbHVlID0gQ29tcENsYXNzLnByb3RvdHlwZS5zZXRWYWx1ZTtcbiAgICBDb21wQ2xhc3MucHJvdG90eXBlLnNldFZhbHVlID0gKGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICBpZiAodGhpcy5tYXRlcmlhbENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLm1hdGVyaWFsQ29tcG9uZW50LnNldFZhbHVlKGFyZ3NbMF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldFZhbHVlLmNhbGwodGhpcywgLi4uYXJncyk7XG4gICAgfSk7XG5cbiAgICBjb21wb25lbnRzW3R5cGVdID0gQ29tcENsYXNzO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudChuYW1lOiBzdHJpbmcsIENvbXBDbGFzczogYW55KSB7XG5cbiAgY2xhc3MgRHVtbXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge307XG4gIGNvbnN0IGZvcm1JT0NvbXAgPSAoRHVtbXlDb21wb25lbnQgYXMgYW55KTtcblxuICBmb3JtSU9Db21wLk1hdGVyaWFsQ29tcG9uZW50ID0gQ29tcENsYXNzO1xuICBmb3JtSU9Db21wLnByb3RvdHlwZS5yZW5kZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm1hdGVyaWFsQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXRlcmlhbENvbXBvbmVudDtcbiAgICB9XG4gICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudmlld0NvbnRhaW5lcih0aGlzKSA6IHRoaXMudmlld0NvbnRhaW5lcih0aGlzKTtcbiAgICBpZiAoIXZpZXdDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMub3B0aW9ucy52aWV3UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoZm9ybUlPQ29tcC5NYXRlcmlhbENvbXBvbmVudCk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgKGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkpLnNldEluc3RhbmNlKHRoaXMpO1xuICB9KTtcblxuICBjb25zdCBzZXRWYWx1ZSA9IGZvcm1JT0NvbXAucHJvdG90eXBlLnNldFZhbHVlO1xuICBmb3JtSU9Db21wLnByb3RvdHlwZS5zZXRWYWx1ZSA9IChmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGlmICh0aGlzLm1hdGVyaWFsQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm1hdGVyaWFsQ29tcG9uZW50LnNldFZhbHVlKGFyZ3NbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gc2V0VmFsdWUuY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgfSk7XG5cbiAgQ29tcG9uZW50cy5hZGRDb21wb25lbnQobmFtZSwgZm9ybUlPQ29tcCk7XG5cbn1cbiJdfQ==