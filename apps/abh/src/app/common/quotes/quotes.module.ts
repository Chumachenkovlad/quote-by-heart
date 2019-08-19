import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { QuoteComponent } from './quote/quote.component';
import { TinyQuoteComponent } from './tiny-quote/tiny-quote.component';

const COMPONENTS = [QuoteComponent, TinyQuoteComponent];

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class QuotesModule {}
