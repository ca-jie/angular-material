import { Directive, ElementRef, forwardRef, Input } from '@angular/core';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class MaskDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.formatValue(value);
    }
    formatValue(value) {
        if (value !== null) {
            this.elementRef.nativeElement.value = this.format(value);
        }
        else {
            this.elementRef.nativeElement.value = '';
        }
    }
    _onChange(value) {
    }
    writeValue(value) {
        this._value = value;
        this.formatValue(this._value); // format Value
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched() {
    }
}
MaskDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[matMask]',
                providers: [
                    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MaskDirective },
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => MaskDirective),
                        multi: true,
                    }
                ]
            },] }
];
MaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
MaskDirective.propDecorators = {
    format: [{ type: Input, args: ['matMask',] }],
    value: [{ type: Input, args: ['value',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1mb3JtaW8vc3JjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbWFzay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWFuRCxNQUFNLE9BQU8sYUFBYTtJQUl4QixZQUFvQixVQUF3QztRQUF4QyxlQUFVLEdBQVYsVUFBVSxDQUE4QjtJQUFHLENBQUM7SUFHaEUsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNJLEtBQUssQ0FBQyxLQUFvQjtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTyxXQUFXLENBQUMsS0FBb0I7UUFDdEMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFEO2FBQ0k7WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFVO0lBQ3BCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQWU7SUFDaEQsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxpQkFBaUI7SUFDakIsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUU7b0JBQ1QsRUFBQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBQztvQkFDL0Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7d0JBQzVDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7OztZQWRtQixVQUFVOzs7cUJBZ0IzQixLQUFLLFNBQUMsU0FBUztvQkFVZixLQUFLLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFttYXRNYXNrXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBNQVRfSU5QVVRfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBNYXNrRGlyZWN0aXZlfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hc2tEaXJlY3RpdmUpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hc2tEaXJlY3RpdmUge1xuICBASW5wdXQoJ21hdE1hc2snKSBmb3JtYXQ6ICh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50Pikge31cblxuXG4gIGdldCB2YWx1ZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBASW5wdXQoJ3ZhbHVlJylcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZvcm1hdFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5mb3JtYXQodmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgX29uQ2hhbmdlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5mb3JtYXRWYWx1ZSh0aGlzLl92YWx1ZSk7IC8vIGZvcm1hdCBWYWx1ZVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoKSB7XG4gIH1cbn1cbiJdfQ==