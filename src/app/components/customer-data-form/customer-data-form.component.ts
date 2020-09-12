import { Component } from '@angular/core';
import { CustomerData } from '../../model/customer-data';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../../../core/services/customer/customer.service' ;

@Component({
  selector: 'app-customer-data-form',
  templateUrl: './customer-data-form.component.html',
  styleUrls: ['./customer-data-form.component.css']
})
export class CustomerDataFormComponent {

  customerData : CustomerData = {
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
    if (form.valid) {
      alert('Submitted');
    }

    this.customerService.postCustomerDataForm(this.customerData).subscribe(
      result => alert('Success! ' + result),
      error => alert('Error! ' + error)
    );
  }

}
