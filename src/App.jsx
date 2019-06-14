import React,{Component} from 'react';
import {Route,Switch,HashRouter} from 'react-router-dom';

import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";

import './App.css';
export default class App extends Component{

    render(){
        return(
            <HashRouter>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
