import  { combineReducers } from 'redux'
import  userReducer, { userState }  from './../components/user/userReducer';
import IUser from '../model/user.model';


export interface IRootState {
  readonly userReducer: userState
}

const reducer = combineReducers<IRootState>({
  userReducer
});

export default reducer;