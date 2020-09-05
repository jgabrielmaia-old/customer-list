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
  customers : CustomerData[];
  filteredCustomers: CustomerData[];

  private _listFilter: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(
      (customers: CustomerData[]) => {
        this.customers = customers;
        this.performFilter(this._listFilter);
      }
    );
  }
  
  get searchFilter(): string {
    return this._listFilter;
  }

  set searchFilter(value: string){
    this._listFilter = value;
    this.performFilter(value);
  }

  performFilter(filterBy?: string){
    if(filterBy) {
      this.filteredCustomers = this.customers.filter((customer: CustomerData) => 
          customer.name.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
    } else { 
      this.filteredCustomers = this.customers;
    }
  }
}
