import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../core/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMobileHeader = false;
  cartCount: any;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.firebase.getCartCount().subscribe((value) => (this.cartCount = value));
  }
}
