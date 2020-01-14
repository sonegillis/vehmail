import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from './components/components.module';
import {LandingModule} from './pages/landing/landing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {NbThemeModule} from '@nebular/theme';
import {DashboardComponentsModule} from './dashboard-components/dashboard-components.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    LandingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    DashboardModule,
    BrowserAnimationsModule,
    DashboardComponentsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
