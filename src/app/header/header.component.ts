import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CartStoreService } from '../core/cart-store.service';
import { reduce, takeUntil, map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { FirebaseService } from '../core/firebase.service';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMobileHeader = false;
  cartCount: any;

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
    this.firebase.getCartCount().subscribe(value => this.cartCount = value);
  }

}
