import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissingPageComponent } from './shared/missing-page/missing-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: '**', component: MissingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
