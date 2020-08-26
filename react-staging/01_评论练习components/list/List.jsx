import React,{Component} from 'react'
import Item from '../item/Item.jsx'
import './list.css'
export default class List extends Component{
    render() {
        {/*接收props参数 */}
        let {comment,deleteComment}  =this.props
        return (
         <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            {/*运用三目表达式，控制 h2标签是否显示*/}
            <h2 style={{display:comment.length === 0 ? 'block':'none'}} >暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">
               {
                   comment.map(item =>{
                    {/* return  <Item  key={item.id} id={item.id} name={item.name} comment={comment.comment}/>
                       下面代码是 props参数传递的简写方法，是因为有bable编译，才能这样使用*/}
                    return <Item key={item.id} {...item} deleteComment={deleteComment}/> 
                   })
                } 
            </ul>
        </div>
        )
    }
}