import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { Wallpaper } from './wallpaper.model';
import { WallpaperListing } from './wallpaper-listing.model';

@Injectable()
export class RedditService {
    
    constructor(private http: Http) {
    }

    getWallpapers(after: string) : Observable<WallpaperListing> {
        let path = 'http://www.reddit.com/r/wallpapers.json?';
        
        // continues from last item loaded
        if(after) path += 'after=' + after;
        
        return this.http
            .get(path)
            .map(this.mapWallpapers);
    }

    mapWallpapers(res: Response) {
        let body = res.json();
        let listing = new WallpaperListing();
        let wallpapers = new Array<Wallpaper>();

        body.data.children.forEach(post => {
            if (post.data.post_hint === 'image') {
                let item = new Wallpaper();

                item.url = post.data.url;
                item.title = post.data.title;

                wallpapers.push(item);
            }

        });

        listing.wallpapers = wallpapers;
        listing.after = body.data.after;

        return listing;
    }

}