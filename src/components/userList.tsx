import React, { Component } from 'react';
import { IUser } from './../model/user.model';
import './userList.css'

interface Props {}

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

    componentWillMount(){
        fetch("http://localhost:8081/rest2/users")
            .then(res => res.json())
            .then(data => {
                this.setState({users:data});
                console.log(data);
            })
    }
    render(){
        return(
           <div>
               <table className="table">
                   <thead>
                    <th>姓名</th>
                    <th>性别</th>
                   </thead>
                   <tbody>
                        {this.state.users.map( user => {
                            return <tr key={user.userId}> <td>{user.userName}</td> <td>{user.userSex}</td></tr>
                        })}
                    </tbody>
                </table>
           </div>
            );
    }
}

export default User;