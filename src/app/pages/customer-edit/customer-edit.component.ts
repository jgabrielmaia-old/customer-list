import { Component, Input, OnInit } from '@angular/core';
import { CustomerData } from 'src/app/model/customer-data';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent {
  @Input()
  customerData: CustomerData;
}
