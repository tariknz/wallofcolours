import { Component, OnInit } from '@angular/core';
import { RedditService } from './reddit.service';

@Component({
    selector: 'main',
    template: require('./main.component.html'),
    styles: [require('./main.component.less')],
    providers: [RedditService]
})
export class MainComponent implements OnInit {
    
    private wallpapers:Object;

    constructor(private service:RedditService) { }

    ngOnInit() { 
        this.service
            .getWallpapers()
            .subscribe(wallpapers => this.wallpapers = wallpapers);
    }

}