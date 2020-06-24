import { Component, OnInit, Input } from '@angular/core';

import { FirebaseService } from 'src/app/core/firebase.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() data: any;

  countInCart: number;

  constructor(private firebase: FirebaseService) {}

  inc() {
    this.firebase.updateCartItem(this.data.key, {
      quantity: this.countInCart + 1,
    });
  }

  dec() {
    if (this.countInCart <= 1) {
      return this.firebase.removeCartItem(this.data.key);
    }

    this.firebase.updateCartItem(this.data.key, {
      quantity: this.countInCart - 1,
    });
  }

  add() {
    this.firebase.AddCartItem(this.data);
  }

  ngOnInit(): void {
    this.firebase
      .getCartItemCount(this.data.key)
      .subscribe((value) => (this.countInCart = value));
  }
}
