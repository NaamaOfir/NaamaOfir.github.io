import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BodyModule } from './body/body.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatTooltipModule,
        MatButtonModule,
        BrowserModule,
        BodyModule,
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
