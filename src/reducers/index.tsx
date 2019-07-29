import  { combineReducers } from 'redux'
import userList from './../components/user/userReducer';

export default combineReducers({
  userlist:userList
});