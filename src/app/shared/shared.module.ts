import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectValuesPipe } from './object-values.pipe';
import { MaterialModule } from '../material/material.module';
import { EmptyCartAlertComponent } from './empty-cart-alert/empty-cart-alert.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ObjectValuesPipe, EmptyCartAlertComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ObjectValuesPipe, EmptyCartAlertComponent],
})
export class SharedModule {}
