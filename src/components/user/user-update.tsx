import React, { Component } from 'react';
import { connect } from 'react-redux';
import IUser from './../../model/user.model';
import { addUser, updateUserInput, getUser,reset } from './../../actions/index';
import { Layout, Form, Icon, Input, Button } from 'antd';
import { IRootState } from '../../reducers';
import { RouteComponentProps } from "react-router-dom";
import store from '../../store/index';
import { Link } from 'react-router-dom';
import axios from 'axios';
interface Props {
    user: IUser;
    updateUserInput(e: any): void;
    addUser(e: any): void;
    getUser(userId:string): void;
    updateSuccess:Boolean;
    reset(): void;
}
type IProps = Props & RouteComponentProps<{ id: string }>;
interface Istate {
    new_user: Boolean
}

class UserUpdate extends Component<IProps,Istate>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            new_user: !this.props.match.params || !this.props.match.params.id
        }
    }

    componentWillUpdate(nextProps:any, nextState:any) {
    
        // if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
        //     this.handleClose()
        // }
        
      }


    componentWillMount(){
        if(this.state.new_user){
            this.props.reset()
        }else{
            this.props.getUser(this.props.match.params.id);
        }
    }
    
    handleChange = (e:any) => {
        const userField  = { [e.target.name]: e.target.value };
        const { user } = this.props;
        this.props.updateUserInput({...user,[e.target.name]: e.target.value})
    }

    handleSubmit = () => {
        const { user } = this.props;
        console.log(user);
        
        this.props.addUser(user);
    }


    handleClose = () => {
        this.props.history.goBack();
    }

    render() {

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const { Header, Content } = Layout;
        
        return (
            <div >
                <Layout>
                    <Header style={{ backgroundColor: "#1890ff" }} >
                        <Link to="/"><span style={{color:"white"}}>用户信息</span></Link>
                    </Header>
                    <Content style={{ marginLeft: 200, marginRight: 200 }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <br/>
                            <Form.Item>
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="userName"
                                onChange={this.handleChange}
                                    value={this.props.user.userName}  placeholder="姓名" />
                            </Form.Item>
                            <Form.Item>
                                <Input name="userSex"  onChange={this.handleChange}
                                    value={this.props.user.userSex} placeholder="性别" />
                            </Form.Item>
                            <Form.Item>
                                <Input name="userAge"  onChange={this.handleChange}
                                    value={this.props.user.userAge} placeholder="年龄" />
                            </Form.Item>
                            <Form.Item>
                                <Input name="userNo" onChange={this.handleChange}
                                    value={this.props.user.userNo} placeholder="编号" />
                            </Form.Item>
                            <Form.Item>
                                <Input name="userState" onChange={this.handleChange}
                                    value={this.props.user.userState} placeholder="状态" />
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>注册</Button>
                                <Button type="primary"  style={{ marginRight: 10 }} onClick={this.handleClose}>返回</Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </div>
        )
    }
}



const mapStateToProps = (state: IRootState) => ({
    user: state.userReducer.user,
    updateSuccess: state.userReducer.updateSuccess
})
const mapDispatchToProps = {
    updateUserInput,
    addUser,
    getUser,
    reset
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);


