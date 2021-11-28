import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    heroes$!: Observable<Hero[]>;
    selectedId = 0;

    constructor(
        private _heroService: HeroService,
        private _route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.heroes$ = this._route.paramMap.pipe(
            switchMap(params => {
                this.selectedId = parseInt( params.get('id')!, 10 )

                return this._heroService.getHeroes();
            })
        );
    }

    // getHeroes(): void {
    //     this._heroService.getHeroes()
    //         .subscribe(heroes => this.heroes = heroes);
    // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
