import { Wallpaper } from './wallpaper.model';

export class WallpaperListing {
    wallpapers: Array<Wallpaper>;
    after: string;
}