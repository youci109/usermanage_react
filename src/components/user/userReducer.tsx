import { FETCH_USERLIST } from '../../config/contant'

const userState ={
    users: []
}

export type PointsState = Readonly<typeof userState>;

export default  (state:PointsState = userState,action: any):PointsState =>{
    console.log("789");
    switch (action.type) {
        case FETCH_USERLIST:
           return {...state}
        default:
            return state;
    }
}