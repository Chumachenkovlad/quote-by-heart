import { Quote } from '@abh/api-interfaces';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'abh-tiny-quote',
  templateUrl: './tiny-quote.component.html',
  styleUrls: ['./tiny-quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TinyQuoteComponent {
  @Input() quote: Quote;
}
