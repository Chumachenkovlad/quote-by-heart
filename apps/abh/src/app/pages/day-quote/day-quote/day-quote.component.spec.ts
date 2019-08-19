import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayQuoteComponent } from './day-quote.component';

describe('DayQuoteComponent', () => {
  let component: DayQuoteComponent;
  let fixture: ComponentFixture<DayQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
