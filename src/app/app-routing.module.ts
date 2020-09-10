import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ReactiveformComponent } from './reactiveform/reactiveform.component';

/*const appRoutes: Routes = [{ path: '', redirectTo: '/listing' , pathMatch: 'full'},
                        {path: 'login_page', component: LoginComponent},
                        {path: 'reactiveform', component: ReactiveformComponent},
                          { path: '**', component: PageNotFoundComponent }
                      ];*/
const appRoutes: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,  { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
 }
