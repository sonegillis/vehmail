import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { ButtonSegmentsComponent } from './button-segments/button-segments.component';

@NgModule({
  declarations: [HeaderComponent, AuthComponent, ButtonSegmentsComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsModule { }
