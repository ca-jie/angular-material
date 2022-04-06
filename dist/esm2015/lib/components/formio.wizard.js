import { Component, ViewChild } from '@angular/core';
import Wizard from 'formiojs/Wizard';
import Displays from 'formiojs/displays/Displays';
import { MaterialNestedComponent } from './MaterialNestedComponent';
export class MaterialWizardComponent extends MaterialNestedComponent {
    constructor() {
        super(...arguments);
        this.isLinear = true;
        this.prevNumOfPages = 0;
    }
    setInstance(instance) {
        this.isLinear = (instance.options &&
            instance.options.breadcrumbSettings &&
            instance.options.breadcrumbSettings.clickable) ? false : true;
        this.updatePages(instance);
        instance.on('pagesChanged', () => this.updatePages());
        super.setInstance(instance);
    }
    updatePages(instance = this.instance) {
        if (this.prevNumOfPages !== instance.pages.length) {
            instance.pages.forEach((page, pageIndex) => {
                page.viewContainer = () => {
                    return this.viewContainers ? this.viewContainers[pageIndex] : null;
                };
            });
            this.prevNumOfPages = instance.pages.length;
        }
    }
    resetWizard() {
        this.instance.cancel();
        this.stepper.reset();
    }
    nextPage() {
        this.instance.nextPage().then(() => this.stepper.next());
    }
    prevPage() {
        this.instance.prevPage().then(() => this.stepper.previous());
    }
    submit() {
        this.instance.submit();
    }
    renderComponents() {
        if (this.instance.renderComponents && this.instance.pages) {
            this.instance.renderComponents(this.instance.pages.reduce((comps, page) => {
                return comps.concat(page.components);
            }, []));
        }
    }
}
MaterialWizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-wizard',
                template: `
    <mat-horizontal-stepper [linear]="isLinear" #stepper>
      <mat-step *ngFor="let page of instance.pages" [label]="page.component.title">
        <ng-template #components></ng-template>
        <div class="navigation-button-row">
          <button *ngIf="instance.hasButton('cancel')" mat-raised-button (click)="resetWizard()">Cancel</button>
          <button *ngIf="instance.hasButton('previous')" mat-raised-button color="primary" (click)="prevPage()">Previous</button>
          <button *ngIf="instance.hasButton('next')" mat-raised-button color="primary" (click)="nextPage()">Next</button>
          <button *ngIf="instance.hasButton('submit')" mat-raised-button color="primary" (click)="submit()">Submit</button>
        </div>
      </mat-step>
    </mat-horizontal-stepper>`,
                styles: [':host .navigation-button-row { margin-top: 8px; }',
                    ':host .navigation-button-row button { margin-right: 8px; }']
            },] }
];
MaterialWizardComponent.propDecorators = {
    stepper: [{ type: ViewChild, args: ['stepper', { static: true },] }]
};
Wizard.MaterialComponent = MaterialWizardComponent;
Displays.addDisplay('wizard', Wizard);
export { Wizard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWlvLndpemFyZC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb3JtaW8ud2l6YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JDLE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBcUJwRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsdUJBQXVCO0lBbkJwRTs7UUFxQlMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNmLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO0lBa0Q3QixDQUFDO0lBaERDLFdBQVcsQ0FBQyxRQUFhO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FDZCxRQUFRLENBQUMsT0FBTztZQUNoQixRQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFrQjtZQUNuQyxRQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FDOUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUV0RCxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQ2xDLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNqRCxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLEVBQUU7b0JBQ3hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNyRSxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDeEUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2QyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUs3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OzhCQVdrQjt5QkFkMUIsbURBQW1EO29CQUNuRCw0REFBNEQ7YUFjL0Q7OztzQkFFRSxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7QUFxRHRDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyx1QkFBdUIsQ0FBQztBQUNuRCxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U3RlcHBlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xuaW1wb3J0IFdpemFyZCBmcm9tICdmb3JtaW9qcy9XaXphcmQnO1xuaW1wb3J0IERpc3BsYXlzIGZyb20gJ2Zvcm1pb2pzL2Rpc3BsYXlzL0Rpc3BsYXlzJztcbmltcG9ydCB7IE1hdGVyaWFsTmVzdGVkQ29tcG9uZW50IH0gZnJvbSAnLi9NYXRlcmlhbE5lc3RlZENvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hdC1mb3JtaW8td2l6YXJkJyxcbiAgc3R5bGVzOiBbXG4gICAgJzpob3N0IC5uYXZpZ2F0aW9uLWJ1dHRvbi1yb3cgeyBtYXJnaW4tdG9wOiA4cHg7IH0nLFxuICAgICc6aG9zdCAubmF2aWdhdGlvbi1idXR0b24tcm93IGJ1dHRvbiB7IG1hcmdpbi1yaWdodDogOHB4OyB9J1xuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtaG9yaXpvbnRhbC1zdGVwcGVyIFtsaW5lYXJdPVwiaXNMaW5lYXJcIiAjc3RlcHBlcj5cbiAgICAgIDxtYXQtc3RlcCAqbmdGb3I9XCJsZXQgcGFnZSBvZiBpbnN0YW5jZS5wYWdlc1wiIFtsYWJlbF09XCJwYWdlLmNvbXBvbmVudC50aXRsZVwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2NvbXBvbmVudHM+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tYnV0dG9uLXJvd1wiPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnN0YW5jZS5oYXNCdXR0b24oJ2NhbmNlbCcpXCIgbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInJlc2V0V2l6YXJkKClcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaW5zdGFuY2UuaGFzQnV0dG9uKCdwcmV2aW91cycpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInByZXZQYWdlKClcIj5QcmV2aW91czwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnN0YW5jZS5oYXNCdXR0b24oJ25leHQnKVwiIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJuZXh0UGFnZSgpXCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnN0YW5jZS5oYXNCdXR0b24oJ3N1Ym1pdCcpXCIgbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInN1Ym1pdCgpXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYXQtc3RlcD5cbiAgICA8L21hdC1ob3Jpem9udGFsLXN0ZXBwZXI+YFxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbFdpemFyZENvbXBvbmVudCBleHRlbmRzIE1hdGVyaWFsTmVzdGVkQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnc3RlcHBlcicsIHtzdGF0aWM6IHRydWV9KSBzdGVwcGVyOiBNYXRTdGVwcGVyO1xuICBwdWJsaWMgaXNMaW5lYXIgPSB0cnVlO1xuICBwcml2YXRlIHByZXZOdW1PZlBhZ2VzID0gMDtcblxuICBzZXRJbnN0YW5jZShpbnN0YW5jZTogYW55KSB7XG4gICAgdGhpcy5pc0xpbmVhciA9IChcbiAgICAgIGluc3RhbmNlLm9wdGlvbnMgJiZcbiAgICAgIGluc3RhbmNlLm9wdGlvbnMuYnJlYWRjcnVtYlNldHRpbmdzICYmXG4gICAgICBpbnN0YW5jZS5vcHRpb25zLmJyZWFkY3J1bWJTZXR0aW5ncy5jbGlja2FibGVcbiAgICApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgdGhpcy51cGRhdGVQYWdlcyhpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2Uub24oJ3BhZ2VzQ2hhbmdlZCcsICgpID0+IHRoaXMudXBkYXRlUGFnZXMoKSk7XG5cbiAgICBzdXBlci5zZXRJbnN0YW5jZShpbnN0YW5jZSk7XG4gIH1cblxuICB1cGRhdGVQYWdlcyhpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2UpIHtcbiAgICBpZiAodGhpcy5wcmV2TnVtT2ZQYWdlcyAhPT0gaW5zdGFuY2UucGFnZXMubGVuZ3RoKSB7XG4gICAgICBpbnN0YW5jZS5wYWdlcy5mb3JFYWNoKChwYWdlLCBwYWdlSW5kZXgpID0+IHtcbiAgICAgICAgcGFnZS52aWV3Q29udGFpbmVyID0gKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnZpZXdDb250YWluZXJzID8gdGhpcy52aWV3Q29udGFpbmVyc1twYWdlSW5kZXhdIDogbnVsbDtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcmV2TnVtT2ZQYWdlcyA9IGluc3RhbmNlLnBhZ2VzLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXNldFdpemFyZCgpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNhbmNlbCgpO1xuICAgIHRoaXMuc3RlcHBlci5yZXNldCgpO1xuICB9XG5cbiAgbmV4dFBhZ2UoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5uZXh0UGFnZSgpLnRoZW4oKCkgPT4gdGhpcy5zdGVwcGVyLm5leHQoKSk7XG4gIH1cblxuICBwcmV2UGFnZSgpIHtcbiAgICB0aGlzLmluc3RhbmNlLnByZXZQYWdlKCkudGhlbigoKSA9PiB0aGlzLnN0ZXBwZXIucHJldmlvdXMoKSk7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5zdWJtaXQoKTtcbiAgfVxuXG4gIHJlbmRlckNvbXBvbmVudHMoKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UucmVuZGVyQ29tcG9uZW50cyAmJiB0aGlzLmluc3RhbmNlLnBhZ2VzKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnJlbmRlckNvbXBvbmVudHModGhpcy5pbnN0YW5jZS5wYWdlcy5yZWR1Y2UoKGNvbXBzLCBwYWdlKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wcy5jb25jYXQocGFnZS5jb21wb25lbnRzKTtcbiAgICAgIH0sIFtdKSk7XG4gICAgfVxuICB9XG59XG5XaXphcmQuTWF0ZXJpYWxDb21wb25lbnQgPSBNYXRlcmlhbFdpemFyZENvbXBvbmVudDtcbkRpc3BsYXlzLmFkZERpc3BsYXkoJ3dpemFyZCcsIFdpemFyZCk7XG5leHBvcnQgeyBXaXphcmQgfTtcbiJdfQ==