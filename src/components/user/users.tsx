import React, { Component } from 'react';
import { IUser } from '../../model/user.model';
import { connect } from 'react-redux';
import { userList, deleteUser } from '../../actions/index';
import './users.css';

interface Props {
    users:Array<IUser>;
    userList():void;
    deleteUser(userId:string|undefined):void;
}

interface State {
    users:Array<IUser>
}

class User extends Component<Props,State>{

    componentDidMount(){
        this.props.userList();
    }

    componentWillMount(){
     
    }

    deleteUser = (userId:string|undefined) => {
        this.props.deleteUser(userId);
        //  fetch("http://localhost:8081/rest/user?userId=" + userId , {
        //     method: "DELETE",
        //     headers: {
        //         "content-Type": "application/json"
        //     }
        // })
    }

    render(){
        return(
           <div>
               <br></br>
               <table className="table">
                   <thead>
                    <tr>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>编号</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                   </thead>
                   <tbody>
                        {this.props.users.map( user => {
                            const userId = user.userId
                            return <tr key={user.userId}> 
                                    <td>{user.userName}</td> 
                                    <td>{user.userSex}</td>
                                    <td>{user.userAge}</td>
                                    <td>{user.userNo}</td>
                                    <td>{user.userState}</td>
                                    <td><button type="button" onClick={()=>this.deleteUser(userId)}>删除</button></td>
                                    </tr>
                        })}
                    </tbody>
                </table>
           </div>
            );
    }
}

const mapStateToProps = (state:State) => ({
    users: state.users
}) 

const mapDispatchToProps = {
    userList,
    deleteUser
}

export default connect(mapStateToProps,mapDispatchToProps)(User);