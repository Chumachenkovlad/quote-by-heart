import { Quote } from '@abh/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  public getCoute(): Observable<Quote> {
    return this.http.get<Quote>('http://localhost:3333/api/quote');
  }
}
