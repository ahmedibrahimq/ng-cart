import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database/';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, CartItem, Order } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  cartsUrl = '/carts';
  ordersUrl = '/orders';
  productsUrl = '/products';
  categoriesUrl = '/categories';

  constructor(private db: AngularFireDatabase) {
    if (!this.getCartKey()) {
      localStorage.setItem('cartKey', db.createPushId());
    }
  }

  getProducts(): Observable<Product[]> {
    return this.db
      .list(this.productsUrl)
      .snapshotChanges()
      .pipe(
        map((products) =>
          products.map(
            (product) =>
              ({
                key: product.payload.key,
                ...(product.payload.val() as {}),
              } as Product)
          )
        )
      );
  }

  getCategories(): Observable<any[]> {
    return this.db.list(this.categoriesUrl).valueChanges();
  }

  getCartKey() {
    return localStorage.getItem('cartKey');
  }

  getCart(): Observable<CartItem[]> {
    return this.db
      .list(`${this.cartsUrl}/${this.getCartKey()}`)
      .snapshotChanges()
      .pipe(
        map((cart) =>
          cart.map(
            (item) =>
              ({
                key: item.payload.key,
                ...(item.payload.val() as {}),
              } as CartItem)
          )
        )
      );
  }

  clearCart() {
    return this.db.list(`${this.cartsUrl}/${this.getCartKey()}`).remove();
  }

  getOrders(): Observable<Order[]> {
    return this.db
      .list(`${this.ordersUrl}/${this.getCartKey()}`)
      .snapshotChanges()
      .pipe(
        map((orders) =>
          orders.map(
            (order) =>
              ({
                key: order.payload.key,
                items: order.payload.val(),
              } as Order)
          )
        )
      );
  }

  addOrder(order: CartItem[]) {
    this.db.database
      .ref(this.ordersUrl)
      .child(this.getCartKey())
      .update({ [new Date().toLocaleString().replace(/\//g, '-')]: order });
  }

  getCartCount(): Observable<number> {
    return this.getCart().pipe(
      map((cart) =>
        cart
          .map((item: CartItem) => item.quantity)
          .reduce((acc, curr) => acc + curr, 0)
      )
    );
  }

  getCartItem(key: string): Observable<any> {
    return this.db
      .object(`${this.cartsUrl}/${this.getCartKey()}/${key}`)
      .valueChanges();
  }

  getCartItemCount(key: string): Observable<number> {
    return this.getCartItem(key).pipe(
      map((item) => (item ? item.quantity : 0))
    );
  }

  AddCartItem(item: Product) {
    const data = {
      title: item.title,
      unitPrice: item.price,
      quantitative: item.quantitative,
      quantity: 1,
    };
    return this.updateCartItem(item.key, data);
  }

  updateCartItem(itemKey, value) {
    this.db.database
      .ref(this.cartsUrl)
      .child(this.getCartKey())
      .child(itemKey)
      .update(value);
  }

  removeCartItem(key: string) {
    this.db.object(`${this.cartsUrl}/${this.getCartKey()}/${key}`).remove();
  }
}
