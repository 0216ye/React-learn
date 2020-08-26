import React,{Component} from 'react'
                                 
export default class About extends Component{
    componentWillMount(){
        console.log('About挂载')
    }
    componentWillUnmount(){
        console.log('About卸载')
    }
    render(){
       return  <h3>我是About的内容</h3>
   }
}