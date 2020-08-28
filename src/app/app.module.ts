import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogPhotosComponent } from './dialog-photos/dialog-photos.component';
import { PhotosComponent } from './photos/photos.component';
import { LoginComponent } from './login/login.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SlideShowComponent } from './slide-show/slide-show.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
//import { HERO1,HERO2, HERO3 } from './heroes';
import { MY_HERO1, MY_HERO2, hero3 } from './heroes';
import { CalendarComponent } from './calendar/calendar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    LoginComponent,
    DialogPhotosComponent,
    PhotosComponent,
    SlideShowComponent,
    CalendarComponent,
    ReactiveformComponent,
    PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    {provide: 'api', useValue: 'api/v5/dialogflow'},
    {provide: 'hero1', useValue: MY_HERO1},
    {provide: MY_HERO2, useValue: hero3},
    {provide: 'hero3', useValue: hero3},
    {provide: MAT_DATE_LOCALE, useValue: 'fr'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    //LoginComponent
    //SlideShowComponent
  ],
})
export class AppModule {   }
