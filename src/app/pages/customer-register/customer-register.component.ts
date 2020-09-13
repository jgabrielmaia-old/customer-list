import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerData } from 'src/app/model/customer-data';
import { CustomerService } from 'src/core/services/customer/customer.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {
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

  constructor(
    private customerService: CustomerService,
    private router: Router) { }

  registerSubmit(customerToRegister: CustomerData) {
    this.customerService.save(customerToRegister).subscribe();
    this.router.navigate(['/'])
  }

}
