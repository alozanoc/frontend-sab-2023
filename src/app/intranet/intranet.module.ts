import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomersModule } from './customers/customers.module';
import { IntranetComponent } from './intranet.component';
import { IntranetSidebarComponent } from './layout/intranet-sidebar/intranet-sidebar.component';



@NgModule({
  declarations: [
    IntranetComponent,
    IntranetSidebarComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    FormsModule,
    CustomersModule,
  ]
})
export class IntranetModule { }
