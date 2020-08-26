import { Component, OnInit } from '@angular/core';
import { UserData } from './../data/user-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent implements OnInit {

  userData : UserData = {
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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    console.log('Submitted: ', form.valid);
  }

}
