import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {MessageDetailComponent} from './pages/dashboard/message-detail/message-detail.component';
import {MailComponent} from './pages/dashboard/mail/mail.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'mails', component: MailComponent },
      {path: 'mail/:mbx_id/:msg_id/:reply', component: MessageDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
