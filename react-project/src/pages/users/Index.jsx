import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { List } from './List';
import { AddEdit } from './AddEdit';


const User = ({match}) => {
    const { path } = match;
    
    return (
        <Switch>
            <Route exact path={path} component={List} />
            <Route path={`${path}/add`} component={AddEdit} />
            <Route path={`${path}/edit/:id`} component={AddEdit} />
        </Switch>
    );
}

export default User;