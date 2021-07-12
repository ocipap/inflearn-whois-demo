import React from 'react';
import 'antd/dist/antd.css';
import Search from './search/container/Search';
import User from './user/container/User'; 
import { Route } from 'react-router-dom';

export default function App() {
  return <div>
    <Route exact path="/" component={Search}/>
    <Route path="/user/:name" component={User}/>
  </div>;
}
