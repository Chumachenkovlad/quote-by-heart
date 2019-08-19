import { Quote } from '@abh/api-interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'abh-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteComponent {
  @Input() quote: Quote;
  @Output() nextQuoteSelected = new EventEmitter<never>();
}
