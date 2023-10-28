import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./landing/landing.module').then((it) => it.LandingModule)},
  {path: 'intranet', loadChildren: () => import('./intranet/intranet.module').then((it) => it.IntranetModule)},
  {path: 'auth', loadChildren: () => import('./authentication/authentication.module').then((it) => it.AuthenticationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
