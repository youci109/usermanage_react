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
                        <div>
                            <div></div>
                            <p></p>
                        </div>
                        <div>
                            <p></p>
                        </div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div id="divId">
                            <p className="st">k</p>
                            <p className="st"></p>
                            <p className="st"></p>
                        </div>
                        <div className="cs1 us2 jj" id="divId">
                            <p className="tt"></p>
                            <div id=""></div>
                        </div>
                        <a href="" target="" title="iop"></a>
                        <a href="" target="" title="iop"></a>
                        <a href="" target="" title="iop"></a>
                        <div>
                            <ul>
                                <li className="item-1"></li>
                                <li className="item-2"></li>
                                <li className="item-3"></li>
                            </ul>
                        </div>
                        {/* div>ul>li.item-$@-*3 */}
                        {/* div>ul>li.item$@2*3 */}
                        {/* div>p{hello}+div */}
                        {/* p{what is your name}+p{xiaoxi} */}

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