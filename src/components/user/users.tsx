import React, { Component } from 'react';
import IUser from '../../model/user.model';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { userList, deleteUser } from '../../actions/index';
import { IRootState } from '../../reducers';
import { Link } from 'react-router-dom'
import './users.css';
import { List, Typography, Layout, Button  } from 'antd';



interface Props {
    users:Array<IUser>;
    userList():void;
    deleteUser(userId:string|undefined, index:any):void;
}

interface state {
    users:Array<IUser>
}

class User extends Component<Props,state>{

    constructor(props:Props){
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }



    componentDidMount(){
        this.props.userList();
    }

    // 删除用户
    deleteUser = (userId:string|undefined, index:any) => {
        this.props.deleteUser(userId,index);
    }

    

    render(){

        const { Header, Footer, Content } = Layout;

        return(
           <div>
               <Layout>
                <Header style={{backgroundColor:"#1890ff"}} > 
                    <h1 style={{color:"white"}}>
                        用户列表
                        <Link to="/userUpdate"><Button style={{marginLeft:10}}>新增</Button></Link>
                    </h1>
                    
                </Header>
                <Content>
                <List
                    header={<div>
                                <span style={{marginLeft:15}}>姓名</span>
                                <span style={{marginLeft:40}}>性别</span>
                                <span style={{marginLeft:40}}>年龄</span>
                                <span style={{marginLeft:40}}>编号</span>
                                <span style={{marginLeft:40}}>状态</span>
                                <span style={{marginLeft:40}}>操作</span>
                            </div>}
                bordered={true}
                dataSource={this.props.users}
                renderItem={(user,index) => (
                    <List.Item actions={[
                    <Button>编辑</Button >, <Button  onClick={this.deleteUser.bind(this,user.userId,index)}>删除</Button>]}>
                        <Typography.Text mark>{user.userName}</Typography.Text>
                        <span style={{marginLeft:40}}>{user.userSex}</span>
                        <span style={{marginLeft:40}}>{user.userAge}</span>
                        <span style={{marginLeft:40}}>{user.userNo}</span>
                        <span style={{marginLeft:40}}>{user.userState}</span>
                    </List.Item>
                )}
                />
                </Content>
                <Footer>Footer</Footer>
                </Layout>
           </div>
            );
    }
}

const mapStateToProps = (state:IRootState) => ({
    users: state.userReducer.users
}) 

const mapDispatchToProps = {
    userList,
    deleteUser
}

export default connect(mapStateToProps,mapDispatchToProps)(User);
