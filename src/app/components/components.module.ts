import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { ButtonSegmentsComponent } from './button-segments/button-segments.component';
import {MatIconModule} from '@angular/material/icon';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, AuthComponent, ButtonSegmentsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DropdownModule,
    FormsModule
  ],
  exports: [HeaderComponent, AuthComponent, ButtonSegmentsComponent]
})
export class ComponentsModule { }
