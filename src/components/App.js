import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar } from '../actions'


class App extends Component {
  // Our UI
  render() {
    console.log("props", this.props);
    return (
      <div>
        Hello
      </div>
    )
  }
}

// map our Redux State to Our Component props
function mapStateToProps (calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  //  Reformat the shape of our initialCalendarState
  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null

        return meals
      }, {})
    })),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}
// Instead of exporting App let us now invoke connect and as a second paramter let us pass App
// the funny syntax is Currying
/*
If you need to dispatch an action inside of a Component
1. COnnect the components
2. Then you'll be able to call dispatch
*/


export default connect(mapStateToProps, mapDispatchToProps)(App)
