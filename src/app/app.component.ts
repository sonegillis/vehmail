import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {UsermanagerService} from './services/usermanager/usermanager.service';
import {error} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vehmail';
  constructor(private userManager: UsermanagerService) {}
  ngOnInit() {
    AOS.init();
    this.initUserGeo();
  }

  private initUserGeo() {
    if (this.userManager.userIP === undefined) {
      this.userManager.getUserIpAddress().then(_ => {
        this.userManager.getUserGeoInfo();
      }, _ => {
        console.log('error');
      });
    }
  }
}
