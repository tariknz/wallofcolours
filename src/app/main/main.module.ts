import { BrowserModule } from '@angular/platform-browser';
import { RedditService } from './reddit.service';
import { NgModule } from '@angular/core';

import { MainComponent }   from './main.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    exports: [
        MainComponent
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        RedditService
    ],
})
export class MainModule { }
