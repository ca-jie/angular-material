import FormioComponent from 'formiojs/components/_classes/component/Component.js';
export default (() => {
    const beforeSubmit = FormioComponent.prototype.beforeSubmit;
    FormioComponent.prototype.beforeSubmit = function (...args) {
        if (this.materialComponent) {
            this.materialComponent.beforeSubmit();
        }
        return beforeSubmit.call(this, ...args);
    };
    Object.defineProperty(FormioComponent.prototype, 'disabled', {
        set(disabled) {
            this._disabled = disabled;
            if (this.materialComponent) {
                this.materialComponent.setDisabled(disabled);
            }
        }
    });
    Object.defineProperty(FormioComponent.prototype, 'visible', {
        set(visible) {
            if (this._visible !== visible) {
                this._visible = visible;
                this.clearOnHide();
                this.redraw();
            }
            if (this.materialComponent) {
                this.materialComponent.setVisible(visible);
            }
        }
    });
    return FormioComponent;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9wcm9qZWN0cy9hbmd1bGFyLW1hdGVyaWFsLWZvcm1pby9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9CYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZUFBZSxNQUFNLHFEQUFxRCxDQUFDO0FBRWxGLGVBQWUsQ0FBQyxHQUFHLEVBQUU7SUFDbkIsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7SUFDNUQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBUyxHQUFHLElBQUk7UUFDdkQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQztJQUVGLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUU7UUFDM0QsR0FBRyxDQUFDLFFBQVE7WUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUM7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFO1FBQzFELEdBQUcsQ0FBQyxPQUFPO1lBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7WUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUM7S0FDRixDQUFDLENBQUM7SUFDSCxPQUFPLGVBQWUsQ0FBQztBQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1pb0NvbXBvbmVudCBmcm9tICdmb3JtaW9qcy9jb21wb25lbnRzL19jbGFzc2VzL2NvbXBvbmVudC9Db21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICBjb25zdCBiZWZvcmVTdWJtaXQgPSBGb3JtaW9Db21wb25lbnQucHJvdG90eXBlLmJlZm9yZVN1Ym1pdDtcbiAgRm9ybWlvQ29tcG9uZW50LnByb3RvdHlwZS5iZWZvcmVTdWJtaXQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgaWYgKHRoaXMubWF0ZXJpYWxDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubWF0ZXJpYWxDb21wb25lbnQuYmVmb3JlU3VibWl0KCk7XG4gICAgfVxuICAgIHJldHVybiBiZWZvcmVTdWJtaXQuY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybWlvQ29tcG9uZW50LnByb3RvdHlwZSwgJ2Rpc2FibGVkJywge1xuICAgIHNldChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIGlmICh0aGlzLm1hdGVyaWFsQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubWF0ZXJpYWxDb21wb25lbnQuc2V0RGlzYWJsZWQoZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm1pb0NvbXBvbmVudC5wcm90b3R5cGUsICd2aXNpYmxlJywge1xuICAgIHNldCh2aXNpYmxlKSB7XG4gICAgICBpZiAodGhpcy5fdmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgdGhpcy5jbGVhck9uSGlkZSgpO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubWF0ZXJpYWxDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5tYXRlcmlhbENvbXBvbmVudC5zZXRWaXNpYmxlKHZpc2libGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBGb3JtaW9Db21wb25lbnQ7XG59KSgpO1xuXG4iXX0=