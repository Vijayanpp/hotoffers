import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftvoucherresultComponent } from './giftvoucherresult.component';

describe('GiftvoucherresultComponent', () => {
  let component: GiftvoucherresultComponent;
  let fixture: ComponentFixture<GiftvoucherresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftvoucherresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftvoucherresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
