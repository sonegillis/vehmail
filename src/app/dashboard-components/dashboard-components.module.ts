import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import {NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule} from '@nebular/theme';
import {MatIconModule} from '@angular/material/icon';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import {FormsModule} from '@angular/forms';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailFilterComponent } from './mail-filter/mail-filter.component';
import {MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {NglCheckboxesModule} from 'ng-lightning';
import { ComposeMailComponent } from './compose-mail/compose-mail.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MultiInputComponent } from './multi-input/multi-input.component';
import {EditorModule} from 'primeng/editor';
import {UsermanagerService} from '../services/usermanager/usermanager.service';

@NgModule({
  declarations: [DashHeaderComponent, LeftSidenavComponent, MailListComponent,
                  MailFilterComponent, ComposeMailComponent, FooterComponent,
                  ButtonComponent, SideNavComponent, MultiInputComponent],
  exports: [
    DashHeaderComponent,
    LeftSidenavComponent,
    MailListComponent,
    FooterComponent,
    ComposeMailComponent,
    ButtonComponent,
    SideNavComponent,
    MultiInputComponent,
    MailFilterComponent,
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
    NbCardModule,
    MatInputModule,
    NbIconModule,
    EditorModule,
  ],
  providers: [UsermanagerService]
})
export class DashboardComponentsModule { }
