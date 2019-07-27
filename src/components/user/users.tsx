import React, { Component } from 'react';
import { IUser } from '../../model/user.model';
import { connect } from 'react-redux';
import { userList } from '../../actions/index';
import './users.css';

interface Props {
}

interface State {
    users:Array<IUser>
}

class User extends Component<Props,State>{
    
    constructor(props:Props){
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount(){

        // this.props.userList();
                
    }

    componentWillMount(){
        // fetch("http://localhost:8081/rest2/users")
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({users:data});
        //         console.log(data);
        //     })
    }

    deleteUser = (userId:string|undefined) => {

         fetch("http://localhost:8081/rest/user?userId=" + userId , {
            method: "DELETE",
            headers: {
                "content-Type": "application/json"
            }
        })
    }

    render(){
        return(
           <div>
               <br></br>
               <table className="table">
                   <thead>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>编号</th>
                    <th>状态</th>
                    <th>操作</th>
                   </thead>
                   <tbody>
                        {this.state.users.map( user => {
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


export default connect(null,{userList})(User);