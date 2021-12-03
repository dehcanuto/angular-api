import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: SingleComponent },
];

@NgModule({
  declarations: [HomeComponent, SingleComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
