import { Component, Input } from '@angular/core';
import { CustomerService } from 'src/core/services/customer/customer.service';
import { CustomerData } from '../../model/customer-data';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent {
  @Input()
  customer: CustomerData;

  constructor(private customerService: CustomerService) { }
  increaseOrder(){
    this.customerService.increaseOrder(this.customer).subscribe();
  }
}
