import { FETCH_USERLIST, DELETE_USER, ADD_USER } from '../../config/contant'
import { IUser } from './../../model/user.model';

const initstate = {
    users:[]
}

interface State {
    users:Array<IUser>
}

// export type userListState = Readonly<typeof userState>;

export default  (state:State = initstate ,action: any):State =>{
    switch (action.type) {
        case FETCH_USERLIST:
                console.log("获取用户reducer");
            return {...state,users: action.payload}
        case DELETE_USER:
            console.log("删除用户reducer");
            console.log(action.payload);
             
           console.log({...state});
           let userList = {...state}
           userList.users.splice(1,1)
           console.log(userList);
           console.log({...state,...userList});
           
            // userList.users.filter(user => {return user.userId === action.payload });
            return {...state}
        case ADD_USER: 
            return {...state}
        default:
            return state;
    }
}

