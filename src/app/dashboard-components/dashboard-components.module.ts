import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import {NbCardModule, NbLayoutModule, NbMenuModule} from '@nebular/theme';
import {MatIconModule} from '@angular/material/icon';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import {FormsModule} from '@angular/forms';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailFilterComponent } from './mail-filter/mail-filter.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {NglCheckboxesModule} from 'ng-lightning';

@NgModule({
  declarations: [DashHeaderComponent, LeftSidenavComponent, MailListComponent, MailFilterComponent],
  exports: [
    DashHeaderComponent,
    LeftSidenavComponent,
    MailListComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    MatIconModule,
    MatPaginatorModule,
    NgbPopoverModule,
    NglCheckboxesModule,
    RouterModule,
    FormsModule,
    MatTableModule,
    NbMenuModule.forRoot(),
    NbCardModule
  ]
})
export class DashboardComponentsModule { }
