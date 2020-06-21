import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatButtonToggleModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class MaterialModule { }
