import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroComponent } from '../intro/intro.component';


@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IntroComponent
  ]
})
export class BodyModule { }
