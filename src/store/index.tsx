import { createStore, applyMiddleware } from 'redux'

const initialState:[] = [];

const store = createStore(()=>[], initialState ,applyMiddleware());
  
export default store;