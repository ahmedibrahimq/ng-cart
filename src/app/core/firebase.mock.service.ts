import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Product, CartItem, Order } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  categories = ['crafts', 'books', 'tickets'];

  // tslint:disable-next-line: variable-name
  private readonly _cart = new BehaviorSubject(this.getCartValue());

  readonly cart$ = this._cart.asObservable();

  get cart() {
    return this._cart.getValue();
  }

  set cart(value: CartItem[]) {
    this._cart.next(value);
    localStorage.setItem('cart', JSON.stringify(value));
  }

  constructor(private http: HttpClient) {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', '[]');
    }

    if (localStorage.getItem('orders') === null) {
      localStorage.setItem('orders', '[]');
    }
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/products.mock.json');
  }

  getCategories(): Observable<string[]> {
    return of(this.categories);
  }

  getCartValue(): CartItem[] {
    return JSON.parse(localStorage.getItem('cart')) as CartItem[];
  }

  getCart(): Observable<CartItem[]> {
    return this.cart$.pipe(
      map((items) => items.sort((i1, i2) => +i1.key - +i2.key)) // sort cart items by key
    );
  }

  clearCart() {
    this.cart = [];
  }

  getOrders(): Observable<Order[]> {
    return of(JSON.parse(localStorage.getItem('orders')) || []);
  }

  addOrder(items: CartItem[]) {
    const orders = JSON.parse(localStorage.getItem('orders')) as Order[];

    const newOrder: Order = {
      key: new Date().toLocaleString().replace(/\//g, '-'),
      items,
    };

    orders.push(newOrder);

    localStorage.setItem('orders', JSON.stringify(orders));
    this.clearCart();
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

  getCartItem(key: string): Observable<CartItem> {
    return this.cart$.pipe(
      map((items) => items.find((item) => item.key === key))
    );
  }

  getCartItemCount(key): Observable<number> {
    return this.getCartItem(key).pipe(
      map((item) => (item ? item.quantity : 0))
    );
  }

  AddCartItem(item: Product) {
    const cart = this.getCartValue();
    const data: CartItem = {
      key: item.key,
      title: item.title,
      unitPrice: item.price,
      quantitative: item.quantitative,
      quantity: 1,
    };

    cart.push(data);

    this.cart = cart;
  }

  updateCartItem(key, value: { quantity: number }) {
    let cart = this.cart;
    const item = cart.find((i) => i.key === key);

    cart = cart.filter((i) => i !== item);

    item.quantity = value.quantity;
    cart.push(item);

    this.cart = cart;
  }

  removeCartItem(key: string) {
    let cart = this.cart;

    cart = cart.filter((item) => item.key !== key);

    this.cart = cart || [];
  }
}
