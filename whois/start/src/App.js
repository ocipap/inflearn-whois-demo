import React from 'react';
import 'antd/dist/antd.css';
import Search from './search/container/Search.jsx';
import User from './user/container/User.jsx';
import { Route } from 'react-router-dom';

export default function App() {
  return <>
    <Route exact path={'/'} component={Search}/>
    <Route path={'/user/:name'} component={User}/>
  </>;
}
