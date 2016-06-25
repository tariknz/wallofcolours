import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { Wallpaper } from './wallpaper.model';

@Injectable()
export class RedditService {
    
    constructor(private http: Http) {
    }

    getWallpapers() : Observable<Wallpaper[]> {
        return this.http
            .get('http://www.reddit.com/r/wallpapers.json')
            .map(this.mapWallpapers);
    }

    mapWallpapers(res: Response) {
        let body = res.json();
        let model = new Array<Wallpaper>();

        body.data.children.forEach(post => {
            if (post.data.post_hint === 'image') {
                let item = new Wallpaper();

                item.url = post.data.url;
                item.title = post.data.title;

                model.push(item);
            }

        });

        return model;
    }

}