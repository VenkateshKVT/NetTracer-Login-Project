import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-application-dashboard',
  templateUrl: './application-dashboard.component.html',
  styleUrls: ['./application-dashboard.component.css']
})
export class ApplicationDashboardComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }
  public goBack() {
    this._sharedService.setLoginStatus(false);
  }
}
