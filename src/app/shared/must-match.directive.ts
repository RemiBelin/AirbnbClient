import { Directive, Input } from '@angular/core';
import { Validator, FormGroup, ValidationErrors } from '@angular/forms';
import { MustMatch } from './must-match.validator';

@Directive({
  selector: '[mustMatch]'
})
export class MustMatchDirective implements Validator {
  @Input('mustMatch') mustMatch: string[] = [];

  validate(formGroup: FormGroup): ValidationErrors {
      return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }
}