import React,{Component} from 'react'
import Item from '../item/Item'
import PubSub from 'pubsub-js'
export default class List extends Component{

    state = {
        users:[],//存储用户的信息
        isFirst:true,//是否第一次搜索
        isLoading:false,//搜索加载中
        error:''//错误信息
    }

    //页面挂载完执行
    componentDidMount(){
        //消息的订阅
        PubSub.subscribe('search',(msg,data)=>{
           this.setState(data)
        })
    }
    render(){
        let {users,isFirst,isLoading,error} = this.state
        
        if (isFirst){
            return <h2>输入用户名，进行搜索</h2>
        }else if (isLoading){
            return <h2>Loading...</h2>
        }else if (error) {
            return <h2>{error}</h2>
        }else {
            return (
                <div className="row">
                   {
                       users.map(item =>{
                            return <Item  key={item.id} {...item} />
                       })
                   }
               </div>
            )
        }
    }
}