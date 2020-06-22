import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, MaterialModule, SharedModule, OrdersRoutingModule],
})
export class OrdersModule {}
