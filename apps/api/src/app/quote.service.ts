import { Quote } from '@abh/api-interfaces';
import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class QuoteService {
  constructor(private httpService: HttpService) {}
  getQuote(): Observable<Quote> {
    return this.httpService
      .get<Quote>(
        'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru'
      )
      .pipe(map(res => res.data));
  }
}
