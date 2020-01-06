import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() closeAuthForm = new EventEmitter();
  authType = '1';

  constructor() { }

  ngOnInit() {
  }

  switchAuthForm($event: any) {
    console.log($event);
    if ($event === '1') {
      // signup

    } else if ($event === '2') {
      // login
    }
  }
}
