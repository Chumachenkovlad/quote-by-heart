import { Controller, Get } from '@nestjs/common';

import { Quote } from '@abh/api-interfaces';
import { Observable } from 'rxjs';
import { QuoteService } from './quote.service';

@Controller()
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get('quote')
  getQuote(): Observable<Quote> {
    return this.quoteService.getQuote();
  }
}
