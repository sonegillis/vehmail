import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TINYMCE_API_KEY} from '../../../config';

@Component({
  selector: 'app-compose-mail',
  templateUrl: './compose-mail.component.html',
  styleUrls: ['./compose-mail.component.scss']
})
export class ComposeMailComponent implements OnInit {
  tinymceAPI: string;

  @Output() destroy = new EventEmitter();
  @Output() minimize = new EventEmitter();
  constructor() {
    this.tinymceAPI = TINYMCE_API_KEY;
  }

  ngOnInit() {
  }

}
