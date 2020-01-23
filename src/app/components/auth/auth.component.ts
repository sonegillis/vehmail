import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {UsermanagerService} from '../../services/usermanager/usermanager.service';
import countries from '../../../assets/json/countries.json';
import {Router} from "@angular/router";

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
    first_name: '',
    last_name: '',
    country: '',
    city: '',
    phone: '',
    username: '',
    password: '',
    address: '',
    code: ''
  };

  signInData = {
    username: '',
    password: ''
  };

  loaderMessage: string;
  verificationCode: string;
  passwordText: string;
  confirmPasswordText: string;
  dialingCode: string;
  phone: string;
  accountCreated = false;
  signUpError = false;
  signInError = false;
  signUpErrorText: string;
  signInErrorText: string;

  constructor(private userManager: UsermanagerService, private router: Router) {

  }

  ngOnInit() {
    this.signupData.city = this.userManager.userGeoInfo.city;
    this.signupData.country = this.userManager.userGeoInfo.country_name;
    this.dialingCode = this.userManager.userGeoInfo.calling_code;
  }

  nextSignupPage() {
    if (this.signupLevel === 1) {
      this.signupLevel = 2;
    } else if (this.signupLevel === 2) {
      this.loaderMessage = 'Please be patient while we send you an SMS verification code';
      this.isLoading = true;
      this.userManager.verifyPhone(this.dialingCode + this.phone).then(result => {
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
    this.isLoading = true;
    this.loaderMessage = 'Please be Patient while we create your account';
    this.signupData.code = this.verificationCode;
    this.signupData.phone = this.dialingCode + this.phone;
    this.signupData.password = this.passwordText;
    this.signupData.country = this.countries.find(item => {
      return item.dialling_code === this.dialingCode;
    }).country_name;
    console.log(this.signupData);
    this.userManager.signUp(this.signupData).then(response => {
      this.isLoading = false;
      console.log('account sucessfully created');
      this.accountCreated = true;
      this.authType = '2';
    }, error => {
      this.isLoading = false;
      console.log(error);
      this.signUpError = true;
      this.signUpErrorText = error;
    });
  }

  editPhoneNumber() {
    this.signupLevel = 1;
    this.phoneNumber.focus();
  }

  signIn() {
    this.isLoading = true;
    this.loaderMessage = 'Signing you In';
    this.userManager.login(this.signInData).then(response => {
      this.isLoading = false;
      console.log('login succesfull');
      this.router.navigate(['/dashboard']);
    }, error => {
      this.isLoading = false;
      console.log(error);
      this.signInError = true;
      this.signInErrorText = error;
    });
  }
}
