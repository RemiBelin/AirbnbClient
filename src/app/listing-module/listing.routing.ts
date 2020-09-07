import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';


const listingRoutes: Routes = [{path: 'listing', component: ListingComponent},
                       ];

@NgModule({
  imports: [RouterModule.forChild(listingRoutes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { 

  
 }
