import React, { Component } from 'react';
import { connect } from 'react-redux';
import IUser from './../../model/user.model';
import { addUser, updateUser } from './../../actions/index';
import { Layout, Form, Icon, Input, Button } from 'antd';
import { IRootState } from '../../reducers'

interface Props {
    user: IUser;
    updateUser(e: any): void;
    addUser(e: any): void;
}
class UserUpdate extends Component<Props>{
    constructor(props: Props) {
        super(props);
    }

    handleSubmit = () => {
        const { user } = this.props;
        this.props.addUser(user)
    }

    onChange = (e:any) => {
        const userField  = { [e.target.name]: e.target.value };
        this.props.updateUser(userField)
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
                        <h1 style={{ color: "white" }}>添加用户</h1>
                    </Header>
                    <Content style={{ marginLeft: 200, marginRight: 200 }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="userName"

                                    defaultValue={this.props.user.userName} onChange={this.onChange} placeholder="姓名" />
                            </Form.Item>
                            <Form.Item>
                                <Input name="userSex" onChange={this.onChange}
                                    defaultValue={this.props.user.userSex} placeholder="性别" />
                            </Form.Item>
                            <Form.Item>
                                <Input name="userAge" onChange={this.onChange}
                                    defaultValue={this.props.user.userAge} placeholder="年龄" />
                            </Form.Item>
                            <Form.Item>
                                <Input name="userNo" onChange={this.onChange}
                                    defaultValue={this.props.user.userNo} placeholder="编号" />
                            </Form.Item>
                            <Form.Item>
                                <Input name="userState" onChange={this.onChange}
                                    defaultValue={this.props.user.userState} placeholder="状态" />
                            </Form.Item>
                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>注册</Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </div>
        )
    }
}



const mapStateToProps = (state: IRootState) => ({
    user: state.updateUser
})
const mapDispatchToProps = {
    updateUser,
    addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate);


