import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [{ path: '', component: ListingComponent},
                        {path: 'login_page', component: LoginComponent},
                        {path: 'reactiveform', component: ReactiveformComponent},
                      //  {  path: 'slideshow', component: SlideShowComponent },
                        { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
 }
