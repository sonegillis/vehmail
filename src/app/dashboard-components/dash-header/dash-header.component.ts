import {Component, OnInit, Input, Inject} from '@angular/core';
import {UsermanagerService} from '../../services/usermanager/usermanager.service';
import {User} from '../../models/user';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss']
})
export class DashHeaderComponent implements OnInit {
  @Input() user: User;
  searchData: string;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,
              private router: Router) { }

  ngOnInit() {
  }

  signOut() {
    this.storage.remove('user');
    this.storage.remove('token');
    this.router.navigateByUrl('/');
  }
}
