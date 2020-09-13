import { Injectable } from '@angular/core';
import { CustomerData } from 'src/app/model/customer-data';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = 'http://localhost:5000/api/customers';

  constructor(private http: HttpClient) { }

  getAll(): Observable<CustomerData[]> {
    return this.http.get<CustomerData[]>(this.customersUrl);
  }

  get(id: string) {
    return this.http.get<CustomerData>(`${this.customersUrl}/${id}`);
  }

  save(customerData: CustomerData) : Observable<CustomerData>{
    return this.http.post<CustomerData>(this.customersUrl, customerData);
  }

  update(customerData: CustomerData) {
    return this.http.put<CustomerData>(`${this.customersUrl}/${customerData.id}`, customerData);
  }

  increaseOrder(customerData: CustomerData) : Observable<CustomerData>{
    const increasedOrderData = {orderCount: customerData.orderCount++,...customerData };
    return this.update(increasedOrderData);
  }
}
