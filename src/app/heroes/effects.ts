import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HeroService} from "../hero.service";
import * as heroesListActions from './actions';
import * as apiActions from './api.actions';
import {exhaustMap, of, tap} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {MessageService} from "../message.service";

@Injectable()
export class HeroEffects {

  constructor(private readonly actions$: Actions,
              private readonly heroService: HeroService,
              private readonly messageService: MessageService) {
  }

  fetchHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroesListActions.heroesOpened),
      exhaustMap(() =>
        this.heroService
          .getHeroes()
          .pipe(
            map(heroes => apiActions.heroesFetchedSuccess({heroes})),
            catchError(() => of(apiActions.heroesFetchedError))
          )
      )
    )
  );

  handlerFetchError = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.heroesFetchedError),
      tap(() => {
        this.messageService.add('HeroService: Error fetching heroes');
      }),
      map(() => {
        return [];
      })
    ),
    {dispatch: false}
  )
}
