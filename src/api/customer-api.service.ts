import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
interface Customer {
  id: number,
  name: string,
}

interface CustomerSaveRequest {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService {

  httpclient = inject(HttpClient)

  async list(): Promise<Customer[]> {
    return lastValueFrom(this.httpclient.get<Customer[]>('http://localhost:8080/customer'));
  }

  async save(customer: CustomerSaveRequest): Promise<Customer[]> {
    return lastValueFrom(this.httpclient.post<Customer[]>('http://localhost:8080/customer', customer));
  }
}
