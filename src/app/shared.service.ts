import { Injectable } from '@angular/core';
import { Registration } from './models/registration.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public userLoggedIn: Boolean = false;
  public usersLists : Array<Registration> = [];
  constructor() {
    this.usersLists = [];
  }
  public insertNewUser(user: Registration): Observable<boolean> {
    localStorage.setItem(user.loginName, user.password);
    this.usersLists.push(Object.assign({}, user));
    return new BehaviorSubject<boolean>(true);
  }

  public validateUser(userName: string, password: string): Observable<boolean> {
    let response = false;
    console.log("Validate in service", userName, password);
    this.usersLists.forEach((el) => {
      if(el.loginName === userName) {
        if(password === localStorage.getItem(userName)) {
          response = true;
          this.userLoggedIn = true;
        }
        else {
          response = false;
          this.userLoggedIn = false;
        }
      }
    });
    return new BehaviorSubject<boolean>(response);
  }

  getLoginStatus(): Boolean {
    return this.userLoggedIn
  }
  setLoginStatus(status) {
    this.userLoggedIn = status;
  }

}
