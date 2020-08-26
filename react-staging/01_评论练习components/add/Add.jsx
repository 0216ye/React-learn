import React, { Component } from 'react'
//导入随机生成唯一id的包
import uuid from 'uuid'
export default class Add extends Component{

    add = ()=>{
      //1获取操作状态的方法
      let {addComment} = this.props

      //2获取输入的内容
      let name  = this.refs.name.value
      let comment = this.comment.value
      //3校验数据
      if ( !name.trim() || !comment.trim()){
        alert('输入框内容均不能为空')
        return
      }
      //4添加数据到state :uuid()为生成唯一id的包的方法
      addComment({id:uuid(),name,comment})
      //清空输入框
      this.refs.name.value=''
      this.comment.value=''

    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label>用户名</label>
                    {/**ref参数 */}
                    <input type="text" className="form-control" placeholder="用户名"  ref='name' />
                  </div>
                  <div className="form-group">
                    <label>评论内容</label>
                    {/**ref参数 */}
                    <textarea style={{resize:'none'}} className="form-control" rows="6" placeholder="评论内容" ref={(comment)=>{this.comment = comment}} ></textarea>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      {/**绑定点击事件 */}
                      <button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
                    </div>
                  </div>
                </form>
             </div>
        )
    }
}