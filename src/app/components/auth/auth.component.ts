import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {UsermanagerService} from '../../services/usermanager/usermanager.service';
import countries from '../../../assets/json/countries.json';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() closeAuthForm = new EventEmitter();
  @ViewChild('phoneNumber', {static: false}) phoneNumber;
  signupLevel = 1;
  authType = '1';
  insertVerificationCode = true;
  countries = countries;
  passwordType = 'password';
  confirmPasswordType = 'password';
  signupData = {
    fullNames: '',
    country: '',
    city: '',
    phoneNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
    diallingCode: '',
    verficationCode: ''
  };

  constructor(private userManager: UsermanagerService) {

  }

  ngOnInit() {
    this.signupData.city = this.userManager.userGeoInfo.city;
    this.signupData.country = this.userManager.userGeoInfo.country_name;
    this.signupData.diallingCode = this.userManager.userGeoInfo.calling_code;
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

  editPhoneNumber() {
    this.signupLevel = 1;
    this.phoneNumber.focus();
  }
}
