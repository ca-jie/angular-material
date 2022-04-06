import { Component, ViewChildren, ViewContainerRef } from '@angular/core';
import { MaterialComponent } from './MaterialComponent';
export class MaterialNestedComponent extends MaterialComponent {
    setInstance(instance) {
        instance.viewContainer = () => {
            return this.viewContainers ? this.viewContainers[0] : null;
        };
        super.setInstance(instance);
    }
    renderComponents() {
        if (this.instance.renderComponents) {
            this.instance.renderComponents();
        }
    }
    render() {
        this.viewContainers = this.components.toArray();
        this.renderComponents();
        this.ref.detectChanges();
    }
    ngAfterViewInit() {
        this.components.changes.subscribe(() => this.render());
        this.render();
    }
}
MaterialNestedComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-formio-nested',
                template: '<ng-template #components></ng-template>'
            },] }
];
MaterialNestedComponent.propDecorators = {
    components: [{ type: ViewChildren, args: ['components', { read: ViewContainerRef },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvTWF0ZXJpYWxOZXN0ZWRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWEsWUFBWSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBTXhELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxpQkFBaUI7SUFHNUQsV0FBVyxDQUFDLFFBQWE7UUFDdkIsUUFBUSxDQUFDLGFBQWEsR0FBRyxHQUFHLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0QsQ0FBQyxDQUFDO1FBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLHlDQUF5QzthQUNwRDs7O3lCQUdFLFlBQVksU0FBQyxZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4vTWF0ZXJpYWxDb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtZm9ybWlvLW5lc3RlZCcsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNjb21wb25lbnRzPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE5lc3RlZENvbXBvbmVudCBleHRlbmRzIE1hdGVyaWFsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyB2aWV3Q29udGFpbmVycztcbiAgQFZpZXdDaGlsZHJlbignY29tcG9uZW50cycsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgY29tcG9uZW50czogUXVlcnlMaXN0PFZpZXdDb250YWluZXJSZWY+O1xuICBzZXRJbnN0YW5jZShpbnN0YW5jZTogYW55KSB7XG4gICAgaW5zdGFuY2Uudmlld0NvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXdDb250YWluZXJzID8gdGhpcy52aWV3Q29udGFpbmVyc1swXSA6IG51bGw7XG4gICAgfTtcbiAgICBzdXBlci5zZXRJbnN0YW5jZShpbnN0YW5jZSk7XG4gIH1cblxuICByZW5kZXJDb21wb25lbnRzKCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlLnJlbmRlckNvbXBvbmVudHMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UucmVuZGVyQ29tcG9uZW50cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXJzID0gdGhpcy5jb21wb25lbnRzLnRvQXJyYXkoKTtcbiAgICB0aGlzLnJlbmRlckNvbXBvbmVudHMoKTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVuZGVyKCkpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbn1cbiJdfQ==