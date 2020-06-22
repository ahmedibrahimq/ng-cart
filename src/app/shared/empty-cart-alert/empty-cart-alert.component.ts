import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-cart-alert',
  templateUrl: './empty-cart-alert.component.html',
  styleUrls: ['./empty-cart-alert.component.css'],
})
export class EmptyCartAlertComponent implements OnInit {
  @Input() display: boolean;

  constructor() {}

  ngOnInit(): void {}
}
