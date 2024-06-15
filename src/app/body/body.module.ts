import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IntroComponent } from './intro/intro.component';
import { ScrollIndicatorComponent } from './scroll-indicator/scroll-indicator.component';


@NgModule({
  declarations: [
    IntroComponent,
    ScrollIndicatorComponent
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
