import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component{
    state = {
        repoName:'', //仓库名称
        repoURL:'', //仓库地址
        isLoading:true, //是否显示加载中
        keyWord:'v', //搜索关键字
        error:'' //错误信息
    }

    //页面挂载完毕后执行
    componentDidMount(){
        axios.get(`https://api.github.com/search/repositories?q=${this.state.keyWord}&sort=stars`)
        .then(
            resolve =>{
                let {html_url,name} = resolve.data.items[0]
                this.setState({
                    repoName:name,//仓库名称
                    repoURL:html_url,//仓库地址
                    isLoading:false //是否显示加载中
                })
               
            },
            reason =>{
              this.setState({
                  isLoading:false,
                  error:reason.message
              })
            }
        )
    }
    render() {
        let {isLoading,repoName,repoURL,error,keyWord} = this.state
        if (isLoading){
            return <p>Loading</p>
        }else if ( repoName && repoURL && !error ) {
        return <h1>在GitHub中以 '{keyWord}'字母开头的仓库中，点赞数最多的是<a href={repoURL}>{repoName}</a></h1>
        }else {
            return error
        }
    }
}