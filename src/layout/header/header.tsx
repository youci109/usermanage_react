import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Layout } from 'antd';


export class Header extends Component{

    render() {
        const { Header } = Layout
    
        return (
            <div style={{ backgroundColor: "#1890ff" }} >
                <Link to="/">
                    <FontAwesomeIcon icon="sign-in-alt" />
                    <span style={{ color: "white" }}>1用户列表</span></Link>
                <Link to={`/new`}><Button style={{ marginLeft: 10 }}> 新增</Button></Link>
                <Link to={{ pathname: `/new`, state: { "name": "xiaoxi123456" } }}><Button style={{ marginLeft: 10 }}>新增2</Button></Link>
            </div>
        )
    }
}

export default Header
