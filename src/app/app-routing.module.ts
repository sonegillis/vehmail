import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './pages/landing/landing.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {InboxComponent} from './pages/dashboard/inbox/inbox.component';
import {MessageDetailComponent} from './pages/dashboard/message-detail/message-detail.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'inbox', component: InboxComponent},
      {path: 'mail/:mbx_id/:msg_id/:reply', component: MessageDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
