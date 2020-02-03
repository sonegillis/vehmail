import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MailmanagerService} from '../../../services/mailmanager/mailmanager.service';
import {Mail} from '../../../models/user';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
  loadingMail = true;
  mail: Mail;
  constructor(private activatedRoute: ActivatedRoute,
              private mailmanager: MailmanagerService) {
    this.activatedRoute.paramMap.subscribe(result => {
      const data = {
        msg_id: result.get('msg_id'),
        mbx_id: result.get('mbx_id'),
        reply: result.get('reply')
      };
      console.log(data);
      this.mailmanager.getDetailMessage(data).then(response => {
        this.loadingMail = false;
        console.log('result is ', response);
        this.mail = response as Mail;

      }, error => {
        this.loadingMail = false;
        console.log('error is ', error);
      });
    });
  }

  ngOnInit() {
  }

}
