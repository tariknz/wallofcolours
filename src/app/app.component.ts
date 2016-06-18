import { Component, OnInit } from '@angular/core';
import { MainComponent } from './main/main.component'

@Component({
    selector: 'app',
    styles: [require('./app.component.less')],
    template: require('./app.component.html'),
    directives: [ MainComponent ]
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }


}