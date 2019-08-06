import * as constants from '../config/contant';
import axios from 'axios';
import { Dispatch } from 'redux';

// 获取用户列表
export const userList = () => {
    console.log("获取用户action");

    return async function (dispatch: Dispatch<any>) {
        // axios.get("api/api.json")
       await axios.get("http://localhost:8081/rest2/users")
            .then(res => {
                dispatch({
                    type: constants.FETCH_USERLIST,
                    payload: res.data
                })
            })

        // fetch("http://localhost:8081/rest2/users")
        // .then(res => res.json())
        // .then(posts =>
        //         dispatch({
        //         type: constants.FETCH_USERLIST,
        //         payload: posts
        //         })
        //     )
    }
}


// 添加用户
export const addUser = (userBody: Object) => {
    console.log("添加用户action");
    return async function (dispatch: Dispatch<any>) {
      await  axios.post("http://localhost:8081/rest/user",
            JSON.stringify(userBody),
            { method: "post", headers: { "content-Type": "application/json" } }).then(res => {
                dispatch({
                    type: constants.ADD_USER
                })
            });



        // fetch("http://localhost:8081/rest/user", {
        //         method: "post",
        //         headers: {
        //             "content-Type": "application/json"
        //         },
        //         body: JSON.stringify(userBody)})
        //     .then(res => res.json())
        //     .then(user =>
        //         dispatch({
        //             type: constants.ADD_USER,
        //             payload: user
        //         })
        //     )

    }
}

// 更新用户
export const updateUser = (userBody: Object) => {
    console.log("更新用户action");
    return async function (dispatch: Dispatch<any>) {
       await axios.put("http://localhost:8081/rest/user",
            JSON.stringify(userBody),
            { method: "put", headers: { "content-Type": "application/json" } }).then(res => {
                // dispatch(userList())
                dispatch({
                    type: constants.UPDATE_USER
                })
            });
    }
}

// 删除用户
export function deleteUser(userId: any) {
    console.log("删除用户action");

    return async function (dispatch: Dispatch<any>) {
      await  axios.delete("http://localhost:8081/rest/user?userId=" + userId)
            .then(ref => {
                dispatch(userList())
            }
            );

        // fetch("http://localhost:8081/rest/user?userId=" + userId , {
        //         method: "delete",
        //         headers: {
        //             "content-Type": "application/json"
        //         }
        //     }).then( delet => {
        //         dispatch({
        //             type: constants.DELETE_USER,
        //             payload: index
        //         })
        //     })

    }
}

// 更新用户输入
export const updateInput = (input: any) => {
    return function (dispatch: Dispatch<any>) {
        dispatch({
            type: constants.UPDATE_USER_INPUT,
            payload: input
        })
    }
}

// 获取用户信息
export const getUser = (userId: string) => {
    return async function (dispatch: Dispatch<any>) {
       await axios.get("http://localhost:8081/rest/user",
            { method: "get", params: { "userId": userId } })
            .then(res => {
                dispatch({
                    type: constants.GET_USER,
                    payload: res.data
                })
            })
    }
}

// 初始化重置store
export const reset = () => ({
    type: constants.RESET
});
