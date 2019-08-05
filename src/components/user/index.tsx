import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import Users from './users';
import UserUpdate from './userUpdate';
import UserDetail from './userDetail';

interface Props extends RouteComponentProps { }
const Routes = (props: Props) => {
  const { match } = props;
  console.log(`${match.url}`);

  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Users} />
        <Route path={`/:id/edit`} exact={true} component={UserUpdate} />
        <Route path={`/new`} exact={true} component={UserUpdate} />
        <Route path={`/:id`} exact={true} component={UserDetail} />
      </Switch>
    </div>
  );
};

export default Routes;
