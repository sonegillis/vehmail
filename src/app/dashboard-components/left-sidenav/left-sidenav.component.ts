import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss']
})
export class LeftSidenavComponent implements OnInit {
  items = [
    {
      title: 'Favorites',
      expanded: true,
      icon: 'star',
      children: [
        {
          title: 'Inbox',
          link: [], // goes into angular `routerLink`,
          icon: 'inbox'
        },
        {
          title: 'Sent Items',
          url: '#', // goes directly into `href` attribute
          icon: 'paper-plane'
        },
        {
          title: 'Drafts',
          link: [],
          icon: 'edit'
        },
      ],
    },
    {
      title: 'Folders',
      icon: 'folder',
      children: [
        {
          title: 'Inbox',
          link: [], // goes into angular `routerLink`
          icon: 'inbox'
        },
        {
          title: 'Junk Email',
          url: '#', // goes directly into `href` attribute
          icon: 'slash'
        },
        {
          title: 'Drafts',
          link: [],
        },
        {
          title: 'Sent Items',
          link: [],
        },
        {
          title: 'Deleted Items',
          link: [],
        },
        {
          title: 'Archive',
          link: [],
        },
      ],
    },
    {
      title: 'Groups',
      children: [
      ],
    },
  ];
  constructor() { }

  ngOnInit() {
  }
}
