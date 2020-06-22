import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database/';
import { Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

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

  getProducts(): Observable<any[]> {
    return this.db
      .list(this.productsUrl)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((change) => ({
            key: change.payload.key,
            ...(change.payload.val() as {}),
          }))
        )
      );
  }

  getCategories(): Observable<any[]> {
    return this.db.list(this.categoriesUrl).valueChanges();
  }

  getCartKey() {
    return localStorage.getItem('cartKey');
  }

  getCart(): Observable<any[]> {
    return this.db
      .list(`${this.cartsUrl}/${this.getCartKey()}`)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((change) => ({
            key: change.payload.key,
            ...(change.payload.val() as {}),
          }))
        )
      );
  }

  clearCart() {
    return this.db.list(`${this.cartsUrl}/${this.getCartKey()}`).remove();
  }

  getOrders() {
    return this.db
      .list(`${this.ordersUrl}/${this.getCartKey()}`)
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((change) => ({
            key: change.payload.key,
            items: change.payload.val(),
          }))
        )
      );
  }

  addOrder(order) {
    // console.log(this.ordersUrl, this.getCartKey(), 'order');
    this.db.database
      .ref(this.ordersUrl)
      .child(this.getCartKey())
      .update({ [new Date().toLocaleString().replace(/\//g, '-')]: order });
  }

  getCartCount(): Observable<number> {
    return this.getCart().pipe(
      map((cart) =>
        cart
          .map((item: any) => item.quantity)
          .reduce((acc, curr) => acc + curr, 0)
      )
    );
  }

  getCartItem(key): Observable<any> {
    return this.db
      .object(`${this.cartsUrl}/${this.getCartKey()}/${key}`)
      .valueChanges();
  }

  getCartItemCount(key): Observable<number> {
    return this.getCartItem(key).pipe(
      map((item) => (item ? item.quantity : 0))
    );
  }

  AddCartItem(item) {
    const data = { title: item.title, unitPrice: item.price, quantity: 1 };
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
