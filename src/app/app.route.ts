import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { SingleComponent } from './home/single/single.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule',
      },
      {
        path: ':id',
        component: SingleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutesModule {}
