import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import * as serviceWorker from './serviceWorker';


const initialState = {
  todoLists :JSON.parse(localStorage.getItem('Lists')) || [] 
}

const rootReducer = ( state= initialState, action) => {
  switch(action.type){
    case 'ADD_ITEM' :
      return Object.assign({}, state, {todoLists : [...state.todoLists,action.newItem]});
    
    case 'CHECK' :
          const copyarr = [...state.todoLists];
          copyarr[action.index].isChecked = action.isChecked ;
          return Object.assign({}, state, {todoLists : [...copyarr]})

    case 'REMOVE' :
      const newarr = [...state.todoLists];
      newarr.splice(newarr[action.index]  , 1);
      return Object.assign({}, state, {todoLists : [...newarr]});
   
      default:
        return state;

  }
}

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


