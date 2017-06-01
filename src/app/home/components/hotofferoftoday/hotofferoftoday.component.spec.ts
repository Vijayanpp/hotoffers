import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotofferoftodayComponent } from './hotofferoftoday.component';

describe('HotofferoftodayComponent', () => {
  let component: HotofferoftodayComponent;
  let fixture: ComponentFixture<HotofferoftodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotofferoftodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotofferoftodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
