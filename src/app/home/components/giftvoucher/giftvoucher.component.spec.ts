import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftvoucherComponent } from './giftvoucher.component';

describe('GiftvoucherComponent', () => {
  let component: GiftvoucherComponent;
  let fixture: ComponentFixture<GiftvoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftvoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
