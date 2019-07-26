import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store  from './store';
import User from './components/userList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <User/>
      </div>
    </Provider>
  );
}

export default App;
