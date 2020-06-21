import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  private _products = new Observable<any[]>();

  @Input() get products(): Observable<any[]> { return this._products; }

  set products(value: Observable<any[]>) { this._products = value; }

  constructor() { }

  ngOnInit(): void {
  }

}
