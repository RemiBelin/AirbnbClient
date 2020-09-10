import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { formRoutingModule } from './form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import {SharedModule} from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ReactiveformComponent, TemplateDrivenFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    formRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class FormExamplesModule { }
