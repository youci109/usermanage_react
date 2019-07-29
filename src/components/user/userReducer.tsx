import { FETCH_USERLIST, DELETE_USER } from '../../config/contant'

const userState ={
    users: []
}

export type userListState = Readonly<typeof userState>;

export default  (state:userListState = userState,action: any):userListState =>{
    switch (action.type) {
        case FETCH_USERLIST:
                console.log("获取用户reducer");
            return {...state,users: action.payload}
        case DELETE_USER:
            console.log("删除用户reducer"); 
            return {...state}
        default:
            return state;
    }
}

