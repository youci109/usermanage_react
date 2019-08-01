import * as constants from '../config/contant'
import { Dispatch } from 'react';


export const  userList = () => {
    console.log("获取用户action");

    // return {
    //     type: constants.FETCH_USERLIST
    // }

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


export const addUser = (userBody:Object) => {
    console.log("添加用户action");
    return function (dispatch:Dispatch<any>) {
        fetch("http://localhost:8081/rest/user", {
            method: "post",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(userBody)
        }).then(res => res.json()).then(user =>
            dispatch({
                type: constants.ADD_USER,
                payload: user
            })
            )
    }
}

export function deleteUser(userId:string|undefined, index:any) {
    console.log("删除用户action");
    
    return function (dispatch:Dispatch<any>) {
        fetch("http://localhost:8081/rest/user?userId=" + userId , {
                method: "delete",
                headers: {
                    "content-Type": "application/json"
                }
            }).then( delet => {
                dispatch({
                    type: constants.DELETE_USER,
                    payload: index
                })
            })
        
    }
}
