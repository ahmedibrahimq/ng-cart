import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';
import { CartStoreService } from 'src/app/core/cart-store.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: any[];

  displayedColumns: string[] = ['item', 'qty', 'cost'];

  constructor(public cartStore: CartStoreService, public firebase: FirebaseService) { }

  getTotalCost() {
    if (this.cart) {
      return this.cart.map(t => t.unitPrice * t.quantity).reduce((acc, value) => acc + value, 0);
    }
  }

  ngOnInit(): void {
    this.firebase.getCart().subscribe(value => this.cart = value);
  }
}
