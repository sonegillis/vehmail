import {Component, EventEmitter, OnInit, Output } from '@angular/core';
import {UsermanagerService} from '../../services/usermanager/usermanager.service';
import countries from '../../../assets/json/countries.json';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() closeAuthForm = new EventEmitter();
  signupLevel = 1;
  authType = '1';
  insertVerificationCode = false;
  countries = countries;
  signupData = {
    fullNames: '',
    country: this.userManager.userGeoInfo.country_name,
    city: '',
    phoneNumber: '',
    username: '',
    password: ''
  };

  constructor(private userManager: UsermanagerService) {
    console.log('countries is ', countries);
  }

  ngOnInit() {
  }

  nextSignupPage() {
    if (this.signupLevel === 1) {
      this.signupLevel = 2;
    } else if (this.signupLevel === 2) {
      this.signupLevel = 3;
    }
  }

  prevSignupPage() {
    if (this.signupLevel === 2) {
      this.signupLevel = 1;
    } else if (this.signupLevel === 3) {
      this.signupLevel = 2;
    }
  }

  verityPhone() {
    this.insertVerificationCode = true;
  }

  createAccount() {

  }
}
