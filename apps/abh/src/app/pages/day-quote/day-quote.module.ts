import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuotesModule } from '../../common/quotes/quotes.module';
import { DayQuoteRoutingModule } from './day-quote-routing.module';
import { DayQuoteComponent } from './day-quote/day-quote.component';

@NgModule({
  declarations: [DayQuoteComponent],
  imports: [CommonModule, DayQuoteRoutingModule, QuotesModule]
})
export class DayQuoteModule {}
