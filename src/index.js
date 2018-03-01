import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import Redux libraries
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider} from 'react-redux'



// in order to create store what you need to do is set invocation of createStore to a variable
// createStore always takes in a reducer that we created and imported above as its first argument
/* Store is an object with a few properties on it
1. dispatch() - how you dispatch specific actions / sends an action (describing change) to stores reducer
2. getState() - returns state of the current store
3. subscribe() - allows you to listen to changes in the store / registers callback(cb) function to be executed whenever store updates

1. Updates to Store can only be triggered by dispatching actions
2. Store's subscribe() function helps connect React components to the store
*/
const store = createStore(
  reducer,
  // if __REDUX_DEVTOOLS_EXTENSION__ lives on our window object
  // then go ahead and invoke that
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// Pass in store into our app component and now App is going to receive store as a prop

// What if App component had a lot of subcomponents that each needed store?
/*
For example, dispatch something or needed access to the store
Problem is we would have to pass the store down to all the sub components
whenever they needed anything to do with store
Our Hero - Provider
**
Provider = makes it possible to pass data through the component tree w/o having to pass the props
down manually every level.**

We pass store (Redux store) to Provider
Whenever any components that app renders or app itself needs access to the store/dispatch action to store
Becomes more easily
Provider -
*/
ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
