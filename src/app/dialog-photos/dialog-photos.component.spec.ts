import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPhotosComponent } from './dialog-photos.component';

describe('DialogPhotosComponent', () => {
  let component: DialogPhotosComponent;
  let fixture: ComponentFixture<DialogPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
