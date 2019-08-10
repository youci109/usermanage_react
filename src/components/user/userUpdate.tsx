import React, { Component } from 'react';
import { connect } from 'react-redux';
import IUser from '../../model/user.model';
import {
  addUser,
  updateUser,
  updateInput,
  getUser,
  reset
} from '../../actions/index';
import { Layout, Form, Icon, Input, Button } from 'antd';
import { IRootState } from '../../reducers';
import { RouteComponentProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
interface Props {
  user: IUser;
  updateInput(e: any): void;
  addUser(user: IUser): void;
  updateUser(user: IUser): void;
  getUser(userId: string): void;
  updateSuccess: Boolean;
  reset(): void;
}
type IProps = Props & RouteComponentProps<{ id: string }>;
interface Istate {
  new_user: Boolean;
}

class UserUpdate extends Component<IProps, Istate> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      new_user: !this.props.match.params || !this.props.match.params.id
    };
  }



  componentWillReceiveProps(nextProps: any) {
    console.log(nextProps)
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(nextProps);

    return true
  }

  componentWillUpdate(nextProps: any, nextState: any) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentWillMount() {
    if (this.state.new_user) {
      console.log("++++++")
      console.log(this.props.location.state.name)
      console.log("++++++")
      this.props.reset();
    } else {
      this.props.getUser(this.props.match.params.id);
    }
  }

  handleChange = (e: any) => {
    const { user } = this.props;
    this.props.updateInput({ ...user, [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { user } = this.props;
    if (this.state.new_user) {
      this.props.addUser(user);
    } else {
      this.props.updateUser(user);
    }
  };

  handleClose = () => {
    this.props.history.goBack();
  };

  render() {
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const { Header, Content } = Layout;

    return (
      <div>
        <Layout>
          <Header style={{ backgroundColor: '#1890ff' }}>
            <Link to='/user'>
              <span style={{ color: 'white' }}>{this.state.new_user ? "新增用户信息" : "编辑用户信息"}</span>
            </Link>
          </Header>
          <Content style={{ marginLeft: 200, marginRight: 200 }}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <br />
              <Form.Item >
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  name="userName"
                  onChange={this.handleChange}
                  value={this.props.user.userName}
                  placeholder="姓名"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  name="userSex"
                  onChange={this.handleChange}
                  value={this.props.user.userSex}
                  placeholder="性别"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  name="userAge"
                  onChange={this.handleChange}
                  value={this.props.user.userAge}
                  placeholder="年龄"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  name="userNo"
                  onChange={this.handleChange}
                  value={this.props.user.userNo}
                  placeholder="编号"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  name="userState"
                  onChange={this.handleChange}
                  value={this.props.user.userState}
                  placeholder="状态"
                />
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: 10 }}
                >
                  更新
                </Button>
                <Button
                  type="primary"
                  style={{ marginRight: 10 }}
                  onClick={this.handleClose}
                >
                  返回
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  user: state.userReducer.user,
  updateSuccess: state.userReducer.updateSuccess
});
const mapDispatchToProps = {
  updateInput,
  addUser,
  updateUser,
  getUser,
  reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserUpdate);
