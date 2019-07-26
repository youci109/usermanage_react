import React, { Component } from 'react';

interface Props {

}

interface State {
    users:[]
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
            .then(data => {this.setState({users:data});
                console.log(data);
            })
    }
    // [User{userId='437e4dcc-8b59-4f94-978d-e997fdef4c1e', userName='xiaoxi1', userSex='男', userAge=24, userNo='2019001', userPhoneNum='15592487001', createTime=Fri Jul 26 00:00:00 CST 2019, modifyTime=Fri Jul 26 00:00:00 CST 2019, userState='离线'}, User{userId='1b9be272-bbc2-46d1-88aa-244946d9c902', userName='xiaoxi2', userSex='女', userAge=24, userNo='2019002', userPhoneNum='15592487002', createTime=Fri Jul 26 00:00:00 CST 2019, modifyTime=Fri Jul 26 00:00:00 CST 2019, userState='隐身'}, User{userId='2cf37ec9-a98b-4d04-a2de-35dfd1b41132', userName='xiaoxi3', userSex='男', userAge=24, userNo='2019003', userPhoneNum='15592487003', createTime=Fri Jul 26 00:00:00 CST 2019, modifyTime=Fri Jul 26 00:00:00 CST 2019, userState='请勿打扰'}, User{userId='4dc38468-50be-4536-be4a-ed0ef354ac15', userName='xiaoxi4', userSex='女', userAge=24, userNo='2019004', userPhoneNum='15592487004', createTime=Fri Jul 26 00:00:00 CST 2019, modifyTime=Fri Jul 26 00:00:00 CST 2019, userState='忙碌'}, User{userId='894f077d-d358-4344-90ba-a9a402755241', userName='xiaoxi5', userSex='男', userAge=24, userNo='2019005', userPhoneNum='15592487005', createTime=Fri Jul 26 00:00:00 CST 2019, modifyTime=Fri Jul 26 00:00:00 CST 2019, userState='离开'}, User{userId='37bd08f5-de2e-49f6-af9d-45e40cba5ff0', userName='xiaoxi6', userSex='女', userAge=24, userNo='2019006', userPhoneNum='15592487006', createTime=Fri Jul 26 00:00:00 CST 2019, modifyTime=Fri Jul 26 00:00:00 CST 2019, userState='在线'}]
    render(){
        const userList = this.state.users.map((item, index) => {
            <div key='dd'>
                {item}
            </div>
        });
        return(
           <div>{userList}</div>
            );
    }
}

export default User;