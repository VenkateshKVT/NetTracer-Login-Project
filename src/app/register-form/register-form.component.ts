import { Component, OnInit, ViewChild } from '@angular/core';
import { Registration } from '../models/registration.model';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('registrationForm') form: any;
  public user: Registration = new Registration('', '', '', '', '');
  public showSuccessAlert: boolean;
  public emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"; 
  saveSuccess: boolean;
  constructor(private _sharedService: SharedService) {
    this.showSuccessAlert=false;
    this.saveSuccess = false;
   }

  ngOnInit() {
  }
  public addUser(user: Registration){
    console.log("User in component ", user);
    this._sharedService.insertNewUser(user).subscribe((res)=>{
      this.saveSuccess = res;
      if(this.saveSuccess == true) {
        this.showSuccessAlert=true;
        this.form.reset();
      }
    });
  }

  public closeAlert() {
    this.showSuccessAlert = false;
  }

}
