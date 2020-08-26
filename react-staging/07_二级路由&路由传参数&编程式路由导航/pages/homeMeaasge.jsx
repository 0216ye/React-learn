import React,{Component} from 'react'
import {Route,Link } from 'react-router-dom'
import HomeMeaasgeD from './Home_message_d'                                     
export default class HomeMeaasge  extends Component{
    state = {
        messages:[

        ]
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                messages:[
                    {id:1,title:"message1"},
                    {id:2,title:"message2"},
                    {id:3,title:"message3"},
                    {id:4,title:"message4"},
                ]
            })
        },10)
    }
   //路由组件的实例对象上的props，多了history、location、match三个属性，其中history可以中包含了四个方法可以控制浏览器是否留下历史记录

   //会留下历史记录，能够前进或回退
    pushShow = (id)=>{
        this.props.history.push(`/home/message/detail/${id}`)
    }

     //不会留下历史记录，不能够前进或回退
    replace = (id)=>{
        this.props.history.replace(`/home/message/detail/${id}`)
    }


     //用于点击时，回退到上一次展示的内容
    goBack = ()=>{
        this.props.history.goBack()
    }
     //用于点击时，前进到上一次的内容
    goForward = ()=>{
        this.props.history.goForward()
    }
    render(){
        console.log(this)
       let {messages} = this.state 
       return (
           <div>
             <ul>
                {
                    messages.map(item =>{
                        return (
                        <li  key={item.id}>
                            <Link to={`/home/message/detail/${item.id}`} >{item.title}</Link> &nbsp;
                            <button onClick = {()=>{this.pushShow(item.id)}} >push查看详细信息</button>&nbsp;
                            <button onClick = {()=>{this.replace(item.id)}}>replace查看详细信息</button>&nbsp;
                        </li>
                        )
                    })
                }
            </ul>
            <button onClick = {this.goBack}>回退</button>
            <button onClick = {this.goForward} >前进</button>
            <hr/>
              {/**\    /:id为占位符  */}
              <Route path = "/home/message/detail/:id" component={HomeMeaasgeD} />
           </div>
       )
   }
}