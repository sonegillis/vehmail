import {Component, Input, OnInit} from '@angular/core';
import {Mail} from '../../models/user';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
  @Input() mails: Mail[];
  constructor() { }

  ngOnInit() {
  }

}
