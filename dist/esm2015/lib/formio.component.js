import { Component, Optional, ChangeDetectorRef, ViewContainerRef, ViewChild, ComponentFactoryResolver, NgZone } from '@angular/core';
import { FormioAppConfig, FormioBaseComponent } from '@formio/angular';
import { Form } from './renderer';
import { get } from 'lodash';
export class FormioComponent extends FormioBaseComponent {
    constructor(resolver, cd, ngZone, config) {
        super(ngZone, config);
        this.resolver = resolver;
        this.cd = cd;
        this.ngZone = ngZone;
        this.config = config;
    }
    getRendererOptions() {
        const rendererOptions = super.getRendererOptions();
        return Object.assign(Object.assign({}, rendererOptions), { validateOnInit: get(rendererOptions, 'validateOnInit', true) });
    }
    createRenderer() {
        const options = this.getRendererOptions();
        const flags = {
            validateOnInit: options.validateOnInit
        };
        options.viewResolver = this.resolver;
        const form = new Form();
        form._form = this.form;
        form.options = options;
        form.options.events = form.events;
        form.instance = form.create(this.form.display);
        form.instance.viewContainer = () => this.formioViewContainer;
        if (this.submission && this.submission.data) {
            form.instance.data = this.submission.data;
        }
        this.ngZone.run(() => form.instance.setForm(this.form, flags)
            .then(() => form.readyResolve(form.instance))
            .catch(() => form.readyReject()));
        return form.instance;
    }
}
FormioComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio',
                template: `
    <mat-spinner *ngIf="isLoading"></mat-spinner>
    <div *ngIf="!this.options?.disableAlerts">
      <div *ngFor="let alert of alerts.alerts"
           class="alert alert-{{ alert.type }}"
           role="alert"
      >
        {{ alert.message }}
      </div>
    </div>
    <div fxLayout="column" fxLayoutGap="1em">
      <ng-template #formio></ng-template>
    </div>
  `,
                styles: [`.alert-danger {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }
    .alert-success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }
    .alert {
      position: relative;
      padding: .75rem 1.25rem;
      margin-bottom: 0.5rem;
      border: 1px solid transparent;
      border-radius: .25rem;
    }
    ::ng-deep mat-card {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
    }
    `]
            },] }
];
FormioComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: FormioAppConfig, decorators: [{ type: Optional }] }
];
FormioComponent.propDecorators = {
    formioViewContainer: [{ type: ViewChild, args: ['formio', { static: true, read: ViewContainerRef },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvZm9ybWlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNySixPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBMEM3QixNQUFNLE9BQU8sZUFBZ0IsU0FBUSxtQkFBbUI7SUFFdEQsWUFDVSxRQUFrQyxFQUNsQyxFQUFxQixFQUN0QixNQUFjLEVBQ0YsTUFBdUI7UUFFMUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUxkLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDRixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUc1QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE1BQU0sZUFBZSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25ELHVDQUFXLGVBQWUsS0FBRSxjQUFjLEVBQUUsR0FBRyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBRTtJQUM1RixDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFDLE1BQU0sS0FBSyxHQUFHO1lBQ1osY0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjO1NBQ3ZDLENBQUM7UUFDRixPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDN0QsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7YUFDMUQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FDakMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7WUE3RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQXlCdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0dBYVQ7eUJBcENDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQkM7YUFnQko7OztZQTVDNkUsd0JBQXdCO1lBQXhFLGlCQUFpQjtZQUF5RCxNQUFNO1lBQ3JHLGVBQWUsdUJBa0RuQixRQUFROzs7a0NBTFYsU0FBUyxTQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPcHRpb25hbCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdDb250YWluZXJSZWYsIFZpZXdDaGlsZCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBOZ1pvbmUsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1pb0FwcENvbmZpZywgRm9ybWlvQmFzZUNvbXBvbmVudCB9IGZyb20gJ0Bmb3JtaW8vYW5ndWxhcic7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWZvcm1pbycsXG4gIHN0eWxlczogW1xuICAgIGAuYWxlcnQtZGFuZ2VyIHtcbiAgICAgIGNvbG9yOiAjNzIxYzI0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbiAgICB9XG4gICAgLmFsZXJ0LXN1Y2Nlc3Mge1xuICAgICAgY29sb3I6ICMxNTU3MjQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYzNlNmNiO1xuICAgIH1cbiAgICAuYWxlcnQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgICB9XG4gICAgOjpuZy1kZWVwIG1hdC1jYXJkIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICBgXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1zcGlubmVyICpuZ0lmPVwiaXNMb2FkaW5nXCI+PC9tYXQtc3Bpbm5lcj5cbiAgICA8ZGl2ICpuZ0lmPVwiIXRoaXMub3B0aW9ucz8uZGlzYWJsZUFsZXJ0c1wiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzLmFsZXJ0c1wiXG4gICAgICAgICAgIGNsYXNzPVwiYWxlcnQgYWxlcnQte3sgYWxlcnQudHlwZSB9fVwiXG4gICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICA+XG4gICAgICAgIHt7IGFsZXJ0Lm1lc3NhZ2UgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEdhcD1cIjFlbVwiPlxuICAgICAgPG5nLXRlbXBsYXRlICNmb3JtaW8+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtaW9Db21wb25lbnQgZXh0ZW5kcyBGb3JtaW9CYXNlQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnZm9ybWlvJywge3N0YXRpYzogdHJ1ZSwgcmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGZvcm1pb1ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwdWJsaWMgbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNvbmZpZzogRm9ybWlvQXBwQ29uZmlnXG4gICkge1xuICAgIHN1cGVyKG5nWm9uZSwgY29uZmlnKTtcbiAgfVxuXG4gIGdldFJlbmRlcmVyT3B0aW9ucygpOiBhbnkge1xuICAgIGNvbnN0IHJlbmRlcmVyT3B0aW9ucyA9IHN1cGVyLmdldFJlbmRlcmVyT3B0aW9ucygpO1xuICAgIHJldHVybiB7Li4ucmVuZGVyZXJPcHRpb25zLCB2YWxpZGF0ZU9uSW5pdDogZ2V0KHJlbmRlcmVyT3B0aW9ucywgJ3ZhbGlkYXRlT25Jbml0JywgdHJ1ZSkgfVxuICB9XG5cbiAgY3JlYXRlUmVuZGVyZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0UmVuZGVyZXJPcHRpb25zKCk7XG4gICAgY29uc3QgZmxhZ3MgPSB7XG4gICAgICB2YWxpZGF0ZU9uSW5pdDogb3B0aW9ucy52YWxpZGF0ZU9uSW5pdFxuICAgIH07XG4gICAgb3B0aW9ucy52aWV3UmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyO1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybSgpO1xuICAgIGZvcm0uX2Zvcm0gPSB0aGlzLmZvcm07XG4gICAgZm9ybS5vcHRpb25zID0gb3B0aW9ucztcbiAgICBmb3JtLm9wdGlvbnMuZXZlbnRzID0gZm9ybS5ldmVudHM7XG4gICAgZm9ybS5pbnN0YW5jZSA9IGZvcm0uY3JlYXRlKHRoaXMuZm9ybS5kaXNwbGF5KTtcbiAgICBmb3JtLmluc3RhbmNlLnZpZXdDb250YWluZXIgPSAoKSA9PiB0aGlzLmZvcm1pb1ZpZXdDb250YWluZXI7XG4gICAgaWYgKHRoaXMuc3VibWlzc2lvbiAmJiB0aGlzLnN1Ym1pc3Npb24uZGF0YSkge1xuICAgICAgZm9ybS5pbnN0YW5jZS5kYXRhID0gdGhpcy5zdWJtaXNzaW9uLmRhdGE7XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiBmb3JtLmluc3RhbmNlLnNldEZvcm0odGhpcy5mb3JtLCBmbGFncylcbiAgICAgIC50aGVuKCgpID0+IGZvcm0ucmVhZHlSZXNvbHZlKGZvcm0uaW5zdGFuY2UpKVxuICAgICAgLmNhdGNoKCgpID0+IGZvcm0ucmVhZHlSZWplY3QoKSlcbiAgICApO1xuICAgIHJldHVybiBmb3JtLmluc3RhbmNlO1xuICB9XG59XG4iXX0=