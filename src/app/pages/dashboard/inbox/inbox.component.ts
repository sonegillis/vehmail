import { Component, OnInit } from '@angular/core';
import {UsermanagerService} from '../../../services/usermanager/usermanager.service';

@Component({
  selector: 'app-login',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  loadingInbox = true;
  constructor(private userManager: UsermanagerService) { }

  ngOnInit() {
    console.log('inbox ', this.userManager.inbox);
    if (this.userManager.inbox.length > 0) {
      this.loadingInbox = false;
    } else {
      this.getInbox();
    }
  }

  getInbox() {
    this.userManager.getMails({type: 'inbox'}).then(_ => {
      this.loadingInbox = false;
      console.log(_);
    }, _ => {
      this.loadingInbox = false;
      console.log(_);
    });
  }
}