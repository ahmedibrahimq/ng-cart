import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectValuesPipe } from './object-values.pipe';
import { MaterialModule } from '../material/material.module';
import { AlertComponent } from './alert/alert.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ObjectValuesPipe, AlertComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ObjectValuesPipe, AlertComponent],
})
export class SharedModule {}
