import React,{Component} from 'react'
/*NavLink可以用于（点击路由链接时会引起地址栏的变化，地址栏一改变，会被路由器 Route所监测到，然后根据URL显示具体的组件），添加节点样式、强制给URL地址栏追加url等等
  Route用于匹配地址栏的URL，然后根据URL显示具体的组件
  Switch用于包裹多个Route，匹配一个则不再匹配其他Route

  单页面多组件就是因为这个
*/
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
export default class App  extends Component{
    render(){
       return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/**  以下使用路由相关的标签，都需要包在一个   <BrowserRouter> 节点中，可以把其放到index.js中包住App的组件
                         * 使用路由的Navlik(链接)标签 默认会自动统计active样式,可以使用activeClassName自己指定, 
                            replace可以不缓存历史记录，不能回退
                         */}
                        <NavLink className="list-group-item" to="/about" activeClassName = "demo" replace={true} >About</NavLink>
                        <NavLink className="list-group-item" to ="/home" activeClassName = "demo">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                    <div className="panel-body">
                           {/* Switch用于监听匹配的结果，匹配上一个就不再执行下面的   使用Route路由监听URL的变化(为模糊匹配)，并且切换到对应的URL地址时，显示相应的组件  
                                exact={true}:用于精确匹配
                               <Redirect/>:用于默认显示，当所有注册路由<Route/>都没有匹配上时，显示 <Redirect to="/xxx"/>的内容 
                           */}
                        <Switch>
                            <Route path="/about" component ={About} exact={true}/>
                            <Route path="/home" component ={Home} />
                            <Redirect to="/about" />
                        </Switch>
                    </div>
                    </div>
                </div>·
            </div>
        </div>
       )
   }
}
