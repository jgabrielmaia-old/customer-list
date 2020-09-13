import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { CustomerData } from '../../model/customer-data';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { SearchComponent } from '../../components/search/search.component';
import { SearchParamsService } from 'src/core/services/search-params/search-params.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers : CustomerData[];
  filteredCustomers: CustomerData[];

  @ViewChild('searchComponent')
  searchComponent: SearchComponent;

  constructor(
    private customerService: CustomerService,
    private searchParamsService: SearchParamsService
  ) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(
      (customers: CustomerData[]) => {
        this.customers = customers;
        this.searchComponent.searchFilter = this.searchParamsService?.filterBy;
      }
    );
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
    this.searchParamsService.filterBy = value;
  }
}
