import React,{Component} from 'react'
                                 
export default class About extends Component{
    state = {

    }
    static  getDerivedStateFromProps(){
        console.log('About挂载')
        return null
    }
    componentWillUnmount(){
        console.log('About卸载')
    }
    render(){
       return  <h3>我是About的内容</h3>
   }
}