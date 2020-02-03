import { Injectable } from '@angular/core';
import {Mail} from '../../models/mail';
import {SERVICEURLS} from '../../../config';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class MailmanagerService {
  private _drafts: Mail;

  get drafts(): Mail {
    return this._drafts;
  }

  set drafts(value: Mail) {
    this._drafts = value;
  }

  constructor(private httpService: HttpService) { }

  getDetailMessage(data: any) {
    return new Promise((resolve, reject) => {
      const url = `${SERVICEURLS.getMailDetail}`;
      this.httpService.get(url, data).subscribe(response => {
        const result = response as any;
        const {status} = result;
        const {status_text} = result;
        if (status === 200) {
          resolve(result.data.message);
        } else {
          reject(status_text);
        }
      }, _ => reject('Error connecting to server'));
    });
  }

}
