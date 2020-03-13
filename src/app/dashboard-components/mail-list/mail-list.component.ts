import {Component, Input, OnInit} from '@angular/core';
import {Mail} from '../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
  @Input() mails: Mail[];
  @Input() loadingData: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMessageDetail(messageID: number, mailBoxID: number, reply: boolean) {
    const url = `/dashboard/mail/${mailBoxID}/${messageID}/${reply}`;
    this.router.navigateByUrl(url);
    this.router.navigate(['/heloo', '2'])
  }

  onSelectAll($event: any) {
    this.mails.forEach(mail => mail.selected = $event);
  }
}
