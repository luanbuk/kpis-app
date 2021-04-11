// ADD THIS MODULE IN YOUR PROJECT, AND LOAD IT IN THE MAIN CLASS
import { MatInput } from '@angular/material/input';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

/**
 * Fix for the MatInput required asterisk.
 * https://github.com/angular/components/issues/2574#issuecomment-486656158
 */
Object.defineProperty(MatInput.prototype, 'required', {
  get: function(): boolean {
    if (this._required) {
      return this._required;
    }

    // The required attribute is set
    // when the control return an error from validation with an empty value
    if (this.ngControl && this.ngControl.control && this.ngControl.control.validator) {
      const emptyValueControl = Object.assign({}, this.ngControl.control);
      (emptyValueControl as any).value = null;
      return 'required' in (this.ngControl.control.validator(emptyValueControl) || {});
    }
    return false;
  },
  set: function(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }
});
