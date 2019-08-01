import React from "react";
import { Route, BrowserRouter } from 'react-router-dom';
import User from './../components/user/users';
import UserUpdate from '../components/user/user-update';

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={ User }/>
            <Route path="/userUpdate" exact={true} component={UserUpdate}/>
        </BrowserRouter>
    )
}

export default RootRouter;