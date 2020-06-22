import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  constructor() {}
  @Input() cart: any[];
  @Input() free = false;

  getTotalCost() {
    if (this.cart) {
      return this.cart
        .map((t) => t.unitPrice * t.quantity)
        .reduce((acc, value) => acc + value, 0);
    }
  }

  ngOnInit(): void {}
}
