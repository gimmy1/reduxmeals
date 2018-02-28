// Here we will have 2 Actions - Add / Remove
// Actions in Redux are objects that you setup to describe any event in your app that should update app state
// We turn Actions into Action Creators for portability, and testing. Do this by wrapping Actions in a Function
// A/AC do not modify state themselves, they are specifying that some event occurred which should update state
// Keep A/AC as concentrated as possible/free of side effects.
// We use constants so we can pass around, specifically into reducer funcs w/o having string comparisons everywhere
// which may cause a bug
export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE'

// Begin creating your Action Creators
// 1. Add Recipe - this will be exported and used in other files
// will take in an object - like All Actions do! with 3 different properties (properties can be considered payloads)
// remember every Acion/Action creators MUST have a type as a key
export function addRecipe ({day, recipe, meal}) {
  return {
    type:  ADD_RECIPE,
    day,
    recipe,
    meal,
  }
}

export function removeRecipe ({ day, meal}) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal,
  }
}

/*
1. How does Redux know that invoking these action creators should modify the app state?
2. HOw do we specify the app state should change, based off these actions?
Answer - Reducers
 */
