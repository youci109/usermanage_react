import React from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import UserRoute from "../components/user/index";


const RootRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={UserRoute} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default RootRouter;