import {Component, Inject, OnInit} from '@angular/core';
import * as AOS from 'aos';
import {UsermanagerService} from './services/usermanager/usermanager.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {HttpService} from './services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vehmail';
  constructor(private userManager: UsermanagerService,
              private httpService: HttpService,
              @Inject(LOCAL_STORAGE) private storage: WebStorageService) {}
  ngOnInit() {
    AOS.init();
    this.userManager.user = this.storage.get('user');
    this.httpService.token = this.storage.get('token');
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
