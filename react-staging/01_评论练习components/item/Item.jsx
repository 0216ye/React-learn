import React, { Component } from 'react'
import './item.css'
export default class Item extends Component{
    //用于删除一条评论的数据
    delete = (id)=>{
        let {deleteComment} = this.props
        //confirm属于window身上的方法，需要指定window.confirm,否则会从this身上找，this没有会报错！
        if (window.confirm('是否真的要删除该条评论？')){
            deleteComment(id)
        }
    }
    render() {
        {/*接收props参数 */}
        let {name,comment,id} = this.props
        return (
        <li className="list-group-item">
            <div className="handle">
                {/**下面的事件绑定可以传递参数    如果直接onClick={this.delete(id)},会自动执行！！！ */}
            <a href="#1" onClick = {()=>{this.delete(id)}}>删除</a>
            </div>
        <p className="user"><span >{name}</span><span> 说:</span></p>
        <p className="centence">{comment}</p>
        </li>
        )
    }
 }