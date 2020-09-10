import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ListingModule } from '../listing-module/listing.module';
import { FormExamplesModule } from '../form-examples/form-examples.module';

const routes: Routes = [
  {
    path: 'display',
    component: LayoutComponent,
    children: [
      { path: 'listing', loadChildren: () => ListingModule },
      { path: 'forms', loadChildren: () => FormExamplesModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
