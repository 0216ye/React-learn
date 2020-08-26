import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import HomeNews from './homeNews'
import HomeMeaasge from './homeMeaasge'
 
export default class Home extends Component {
    render() {
        return (
            <div><h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className="list-group-item" to="/home/news" activeClassName="demo">News</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item " to="/home/message" activeClassName="demo">Message</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path ="/home/news" component = {HomeNews} />
                            <Route path ="/home/message" component = {HomeMeaasge} />
                            <Redirect to="/home/news" />
                        </Switch>
                        <button>回退</button>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}