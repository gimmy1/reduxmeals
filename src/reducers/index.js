// Reducers - how the state will change is administered by the reducer
// Reducers receive the current state and an action that was dispatched, then decides how to transform curr state into brand new state based on action
// One main Reducer Rule: They must be Pure
// Import Actions. Reducers need Actions
import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions'

// Reducers Initial state
const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

// Our mighty Reducer
// Reducers are functions - MUST be Pure Functions
  // 1. return one and the same result if the same arguments are passed in
  // 2. depend solely on the arguments passed in
  // 3. Do not produce side effects
// Reducers take in state, and action. If state is undefined we set it to initial state that we set above
//
function calendar (state = initialCalendarState, action) {
  // take some properties off of our action
  const { day, recipe, meal } = action

  // now specify the state will change based off of those actions
  switch (action.type) {
    case ADD_RECIPE :
      return {
        ...state, // return the original state with object spread syntax return
        [day]: { // but what we want to do is modify the specific day
          // if a action is dispatched we only want to modify specified day, and not any other day and only Saturdays specified meal
          ...state[day], // so state at this specific day will remain the same
          [meal]: recipe.label, // but whatever the meal was it will now be, for now, recipe.label
        }
      }
    case REMOVE_FROM_CALENDAR :
      // remove will be very similar.
      return {
        // return state with object spread syntax
        ...state,
        // modify the specific day
        [day]: {
          ...state[day], // maintain day
          [meal]: null, // except for meal // return null
        }
      }
    default : // if no comparable action type then we want to have a default. return state
      return state
  }
}

// import inside a different file
export default calendar

/*
How do decide if to use Redux
1. Will 2 components rely on the same piece of state?
  - if yes, use Redux
  Why? Bc if that state lives in Redux, no matter what the relationship is between the components, each can gain access to to the needed state.
  // Why must reducers be pure functions? Bc if it changes state from one component it will then ruin state for the other component(s)
2. What does the caching story for this piece of state look like?
  - if the operation to get the data was expensive, it may be worth putting it in Redux so you dont have to re-fetch it every time the
  component mounts.
3. For any other scenarios, you are probably just fine sticking to local component state! 
*/
