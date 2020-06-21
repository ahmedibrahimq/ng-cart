import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ProductQtyUpdaterComponent } from './product-qty-updater/product-qty-updater.component';


@NgModule({
  declarations: [ShoppingCartComponent, ProductQtyUpdaterComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
