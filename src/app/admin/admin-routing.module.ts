import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissingPageComponent } from '../shared/missing-page/missing-page.component';

const routes: Routes = [
  {
    path: 'admin',
    component: MissingPageComponent,
    data: {
      text: 'Under Construction',
      image: '../../../assets/svg/undraw_under_construction_46pa.svg',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
