import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerData } from '../../data/customer-data';
import { CustomerService } from 'src/core/services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers$ : Observable<CustomerData>;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customers$ = this.customerService.getAll();
  }

}
