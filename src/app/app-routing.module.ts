import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const appRoutes: Routes = [{ path: '', redirectTo: '/listing' , pathMatch: 'full'},
                        {path: 'login_page', component: LoginComponent},
                        {path: 'reactiveform', component: ReactiveformComponent},
                      //  {  path: 'slideshow', component: SlideShowComponent },
                         { path: '**', component: PageNotFoundComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,  { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
 }
