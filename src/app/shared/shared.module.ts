import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectValuesPipe } from './object-values.pipe';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ObjectValuesPipe],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ObjectValuesPipe]
})
export class SharedModule { }
