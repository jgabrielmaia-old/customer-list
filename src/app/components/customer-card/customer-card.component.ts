import { Component, OnInit, Input } from '@angular/core';
import { CustomerData } from '../../data/customer-data';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input()
  customer: CustomerData;

  constructor() { }

  ngOnInit(): void {
  }

}
