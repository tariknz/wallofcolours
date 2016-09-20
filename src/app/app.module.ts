import { MainModule } from './main/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        MainModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
