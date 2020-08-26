import { Component } from '@angular/core';
import { UserData } from './../data/user-data';
import { NgForm } from '@angular/forms';
import { UserService } from '../../core/services/user/user.service' ;

@Component({
  selector: 'app-user-data-form',
  templateUrl: './user-data-form.component.html',
  styleUrls: ['./user-data-form.component.css']
})
export class UserDataFormComponent {

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

  constructor(private userService: UserService) { }

  onSubmit(form:NgForm) {
    if (form.valid) {
      alert('Submitted');
    }

    this.userService.postUserDataForm(this.userData).subscribe(
      result => alert('Success! ' + result),
      error => alert('Error! ' + error)
    );
  }

}
