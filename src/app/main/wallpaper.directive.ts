import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[backgroundImage]',
})
export class WallpaperDirective implements OnInit {

    constructor(private el: ElementRef) {}

    @Input() backgroundImage: string;

    ngOnInit() {
        this.el.nativeElement.style.background = 'url(' + this.backgroundImage + ') no-repeat center center fixed';
    }
}