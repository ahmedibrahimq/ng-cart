import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() message = 'Your cart is empty';
  @Input() routerLink = '/';
  @Input() anchorText = 'Continue shopping';

  constructor() {}

  ngOnInit(): void {}
}
