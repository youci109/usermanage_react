import { combineReducers } from 'redux'
import userReducer, { userState } from './../components/user/userReducer';

export interface IRootState {
  readonly userReducer: userState
}

const reducer = combineReducers<IRootState>({
  userReducer
});

export default reducer;