import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DontmissofferComponent } from './dontmissoffer.component';

describe('DontmissofferComponent', () => {
  let component: DontmissofferComponent;
  let fixture: ComponentFixture<DontmissofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DontmissofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DontmissofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
