import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttabComponent } from './producttab.component';

describe('ProducttabComponent', () => {
  let component: ProducttabComponent;
  let fixture: ComponentFixture<ProducttabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
