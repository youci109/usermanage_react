import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import initializeStore from './store/index';
import RootRouter from './router'
const store = initializeStore()
const App = () => {
  return (
    <Provider store={store}>
        <RootRouter/>
    </Provider>
  );
}

export default App;
