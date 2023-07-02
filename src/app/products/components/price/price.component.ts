import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  price: number = 0;

  public intervals$?: Subscription

  ngOnInit() {
    console.log('PRICE - OnInit');

    this.intervals$ = interval(1000).subscribe( value => console.log(`Tick: ${ value }`))
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('PRICE - OnChanges');
    console.table({ component: 'price', changes });
  }

  ngOnDestroy() {
    console.log('PRICE - OnDestroy');
    this.intervals$?.unsubscribe()
  }
}
