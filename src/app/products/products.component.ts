import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

import { FirebaseService } from '../core/firebase.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsList: Observable<any[]>;
  filteredProducts: Observable<any[]>;

  category = 'all';

  constructor(private firebase: FirebaseService) { }

  filter(category: string) {
    this.category = category;

    if (category === 'all') { return this.filteredProducts = this.productsList; }

    this.filteredProducts = this.productsList.pipe(
      map(products => products.filter(product => product.category === category)));
  }

  search(query: string) {
    if (!query) { return this.filteredProducts = this.productsList; }

    this.filteredProducts = this.productsList.pipe(
      debounceTime(400),
      map(
        products => products
          .filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) > -1)
      )
    );
  }

  ngOnInit(): void {
    this.filteredProducts = this.productsList = this.firebase.getProducts();
  }

}
