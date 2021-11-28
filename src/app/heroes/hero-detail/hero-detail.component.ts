import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    hero$!: Observable<Hero>;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _service: HeroService
    ) {
    }

    ngOnInit(): void {
        // use a 'snapshot' as we wont be reusing component between Hero views
        const id = this._route.snapshot.paramMap.get('id')!;

        this.hero$ = this._service.getHero(id);
    }

    gotoHeroes(hero: Hero): void {
        const heroId = hero ? hero.id : null;
        this._router.navigate(['/heroes', { id: heroId }])
    }

    /*
    private _example(): void {
        todo: ~ create back/next hero feature
        // When the map changes,
        this.hero$ = this._route.paramMap.pipe(
            switchMap( (params: ParamMap) =>
                // gets the id parameter from the changed parameters.
                this._service.getHero( params.get('id')! )
            )
        );
    }
    */
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
