import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectValuesPipe } from './object-values.pipe';
import { MaterialModule } from '../material/material.module';
import { AlertComponent } from './alert/alert.component';
import { RouterModule } from '@angular/router';
import { MissingPageComponent } from './missing-page/missing-page.component';

@NgModule({
  declarations: [ObjectValuesPipe, AlertComponent, MissingPageComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ObjectValuesPipe, AlertComponent],
})
export class SharedModule {}
