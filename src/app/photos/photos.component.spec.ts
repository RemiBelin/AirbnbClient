import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';

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
import {MatGridListModule} from '@angular/material/grid-list';

import { HttpClientModule } from '@angular/common/http';
import { MY_HERO2, hero3 } from '../heroes';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      imports: [ 
        MatGridListModule,
        HttpClientModule,
        MatDialogModule
    ],
    providers: [
      {provide: MY_HERO2, useValue: hero3},
    ],

    }).compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
