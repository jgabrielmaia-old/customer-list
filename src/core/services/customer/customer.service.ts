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

  postCustomerDataForm(customerData: CustomerData) : Observable<CustomerData>{
    return of(customerData);
  }
}
