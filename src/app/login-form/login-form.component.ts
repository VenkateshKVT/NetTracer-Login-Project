import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';        
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public userName: string;
  public password: string;
  public loginSuccess: boolean;
  showLoginFailedAlert: boolean;
  
  constructor(private _sharedService: SharedService, private router: Router) {
    this.showLoginFailedAlert = false;
  }

  ngOnInit() {
  }
  
  public login() {
    this._sharedService.validateUser(this.userName, this.password)
    .subscribe((res)=>{
      this.loginSuccess = res;
      console.log("validate" , res);
      if(this.loginSuccess === true) {
        console.log("Login Success");
        this.showLoginFailedAlert = false;
        this.userName = null;
        this.password = null;
        this.router.navigate(['/applicationDashboard']);
      }
      else {
        console.log("Login Failed");
        this.showLoginFailedAlert = true;
      }
    });
   
  }

  public closeAlert() {
    this.showLoginFailedAlert = false;
  }

}
