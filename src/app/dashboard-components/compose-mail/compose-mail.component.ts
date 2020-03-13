import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TINYMCE_API_KEY} from '../../../config';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})
export class ComposeMailComponent implements OnInit {

  @Output() destroy = new EventEmitter();
  @Output() minimize = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

}
