import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { CustomerData } from '../../data/customer-data';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  customers : CustomerData[];
  filteredCustomers: CustomerData[];

  @ViewChild('searchComponent')
  searchComponent: SearchComponent;

  private searchFilter: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(
      (customers: CustomerData[]) => {
        this.customers = customers;
        this.performFilter(this.searchFilter);
      }
    );
  }

  ngAfterViewInit(): void {
    this.searchFilter = this.searchComponent.searchFilter;
  }

  performFilter(filterBy?: string){
    if(filterBy) {
      this.filteredCustomers = this.customers.filter((customer: CustomerData) =>
          customer.name.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
    } else {
      this.filteredCustomers = this.customers;
    }
  }

  onValueChange(value: string) : void {
    this.performFilter(value);
  }
}
