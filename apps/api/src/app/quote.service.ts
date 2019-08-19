import { Quote } from '@abh/api-interfaces';
import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
@Injectable()
export class QuoteService {
  constructor(private httpService: HttpService) {}
  getQuote(): Observable<Quote> {
    return this.httpService
      .get<Quote>(`${environment.apiUrl}/api/quote`)
      .pipe(map(res => res.data));
  }
}
