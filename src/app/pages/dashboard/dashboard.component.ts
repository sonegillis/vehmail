import { Component, OnInit } from '@angular/core';
import {UsermanagerService} from '../../services/usermanager/usermanager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  openEditor = false;
  constructor(private userManager: UsermanagerService) { }

  ngOnInit() {
    this.initialiseDashboard();
  }

  initialiseDashboard() {

  }

  openMailEditor() {
    this.openEditor = true;
  }
}
