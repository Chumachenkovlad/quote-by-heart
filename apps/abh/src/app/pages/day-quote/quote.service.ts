import { Quote } from '@abh/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { environment } from 'apps/abh/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  public getCoute(): Observable<Quote> {
    return this.http.get<Quote>(`${environment.apiUrl}/api/quote`);
  }
}
