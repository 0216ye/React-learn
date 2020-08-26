import React, { Component } from 'react'
//引入其他组件
// import Add from './components/add/Add.jsx'
// import List from './components/list/List.jsx'
import Add from './add/Add'
import List from './list/List'
export default class App extends Component{
   /*
      操作state的方法
        特别注意:!!! 	1.不能直接修改  (this.state = xxxx)
                      2.不能直接更新 (let xxx = this.state.xxxx) //不能这样获取状态中的对象类型数据(操作指向同一个地址值的数据)，可能会产生一些问题(state状态更新不了)
    */
    state = {
      comment:[
        {id:'123asjd12',name:'永',comment:'React用心学，也不是很难'},
        {id:'123asjd13',name:'Ye',comment:'React用心学，也不算很简单'},
        {id:'123asjd14',name:'洁',comment:'React用心学，我可以学会得'}
      ]
    }

    //用于添加一个数据到状态中
    addComment = (commentObj)=>{
      //1获取原状态中数据
      let comment = [...this.state.comment] //标准写法
      //2将获取到的新数据添加到comment新数组中
      comment.unshift(commentObj)
      //3将全部数据维护到state中
      this.setState({comment})
    }
    
    //用于从状态中删除一条数据
    deleteComment = (id)=>{
      //1获取原state状态数据
      let comment = [...this.state.comment]
      console.log(comment)
      //2filter:遍历并过滤返回满足条件的数据，组成一个新数组,不会影响原数组的内容
      comment = comment.filter(item =>{ // item 为-->{id: "123asjd12", name: "永", comment: "React用心学，也不是很难"}
        return item.id !== id      
      })
      //3修改删除后，状态中数据
      this.setState({comment})
    }

    render() {
      let {comment} = this.state
        return (
            <div>
            <header className="site-header jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h1>请发表对React的评论</h1>
                  </div>
                </div>
              </div>
            </header>
            <div className="container">
                <Add addComment={this.addComment}/>{/*//传递props 修改state方法的参数*/ }
                <List comment={comment} deleteComment={this.deleteComment} />{/*//传递props参数*/ }
            </div>
          </div>
        )
    }
}