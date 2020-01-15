import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import {NbCardModule, NbLayoutModule, NbMenuModule} from '@nebular/theme';
import {MatIconModule} from '@angular/material/icon';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [DashHeaderComponent, LeftSidenavComponent],
  exports: [
    DashHeaderComponent,
    LeftSidenavComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    MatIconModule,
    NgbPopoverModule,
    RouterModule,
    FormsModule,
    NbMenuModule.forRoot(),
    NbCardModule
  ]
})
export class DashboardComponentsModule { }
