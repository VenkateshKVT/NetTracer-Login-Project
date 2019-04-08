import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NetTracerProject';
  isLoggedIn: Boolean;

  constructor(private _sharedService: SharedService) {
    this.isLoggedIn = false;
  }
  public getLoginStatus():Boolean {
    this.isLoggedIn = this._sharedService.getLoginStatus()
    return this.isLoggedIn;
  }

}
