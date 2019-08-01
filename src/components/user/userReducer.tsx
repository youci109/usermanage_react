import { FETCH_USERLIST, DELETE_USER, ADD_USER, UPDATE_USER } from '../../config/contant'
import IUser from './../../model/user.model';

const initstate = {
    users: [],
}
export interface userState {
    users: Array<IUser>;
}

// export type userListState = Readonly<typeof userState>;
export default (state: userState = initstate, action: any): userState => {
    switch (action.type) {
        case FETCH_USERLIST:
            console.log("获取用户reducer");
            return { ...state, users: action.payload }
        case DELETE_USER:
            console.log("删除用户reducer");
            // 进行深拷贝【注意深拷贝、浅拷贝问题】
            state.users.splice(action.payload, 1)
            const newState = JSON.parse(JSON.stringify(state));
            return { ...state, ...newState }

        case ADD_USER:
            return { ...state }

        default:
            return state;
    }
}

const inituserstate = {
    userName:"xiaoxi",   userId :"",
    userSex:"",
    userAge :"",
    userNo :"",
    userPhoneNum  :"",
    createTime :"",
    modifyTime :"",
    userState :""
}

export const updateUser = (userstate: IUser = inituserstate, action: any): IUser => {
    switch (action.type) {
        case UPDATE_USER:
            return { ...userstate, ...action.payload}
        default:
            return userstate;
    }
}


