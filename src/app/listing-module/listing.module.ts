import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MY_HERO1, MY_HERO2, hero3 } from './providers/heroes';
import {ListingRoutingModule} from './listing.routing';
import { ListingComponent } from './listing/listing.component';
import { DialogPhotosComponent } from './dialog-photos/dialog-photos.component';
import { PhotosComponent } from './photos/photos.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    ListingComponent,
    DialogPhotosComponent,
    PhotosComponent,
    SlideShowComponent,
    CalendarComponent

  ],
  imports: [
    CommonModule,
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
    ListingRoutingModule,

  ],
  providers: [
    {provide: 'api', useValue: 'api/v5/dialogflow'},
    {provide: 'hero1', useValue: MY_HERO1},
    {provide: MY_HERO2, useValue: hero3},
    {provide: 'hero3', useValue: hero3},
  ],
})
export class ListingModule { }
