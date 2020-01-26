import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {DashboardComponentsModule} from '../../dashboard-components/dashboard-components.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from '../../interceptor';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    DashboardComponentsModule,
    NbEvaIconsModule,
    MatIconModule
  ],
  providers: [NbSidebarService, { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }], // we need this service for the sidebar
})
export class DashboardModule { }
