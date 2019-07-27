import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IUser } from './../../model/user.model';

interface Props {

}
interface State {

}

export class UserUpdate extends Component<Props, IUser> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userName: "",
            userSex: "",
            userAge: 1,
            userNo: "",
            userPhoneNum: "",
            userState: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
    }

    onChange(e: any) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onsubmit(e: any) {
        // e.preventDefault();

        const userObject = {
            userName: this.state.userName,
            userSex: this.state.userSex,
            userState: this.state.userState
        }

        // const user2 = { userName: 'xiaoxi0', userSex: '女', userAge: 3, userNo: '2019006', userPhoneNum: '15592487006', userState: '在线' }

        fetch("http://localhost:8081/rest/user", {
            method: "post",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        }).then(res => res.json()).then(data => console.log(data))
    }


    render() {
        return (
            <div>
                <h1>添加用户</h1>
                <form onSubmit={this.onsubmit}>
                    <div>
                        <label htmlFor="">姓名</label>
                        <input type="text" name="userName" onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="">性别</label>
                        <input type="text" name="userSex" onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="">年龄</label>
                        <input type="text" name="userAge" onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="">编号</label>
                        <input type="text" name="userNo" onChange={this.onChange} />
                    </div>
                    <div>
                        <label htmlFor="">状态</label>
                        <input type="text" name="userState" onChange={this.onChange} />
                    </div>
                    <button type="submit">提交</button>
                    <button type="button"> 返回</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdate)
