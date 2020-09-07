import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
//import { HERO1,HERO2, HERO3 } from './heroes';
import {MatCardModule} from '@angular/material/card'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion'; 

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import { bookingData } from "./bookingData";
import {ListingModule} from "./listing-module/listing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactiveformComponent,
    PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
     HttpClientModule,
     ReactiveFormsModule,
    MatButtonModule,
     ListingModule,
     AppRoutingModule //C'est important de le mettre à la fin!
   
  ],
  providers: [
    {provide: 'api', useValue: 'api/v5/dialogflow'},
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    //{provide: ListingService },
    {provide: bookingData, useClass:bookingData }  //same as : {provide: bookingData }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    //LoginComponent
    //SlideShowComponent
  ],
})
export class AppModule {   }