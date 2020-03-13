import {Component, Input, OnInit} from '@angular/core';
import {MailmanagerService} from '../../services/mailmanager/mailmanager.service';
import {UsermanagerService} from '../../services/usermanager/usermanager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss']
})
export class LeftSidenavComponent implements OnInit {
  @Input() inboxCount: number;
  @Input() active: string;
  items: Array<any>;
  constructor(public mailManager: MailmanagerService,
              private router: Router,
              private userManager: UsermanagerService) {
  }

  ngOnInit() {
    this.items = [
      {
        title: 'Favorites',
        expanded: true,
        icon: 'star',
        hideContent: false,
        children: [
          {
            title: 'Inbox',
            link: [], // goes into angular `routerLink`,
            icon: 'inbox',
            url: '/dashboard/mails?type=inbox',
            count: -1
          },
          {
            title: 'Sent Items',
            url: '/dashboard/mails?type=sent', // goes directly into `href` attribute
            icon: 'paper-plane',
            count: -1
          },
          {
            title: 'Drafts',
            link: [],
            icon: 'edit',
            count: 0
          },
        ],
      },
      {
        title: 'Folders',
        icon: 'folder',
        hideContent: false,
        children: [
          {
            title: 'Inbox',
            link: [], // goes into angular `routerLink`
            icon: 'inbox',
            url: '/dashboard/inbox',
            count: -1
          },
          {
            title: 'Junk Email',
            url: '#', // goes directly into `href` attribute
            icon: 'slash',
            count: 0
          },
          {
            title: 'Drafts',
            link: [],
            icon: 'edit',
            count: 0
          },
          {
            title: 'Sent Items',
            url: '/dashboard/sent', // goes directly into `href` attribute
            link: [],
            icon: 'paper-plane',
            count: -1
          },
          {
            title: 'Deleted Items',
            link: [],
            icon: 'trash',
            count: 0
          },
          {
            title: 'Archive',
            link: [],
            icon: 'archive',
            count: 0
          },
        ],
      },
      {
        title: 'Groups',
        hideContent: false,
        icon: 'options-2-outline',
        children: [
        ],
      },
      {
        title: 'Domains',
        hideContent: false,
        link: [],
        icon: 'options-2-outline',
        count: 1,
        children: [
          {
            title: 'itdesign.com',
            link: []
          }
        ]
      },
    ];
    this.active = this.active === undefined ? this.items[0].title : this.active;
  }

  getCount(type: string) {
    console.log(type);
    switch (type) {
      case 'Inbox':
        return this.userManager !== undefined ? this.userManager.inbox.length : 0;
      case 'Sent Items':
        return this.userManager !== undefined ? this.userManager.sent.length : 0;
    }
  }

  navigate(url: string, title: string) {
    this.active = title;
    this.router.navigateByUrl(url);
  }
}
