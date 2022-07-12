import {Hero} from "../hero";
import {Action, createReducer, on} from "@ngrx/store";
import * as heroesListAction from './actions';
import {HEROES} from "../mock-heroes";

interface HeroState {
  heroes?: Hero[];
}

const initState: HeroState = {
  heroes: undefined
}

const heroesReducer = createReducer(initState, on(heroesListAction.heroesOpened, state => ({
  ...state,
  heroes: [...HEROES]
})))

export function reducer (state: HeroState | undefined, action: Action) {
  return heroesReducer(state, action);
}
