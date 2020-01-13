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
  isLoading = false;
  signupData = {
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    phoneNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
    diallingCode: '',
    verficationCode: '',
    address: ''
  };
  loaderMessage: string;

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
      this.loaderMessage = 'Please be patient while we send you an SMS verification code';
      this.isLoading = true;
      this.userManager.verifyPhone(this.signupData.diallingCode + this.signupData.phoneNumber).then(result => {
        console.log(result);
        this.isLoading = false;
        this.signupLevel = 3;
      }).catch(error => {
        console.log(error);
      });
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
