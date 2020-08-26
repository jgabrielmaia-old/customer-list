import { Component, OnInit } from '@angular/core';
import { UserData } from './../data/user-data';

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent implements OnInit {

  userData : UserData = {
    name: ``,
    birth: new Date("1970-01-01"),
    firstOrder: new Date("1970-01-01"),
    orderCount: 0,
    phone: `(xx) x xxxx - xxxx`,
    neighborhood: `Default`,
    street: `Default`,
    streetNumber: `1`,
    detail: `Default`
  };

  constructor() { }

  ngOnInit(): void {
  }

}
