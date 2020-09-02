import { Injectable } from '@angular/core';
import { CustomerData } from 'src/app/data/customer-data';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = 'assets/data/customer.json';
  constructor(private http: HttpClient) { }

  getAll(): Observable<CustomerData> {
    return this.http.get<CustomerData>(this.customersUrl);
  }

  postCustomerDataForm(customerData: CustomerData) : Observable<CustomerData>{
    return of(customerData);
  }
}
