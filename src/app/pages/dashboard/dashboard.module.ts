import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {DashboardComponentsModule} from '../../dashboard-components/dashboard-components.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    DashboardComponentsModule,
    NbEvaIconsModule
  ],
  providers: [NbSidebarService], // we need this service for the sidebar
})
export class DashboardModule { }
