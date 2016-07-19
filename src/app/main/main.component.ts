import { Component, OnInit } from '@angular/core';
import { RedditService } from './reddit.service';
import { WallpaperDirective } from './wallpaper.directive';

@Component({
    selector: 'main',
    template: require('./main.component.html'),
    styles: [require('./main.component.less').toString()],
    providers: [RedditService],
    directives: [WallpaperDirective]
})
export class MainComponent implements OnInit {

    private wallpapers: Object;

    constructor(private service: RedditService) { }

    ngOnInit() {
        this.service
            .getWallpapers()
            .subscribe(wallpapers => this.wallpapers = wallpapers);
    }

}