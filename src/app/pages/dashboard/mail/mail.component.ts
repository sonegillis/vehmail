import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UsermanagerService} from '../../../services/usermanager/usermanager.service';
import {ActivatedRoute} from '@angular/router';
import {Mail} from '../../../models/user';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit, OnChanges, AfterViewInit {
  loadingMail = true;
  loadingMailErr = true;
  type: string;
  mails: Mail[] = [];
  constructor(private userManager: UsermanagerService,
              private router: ActivatedRoute) {

    this.router.queryParamMap.subscribe(data => {
      this.loadingMail = true;
      this.loadingMailErr = true;
      this.mails = [];
      this.getMail(data.get('type'));
    });
  }

  ngOnInit() {

  }

  getMail(type: string) {
    this.userManager.getMails({type}).then(mails => {
      this.loadingMail = false;
      this.loadingMailErr = false;
      this.mails = mails as Mail[];
    }).catch(error => {
      this.loadingMailErr = true;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change called');
  }

  ngAfterViewInit(): void {
    console.log('on after view init');
  }
}
