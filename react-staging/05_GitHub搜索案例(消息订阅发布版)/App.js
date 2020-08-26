import React,{Component} from 'react'
import Search from './05_GitHub搜索案例(消息订阅发布版)/search/Search'
import List from './05_GitHub搜索案例(消息订阅发布版)/list/List'
export default class App  extends Component{
    render(){
       return (
         <div className="container">
            <section className="jumbotron">
                <h3 className="jumbotron-heading">在GitHub上搜索用户</h3>
                <Search  />
            </section>
            <List  />
        </div>
       )
   }
}