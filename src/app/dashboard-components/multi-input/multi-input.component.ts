import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.scss']
})
export class MultiInputComponent implements OnInit {
  values: string[];
  inputValue: string;
  constructor() { }

  ngOnInit() {
    this.values = ['sone_gillis@yahoo.com', 'eruck@vehseh.com'];
  }

  validateInput($event: KeyboardEvent) {
    const validateKeyCodes = [32, 13];
    if (validateKeyCodes.includes($event.keyCode)) {
      $event.preventDefault();
      this.values.push(this.inputValue);
      console.log(this.values);
      this.inputValue = '';
    }
  }

  removeInput(i: number) {
    this.values.splice(i, 1);
  }
}
