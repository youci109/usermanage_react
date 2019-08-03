import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IRootState } from '../../reducers';
import IUser from '../../model/user.model';
import { getUser } from './../../actions/index';
import { Layout, Form, Icon, Input, Button } from 'antd';
export interface IAppProps extends RouteComponentProps<{ id: string }> {
    user: IUser;
    getUser(userId:string): void;
}

class Test extends React.Component<IAppProps> {
   
   
    componentDidMount(){

        this.props.getUser(this.props.match.params.id)
    }



  public render() {
      const { user } = this.props;
    return (
      <div><Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="userName"
            value={user.userName} placeholder="姓名" />
          这是 {user.userName} </div>
    );
  }
}
const mapStateToProps = (state: IRootState) => ({
    user: state.userReducer.user,
    updateSuccess: state.userReducer.updateSuccess
})
const mapDispatchToProps = {
    getUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Test)