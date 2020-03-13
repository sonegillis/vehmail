import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVICEURLS, TOKEN} from '../../../config';
import {Toolkits} from '../../utils';
import {Mail, User} from '../../models/user';
import {HttpService} from '../http/http.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UsermanagerService {
  private _userIP: string;
  private _userGeoInfo: any;
  private _user: User;
  private _inbox: Mail[] = [];
  private _sent: Mail[] = [];

  get inbox(): Mail[] {
    return this._inbox;
  }

  set inbox(inbox: Mail[]) {
    this._inbox = inbox;
  }

  get sent(): Mail[] {
    return this._sent;
  }

  set sent(sent: Mail[]) {
    this._sent = sent;
  }

  get user(): User {
    return this._user;
  }

  set user(user) {
    this._user = user;
  }

  get userIP(): string {
    return this._userIP;
  }

  set userIP(value: string) {
    this._userIP = value;
  }

  get userGeoInfo(): any {
    return this._userGeoInfo;
  }

  set userGeoInfo(value: any) {
    this._userGeoInfo = value;
  }

  constructor(private http: HttpClient,
              private httpService: HttpService,
              @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  getUserGeoInfo() {
    const params = {
      apiKey: TOKEN.API_GEO,
      ip: this.userIP
    };
    const uri = SERVICEURLS.getGeoInformation + Toolkits.getRequestParams(params);
    console.log('uri is ', uri);
    this.http.get(uri).subscribe(response => {
      console.log(response);
      this.userGeoInfo = response;
    }, error => {
      console.log(error);
    });
  }

  getUserIpAddress() {
    return new Promise((resolve, reject) =>  {
      this.http.get('https://api.ipify.org/?format=json').subscribe(response => {
        const data = response as any;
        this.userIP = data.ip;
        resolve();
        }, error => {
          console.log(error);
          reject(error);
        });
    });
  }

  verifyPhone(phoneNumber: string) {
    return new Promise((resolve, reject) => {
      const url = `${SERVICEURLS.verifyPhone}?phone=${phoneNumber}`;
      this.http.get(url).subscribe(response => {
        const result = response as any;
        const {status} = result;
        const {status_text} = result;
        if (status === 200) {
          resolve();
        } else {
          reject(status_text);
        }
      }, _ => reject('Error connecting to server'));
    });
  }

  signUp(data: any) {
    return new Promise((resolve, reject) => {
      const url = `${SERVICEURLS.signUp}`;
      this.http.post(url, data).subscribe(response => {
        const result = response as any;
        const {status} = result;
        const {status_text} = result;
        if (status === 200) {
          resolve();
        } else {
          reject(status_text);
        }
      }, _ => reject('Error connecting to server'));
    });
  }

  login(data: any) {
    return new Promise((resolve, reject) => {
      const url = `${SERVICEURLS.login}`;
      this.http.post(url, data).subscribe(response => {
        const result = response as any;
        const {status} = result;
        const {status_text} = result;
        if (status === 200) {
          const { user } = result.data;
          const { token } = result.data;
          this.user = user;
          this.httpService.token = token;
          this.storage.set('user', user);
          this.storage.set('token', token);
          resolve();
        } else {
          reject(status_text);
        }
      }, _ => {
        console.log('error is ', _);
        reject('Error connecting to server');
      });
    });
  }

  getMails(data) {
    return new Promise((resolve, reject) => {
      const url = `${SERVICEURLS.getMails}`;
      this.httpService.get(url, data).subscribe(response => {
        const result = response as any;
        const {status} = result;
        const {status_text} = result;
        if (status === 200) {
          switch (data.type) {
            case 'inbox':
              this.inbox = result.data.messages;
              break;
            case 'sent':
              this.sent = result.data.messages;
              break;
          }
          resolve(result.data.messages);
        } else {
          reject(status_text);
        }
      }, _ => reject('Error connecting to server'));
    });
  }
}
