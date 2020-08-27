import { Injectable } from '@angular/core';
import { CustomerData } from 'src/app/data/customer-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = 'assets/data/clients.json';

  postCustomerDataForm(customerData: CustomerData) : Observable<CustomerData>{
    return of(customerData);
  }
}
