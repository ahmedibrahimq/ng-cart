import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { MaterialModule } from '../material/material.module';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CheckoutComponent,
    PaymentInfoComponent,
    OrderSummaryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    CheckoutRoutingModule,
  ],
})
export class CheckoutModule {}
