import { Component, OnInit } from '@angular/core';
import { RedditService } from './reddit.service';
import { Wallpaper } from './wallpaper.model';
import { WallpaperListing } from './wallpaper-listing.model';

@Component({
    selector: 'main',
    template: require('./main.component.html'),
    styles: [require('./main.component.less').toString()],
    providers: [RedditService],
    directives: []
})
export class MainComponent implements OnInit {

    private wallpaperListing: WallpaperListing;
    private error: boolean;
    
    constructor(private service: RedditService) { }

    ngOnInit() {
        this.wallpaperListing = new WallpaperListing();

        this.service
            .getWallpapers(null)
            .subscribe(
                result => this.wallpaperListing = result,
                error =>  this.error = true);
    }

    open(url:string) {
        window.open(url,'_blank');
    }

    loadMore() {
        console.log(this.wallpaperListing.after);

        this.service
            .getWallpapers(this.wallpaperListing.after)
            .subscribe(result => {
                    this.wallpaperListing.after = result.after;
                    this.wallpaperListing.wallpapers = this.wallpaperListing.wallpapers.concat(result.wallpapers);
                }, error => this.error = true
            );
    }
}