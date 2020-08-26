import React,{Component} from 'react'
import Item from '../item/Item'
export default class List extends Component{
    render(){
        let {users,isFirst,isLoading,error,updataAppState} = this.props
        
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