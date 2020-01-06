import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from './landing.component';
import {ComponentsModule} from '../../components/components.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class LandingModule { }
