import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MustMatchDirective } from './must-match.directive';


@NgModule({
  declarations: [MustMatchDirective],
  imports: [
    CommonModule
  ],
  exports:  [MustMatchDirective ]
})
export class SharedModule { }
