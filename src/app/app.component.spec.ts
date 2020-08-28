import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { DialogPhotosComponent } from './dialog-photos/dialog-photos.component';
import { PhotosComponent } from './photos/photos.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule, MatDialogModule, MatDividerModule, MatListModule, MatCardModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MAT_DATE_LOCALE } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MY_HERO1, MY_HERO2, hero3 } from './heroes';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
        MatInputModule
      ],
      declarations: [
        AppComponent,
        ListingComponent,
        DialogPhotosComponent,
        PhotosComponent,
        SlideShowComponent,
        CalendarComponent
      ],
      providers: [
        {provide: 'api', useValue: 'api/v5/dialogflow'},
        {provide: 'hero1', useValue: MY_HERO1},
        {provide: MY_HERO2, useValue: hero3},
        {provide: 'hero3', useValue: hero3},
        {provide: MAT_DATE_LOCALE, useValue: 'fr'}
      ],
    }).compileComponents();
  }));

   it('should create the app', () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.debugElement.componentInstance;
     expect(app).toBeTruthy();
   });

   it(`should have as title 'angular-airbnb'`, () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.debugElement.componentInstance;
     expect(app.title).toEqual('angular-airbnb');
   });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-airbnb!');
  // });
});
