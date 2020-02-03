import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MailmanagerService} from '../../../services/mailmanager/mailmanager.service';
import {Mail} from '../../../models/user';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
  @ViewChild('iframe', {static: true}) iframe: ElementRef;
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
        console.log(this.iframe);
        this.iframe.nativeElement.contentWindow.document.write(this.mail.text_html);
      }, error => {
        this.loadingMail = false;
        console.log('error is ', error);
      });
    });
  }

  ngOnInit() {
  }

}
