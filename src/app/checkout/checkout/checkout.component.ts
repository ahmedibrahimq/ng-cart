import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cart: any[];
  free = false;

  constructor(private firebase: FirebaseService) {}

  placeOrder() {
    this.firebase.addOrder(this.cart);
    this.firebase.clearCart();
  }

  ngOnInit(): void {
    this.firebase.getCart().subscribe((value) => (this.cart = value));
  }
}
