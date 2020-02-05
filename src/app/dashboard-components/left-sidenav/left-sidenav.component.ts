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
  items = [
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
          url: '/dashboard/inbox',
          count: this.userManager.inbox.length
        },
        {
          title: 'Sent Items',
          url: '#', // goes directly into `href` attribute
          icon: 'paper-plane',
          count: 0
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
          count: this.userManager.inbox.length
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
          link: [],
          icon: 'paper-plane',
          count: 0
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
  constructor(private mailManager: MailmanagerService,
              private router: Router,
              private userManager: UsermanagerService) { }

  ngOnInit() {
  }

  navigate(url: string) {
    console.log('url is ', url);
    this.router.navigateByUrl(url);
  }
}
