import { Injectable } from '@angular/core';
import {Mail} from '../../models/mail';

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

  constructor() { }
}
