import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetRoutingModule } from './intranet-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomersModule } from './customers/customers.module';
import { IntranetComponent } from './intranet.component';
import { IntranetSidebarComponent } from './layout/intranet-sidebar/intranet-sidebar.component';
import { IntranetHeaderComponent } from './layout/intranet-header/intranet-header.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    IntranetComponent,
    IntranetSidebarComponent,
    IntranetHeaderComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    FormsModule,
    CustomersModule,
    MatMenuModule,
  ]
})
export class IntranetModule { }
