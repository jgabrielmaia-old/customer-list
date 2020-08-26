import { Injectable } from '@angular/core';
import { UserData } from 'src/app/data/user-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  postUserDataForm(userData: UserData) : Observable<UserData>{
    return of(userData);
  }
}
