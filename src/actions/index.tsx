
// import {Dispatch} from 'redux'
import * as constants from '../config/contant'


export function userList() {
    console.log("123");
    return {
        type: constants.FETCH_USERLIST
    }
}   



// function (dispatch:Dispatch) {

//     fetch("http://localhost:8081/rest2/users")
//         .then(res => res.json())
//         .then(posts => dispatch({
//             type: constants.FETCH_USERLIST
//         }))
// }