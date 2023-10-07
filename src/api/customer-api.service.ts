import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment';
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
    return lastValueFrom(this.httpclient.get<Customer[]>(`${environment.apiUrl}/customer`));
  }

  async save(customer: CustomerSaveRequest): Promise<Customer[]> {
    return lastValueFrom(this.httpclient.post<Customer[]>(`${environment.apiUrl}/customer`, customer));
  }
}
