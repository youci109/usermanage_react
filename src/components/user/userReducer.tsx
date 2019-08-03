import * as contants from '../../config/contant'
import IUser from './../../model/user.model';

const initstate = {
    users: [],
    user:  {
        userId :"",
        userName:"",   
        userSex:"",
        userAge :"",
        userNo :"",
        userPhoneNum  :"",
        createTime :"",
        modifyTime :"",
        userState :""
    },
    updateSuccess:false
}
export interface userState {
    users: Array<IUser>;
    user: IUser,
    updateSuccess:Boolean
}

export default (state: userState = initstate, action: any): userState => {
    switch (action.type) {
        case contants.FETCH_USERLIST:
            console.log("获取用户reducer");
            const newStat = JSON.parse(JSON.stringify(state));

            return { ...newStat,users: action.payload }
        // case contants.DELETE_USER:
        //     console.log("删除用户reducer");
        //     // 进行深拷贝【注意深拷贝、浅拷贝问题】
        //     state.users.splice(action.payload, 1)
        //     const newState = JSON.parse(JSON.stringify(state));
        //     return { ...state, ...newState }
        case contants.UPDATE_USER:
            return { ...state,
                updateSuccess:true
                ,user:action.payload}
        case contants.GET_USER:
                return {...state,user:action.payload}
        case contants.ADD_USER:
            return { ...state,updateSuccess:true}
        case contants.RESET:
                return {
                    ...initstate
                };
        default:
            return state;
    }
}


