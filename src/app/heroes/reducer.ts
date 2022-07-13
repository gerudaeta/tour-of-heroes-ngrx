import {Hero} from "../hero";
import {Action, createReducer, on} from "@ngrx/store";

import * as apiActions from './api.actions';

interface HeroState {
  heroes?: Hero[];
}

const initState: HeroState = {
  heroes: undefined
}

const heroesReducer = createReducer(
  initState,
  on(apiActions.heroesFetchedSuccess, (state, { heroes } ) => ({
    heroes: [...heroes]
  }))
)

export function reducer (state: HeroState | undefined, action: Action) {
  return heroesReducer(state, action);
}
