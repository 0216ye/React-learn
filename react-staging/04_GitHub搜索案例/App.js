import React,{Component} from 'react'
import Search from './04_GitHub搜索案例/search/Search'
import List from './04_GitHub搜索案例/list/List'
export default class App  extends Component{

    state = {
        users:[],//存储用户的信息
        isFirst:true,//是否第一次搜索
        isLoading:false,//搜索加载中
        error:''//错误信息
    }

    //更新状态的方法，接收一个格式和state一样的对象
    updataAppState = (obj)=>{
        //obj格式必须如下，否则错误
        /*
        users:[],//存储用户的信息
        isFirst:true,//是否第一次搜索
        isLoading:false,//搜索加载中
        error:''//错误信息
        */
        this.setState(obj)
    }

    render(){
       return (
         <div className="container">
            <section className="jumbotron">
                <h3 className="jumbotron-heading">在GitHub上搜索用户</h3>
                <Search  updataAppState={this.updataAppState} />
            </section>
            {/**将整个state对象通过props参数传过去 */}
            <List {...this.state} />
        </div>
       )
   }
}