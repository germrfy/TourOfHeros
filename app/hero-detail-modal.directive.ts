import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail-modal',
    templateUrl: './app/hero-detail-modal.directive.html',
})
export class HeroDetailModalDirective
{
    @Input() hero : Hero;
    public HeroDetailModalIsVisible: boolean;

    showHeroDetail()
    {
        this.HeroDetailModalIsVisible = true;
        console.log('showing directive');
    }

    hideHeroDetail()
    {
        this.HeroDetailModalIsVisible = false;
    }
}