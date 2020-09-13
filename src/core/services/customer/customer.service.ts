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

  save(customerData: CustomerData) : Observable<CustomerData>{
    return this.http.post<CustomerData>(this.customersUrl, customerData);
  }

  increaseOrder(customerData: CustomerData) : Observable<CustomerData>{
    const increasedOrderData = {orderCount: customerData.orderCount++,...customerData };
    console.log(increasedOrderData);
    return this.http.put<CustomerData>(`${this.customersUrl}/${customerData['id']}`, increasedOrderData);
  }
}
