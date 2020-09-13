import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private customerService: CustomerService,
    private router: Router) { }

  increaseOrder(){
    this.customerService.increaseOrder(this.customer).subscribe();
  }

  edit(){
    this.router.navigate([`/editar/${this.customer.id}`]);
  }
}
