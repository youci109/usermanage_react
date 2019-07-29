import * as constants from '../config/contant'
import { Dispatch } from 'react';


export function userList() {
    console.log("获取用户action");

    return function (dispatch:Dispatch<any>) {
            fetch("http://localhost:8081/rest2/users")
        .then(res => res.json())
        .then(posts =>
             dispatch({
            type: constants.FETCH_USERLIST,
            payload: posts
        })
        )
    }
}   

export function deleteUser(userId:string|undefined) {
    console.log("删除用户action");
    
    return function (dispatch:Dispatch<any>) {
        fetch("http://localhost:8081/rest/user?userId=" + userId , {
            method: "DELETE",
            headers: {
                "content-Type": "application/json"
            }
        })
    }
}