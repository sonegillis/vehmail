import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() closeAuthForm = new EventEmitter();
  signupLevel = 1;
  authType = '1';

  constructor() { }

  ngOnInit() {
  }

  nextSignupPage() {
    if (this.signupLevel === 1) {
      this.signupLevel = 2;
    }
  }

  prevSignupPage() {
    if (this.signupLevel === 2) {
      this.signupLevel = 1;
    }
  }
}
