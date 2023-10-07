import { Component, inject, OnInit } from '@angular/core';
import { CustomerApiService } from '../api/customer-api.service';

interface Customer {
  id: number,
  name: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  customerApiService = inject(CustomerApiService);

  customers: Customer[] = [
    {
    id: 1,
    name: "Ali Lozano"
  },
    {
      id: 2,
      name: "Juan Perez"
    },
    {
      id: 1,
      name: "Jose Quispe"
    }
  ]
  name = '';
  async save() {
    await this.customerApiService.save({ name: this.name })
    this.name = '';
    await this.load();
  };

  async ngOnInit(): Promise<void> {
    await this.load()
    console.log('Ng on init')
  }

  async load() {
    this.customers = await this.customerApiService.list();
  }


}
