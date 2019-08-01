import  { combineReducers } from 'redux'
import  userReducer, { userState ,updateUser}  from './../components/user/userReducer';
import IUser from '../model/user.model';


export interface IRootState {
  readonly userReducer: userState,
  readonly updateUser: IUser
}

const reducer = combineReducers<IRootState>({
  userReducer,
  updateUser
});

export default reducer;