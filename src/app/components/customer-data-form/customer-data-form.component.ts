import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerData } from '../../model/customer-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-data-form',
  templateUrl: './customer-data-form.component.html',
  styleUrls: ['./customer-data-form.component.css']
})
export class CustomerDataFormComponent {
  @Input()
  customerData : CustomerData;

  @Output()
  customerSubmit: EventEmitter<CustomerData> = new EventEmitter<CustomerData>();

  customerFormSubmit(ngForm:NgForm) {
    this.customerSubmit.emit(this.customerData);
  }
}
