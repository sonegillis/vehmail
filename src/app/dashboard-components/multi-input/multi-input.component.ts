import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.scss']
})
export class MultiInputComponent implements OnInit {
  @Input() placeholder;
  values: string[];
  inputValue: string;
  constructor() { }

  ngOnInit() {
    this.values = [];
  }

  validateInput($event: KeyboardEvent) {
    const validateKeyCodes = [32, 13];
    // tslint:disable-next-line:max-line-length
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validateKeyCodes.includes($event.keyCode) && pattern.test(this.inputValue)) {
      $event.preventDefault();
      this.values.push(this.inputValue);
      this.inputValue = '';
    }
  }

  removeInput(i: number) {
    this.values.splice(i, 1);
  }
}
