import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store  from './store';
import User from './components/user/users'
import UserUpdate from './components/user/user-update'
// import UserUpdate from './components/user/user-update'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <UserUpdate></UserUpdate>
        <User/>
      </div>
    </Provider>
  );
}

export default App;
