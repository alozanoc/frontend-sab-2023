import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers/customers.component';
import { IntranetComponent } from './intranet.component';

const routes: Routes = [
  {
    path: '',
    component: IntranetComponent,
    children: [
      { path: 'customers', component: CustomersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule {
}
