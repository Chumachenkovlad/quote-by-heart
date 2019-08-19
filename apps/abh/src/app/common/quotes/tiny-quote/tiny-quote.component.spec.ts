import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyQuoteComponent } from './tiny-quote.component';

describe('TinyQuoteComponent', () => {
  let component: TinyQuoteComponent;
  let fixture: ComponentFixture<TinyQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
