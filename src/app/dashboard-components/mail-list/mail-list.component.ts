import { Component, OnInit } from '@angular/core';

export interface Mail {
  selected: boolean;
  sender: string;
  message: string;
  date: string;
}

const ELEMENT_DATA: Mail[] = [
  {selected: false, sender: 'Sone Gillis', message: 'Interview for top US companies next week. Please take short Multiple Quizzes for the invitation', date: 'Jan 15'},
  {selected: false, sender: 'Sone Gillis', message: 'Interview for top US companies next week. Please take short Multiple Quizzes for the invitation', date: 'Jan 15'},
  {selected: false, sender: 'Sone Gillis', message: 'Interview for top US companies next week. Please take short Multiple Quizzes for the invitation', date: 'Jan 15'},
  {selected: false, sender: 'Sone Gillis', message: 'Interview for top US companies next week. Please take short Multiple Quizzes for the invitation', date: 'Jan 15'},
  {selected: false, sender: 'Sone Gillis', message: 'Interview for top US companies next week. Please take short Multiple Quizzes for the invitation', date: 'Jan 15'},
  {selected: false, sender: 'Sone Gillis', message: 'Interview for top US companies next week. Please take short Multiple Quizzes for the invitation', date: 'Jan 15'},
  {selected: false, sender: 'Sone Gillis', message: 'Interview for top US companies next week. Please take short Multiple Quizzes for the invitation', date: 'Jan 15'},
  {selected: false, sender: 'Sone Gillis', message: 'Interview for top US companies next week. Please take short Multiple Quizzes for the invitation', date: 'Jan 15'}
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
