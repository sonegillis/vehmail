import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SERVICEURLS, TOKEN} from '../../../config';
import {Toolkits} from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class UsermanagerService {
  private _userIP: string;
  private _userGeoInfo: any;

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

  constructor(private http: HttpClient) { }

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
        if (status === 200) {
          resolve();
        } else {
          reject();
        }
      }, error => reject());
    });
  }
}
