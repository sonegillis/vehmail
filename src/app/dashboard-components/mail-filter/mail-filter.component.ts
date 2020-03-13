import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mail-filter',
  templateUrl: './mail-filter.component.html',
  styleUrls: ['./mail-filter.component.scss']
})
export class MailFilterComponent implements OnInit {
  @Output() selectAll = new EventEmitter();
  selected = false;
  constructor() { }

  ngOnInit() {
  }

}
