import { Component, Input } from '@angular/core';
import { CustomerData } from '../../data/customer-data';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent {
  @Input()
  customer: CustomerData;
}
