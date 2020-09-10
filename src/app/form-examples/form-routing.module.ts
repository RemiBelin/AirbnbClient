import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const formRoutes: Routes = [{path: 'reactive', component: ReactiveformComponent},
                            {path: 'template', component: TemplateDrivenFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(formRoutes)],
  exports: [RouterModule]
})
export class formRoutingModule { 

  
 }
