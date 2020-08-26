import React,{Component} from 'react'
import axios from 'axios'

export default class Search  extends Component{
    myRef = React.createRef()
      
    //button点击事件
    search = ()=>{
        //接收props参数传递的方法
        let {updataAppState} = this.props
        //1 获取用户输入的值
        let userValue = this.myRef.current.value
        //2 校验数据
        if (userValue.trim() === '') return
        //3 发送请求
        let URL = `https://api.github.com/search/users?q=${userValue}`
        //在发送请求之前，执行一次，用于更新isLoading
        updataAppState({
            users:[],//存储用户的信息
            isFirst:false,//是否第一次搜索
            isLoading:true,//搜索加载中
            error:''//错误信息
        })
        axios.get(URL)
             .then(
                 value=>{    
                    updataAppState({
                        users:value.data.items,//存储用户的信息
                        isFirst:false,//是否第一次搜索
                        isLoading:false,//搜索加载中
                        error:''//错误信息
                    })
                 }
             )
             .catch(
                 error=>{
                    updataAppState({
                        users:[],//存储用户的信息
                        isFirst:false,//是否第一次搜索
                        isLoading:false,//搜索加载中
                        error:error.message//错误信息
                    })
                 }
             )
        //4 将响应的数据维护到状态中
        //5 清空输入框的信息
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="输入信息进行搜索"   ref ={this.myRef} />&nbsp;
                <button onClick ={this.search} >搜索</button>
           </div>
        )
        
    }
}