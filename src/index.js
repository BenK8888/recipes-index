import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//importing the needed functionalities for creating the 'store' object which will allow the sharing of state in the nested components.
import reducers from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';



//'createStore': holds the complete state tree of the app. 'thunk' middleware added to handle the asynchronous web api requests.
const store = createStore(reducers, applyMiddleware(thunk));


//display the 'App' component inside the 'root' DOM element and use the 'provider' to pass state to the nested components. 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);