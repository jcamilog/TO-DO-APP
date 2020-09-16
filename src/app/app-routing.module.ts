import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudGuard } from './crud.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'crud',
    canActivate: [CrudGuard],
    loadChildren: () => import ('./crud/crud.module').then(m => m.CrudModule)
  },
  {
    path: '**',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
