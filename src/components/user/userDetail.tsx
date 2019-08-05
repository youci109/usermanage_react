import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { IRootState } from '../../reducers';
import IUser from '../../model/user.model';
import { getUser } from '../../actions/index';
import { Link } from 'react-router-dom';
import { Layout, Descriptions, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

interface Props extends RouteComponentProps<{ id: string }> {
    user: IUser;
    getUser(userId: string): void;
}

class UserDetail extends React.Component<Props> {
    componentDidMount() {
        this.props.getUser(this.props.match.params.id);
    }

    handleClose = () => {
        this.props.history.goBack()
    }

    render() {

        const user = this.props.user;
        const { Header, Content } = Layout;
        return (
            <div>
                <Layout>
                    <Header style={{ backgroundColor: '#1890ff' }}><FontAwesomeIcon color={"red"} icon={faCoffee}  />
                        <Link to="/">
                            <span style={{ color: 'red' }}>用户信息</span>
                        </Link>
                    </Header>
                    <Content style={{ marginLeft: 200, marginRight: 200 }}>
                        <Descriptions title="信息详情">
                            <Descriptions.Item label="姓名">{user.userName}</Descriptions.Item>
                            <Descriptions.Item label="性别">{user.userSex}</Descriptions.Item>
                            <Descriptions.Item label="年龄">{user.userAge}</Descriptions.Item>
                            <Descriptions.Item label="编号">{user.userNo}</Descriptions.Item>
                            <Descriptions.Item label="状态">{user.userState}</Descriptions.Item>
                        </Descriptions>
                        <Button
                            type="primary"
                            style={{ marginRight: 10 }}
                            onClick={this.handleClose}
                        >
                            返回
                        </Button>
                    </Content>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state: IRootState) => ({
    user: state.userReducer.user
})

const mapDispatchToProps = {
    getUser
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);