import React,{Component} from 'react'
                                 
export default class HomeMessageD extends Component{
    state = {
        messageDetails : [
            {id: 1, title: '消息1', content: '我爱你, 中国'},
            {id: 2, title: '消息2', content: '我爱你, 老婆'},
            {id: 3, title: '消息3', content: '我爱你, 孩子'},
            {id: 4, title: '消息4', content: '我爱你, 男孩'},
            {id: 5, title: '消息5', content: '我爱你, 男孩子'},
            {id: 6, title: '消息6', content: '我爱你, 大男孩子'},
          ]
    }
    render(){
        //可以获取到对应的url占位符的参数   console.log(this.props.match.params.id)
        let {id} = this.props.match.params
        let {messageDetails} = this.state
        //find 可以在数组中查找一个匹配条件的结果，并且把匹配上的对应的数组下标值返回
        let obj =  messageDetails.find ((item)=>{
            //url参数的id是字符串，数组的id是数字！
          return    item.id === id*1
        })
        if (obj){
            return (
                <ul>
                    <li>编号:{obj.id}</li>
                    <li>标题:{obj.title}</li>
                    <li>内容:{obj.content}</li>
                </ul>
           )
        }else{
            return <p>暂无数据</p>
        }
   }
}