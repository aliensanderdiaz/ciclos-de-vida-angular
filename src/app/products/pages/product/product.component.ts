import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  public isProductVisible: boolean = false
  public currentPrice: number = 5000

  constructor() {
    console.log('PRODUCT - constructor');
  }

  ngOnInit(): void {
    console.log('PRODUCT - ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('PRODUCT - ngOnChanges');
    console.table({ changes })
  }

  ngDoCheck() {
    console.log('PRODUCT - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('PRODUCT - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('PRODUCT - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('PRODUCT - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('PRODUCT - ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('PRODUCT - ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice += 1000
  }
}
