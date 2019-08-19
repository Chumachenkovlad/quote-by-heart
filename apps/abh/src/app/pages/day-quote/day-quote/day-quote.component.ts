import { Quote } from '@abh/api-interfaces';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'abh-day-quote',
  templateUrl: './day-quote.component.html',
  styleUrls: ['./day-quote.component.scss']
})
export class DayQuoteComponent implements OnInit {
  public dayQuote: Quote;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.loadQuote();
  }

  public loadQuote() {
    this.quoteService.getCoute().subscribe(quote => {
      this.dayQuote = quote;
    });
  }
}
