import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";
import {Action} from "@ngrx/store";

interface HeroState {
  heroes: Hero[];
}

const initState: HeroState = {
  heroes: HEROES
}

export function reducer (state: HeroState = initState, action: Action) {
  return state;
}
