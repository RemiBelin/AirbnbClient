import { NgModule, InjectionToken } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryDataService } from './in-memory-data.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import { bookingData } from "./bookingData";
import {ListingModule} from "./listing-module/listing.module";
import {LayoutModule} from "./layout/layout.module";
import { BrowserModule } from '@angular/platform-browser';
import { FormExamplesModule } from './form-examples/form-examples.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    LayoutModule,
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