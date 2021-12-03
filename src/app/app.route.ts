import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: { title: 'Marvel API Super Heroes' },
  },
  { path: ':id', loadChildren: './single/single.module#PerfilModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutesModule {}
