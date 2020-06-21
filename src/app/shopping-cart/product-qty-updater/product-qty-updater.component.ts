import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';

@Component({
  selector: 'app-product-qty-updater',
  templateUrl: './product-qty-updater.component.html',
  styleUrls: ['./product-qty-updater.component.scss']
})
export class ProductQtyUpdaterComponent implements OnInit {

  @Input() itemKey: string;

  countInCart: number;

  constructor(private firebase: FirebaseService) { }

  inc() {
    this.firebase.updateCartItem(this.itemKey, {quantity: this.countInCart + 1});
  }

  dec() {
    if (this.countInCart <= 1) { return this.firebase.removeCartItem(this.itemKey); }

    this.firebase.updateCartItem(this.itemKey, {quantity: this.countInCart - 1});
  }

  ngOnInit(): void {
    this.firebase.getCartItemCount(this.itemKey).subscribe(value => this.countInCart = value);

  }

}
