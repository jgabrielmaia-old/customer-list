import { Component, Input } from '@angular/core';
import { CustomerData } from '../../model/customer-data';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../../core/services/customer/customer.service' ;

@Component({
  selector: 'app-customer-data-form',
  templateUrl: './customer-data-form.component.html',
  styleUrls: ['./customer-data-form.component.css']
})
export class CustomerDataFormComponent {
  @Input()
  customerData : CustomerData = {
    id: ``,
    name: ``,
    birth: new Date("2000-01-01"),
    firstOrder: new Date(),
    orderCount: 1,
    phone: ``,
    neighborhood: ``,
    street: ``,
    streetNumber: ``,
    detail: ``
  };

  constructor(private customerService: CustomerService) { }

  onSubmit(form:NgForm) {
    this.customerService.save(this.customerData);
  }

}
