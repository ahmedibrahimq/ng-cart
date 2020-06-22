import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss'],
})
export class PaymentInfoComponent implements OnInit {
  constructor() {}
  @Input() free = false;

  ngOnInit(): void {}
}
