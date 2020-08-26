import React,{Component} from 'react'
                                     
export default class HomeMeaasge  extends Component{
    state = {
        messages:[

        ]
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                messages:[
                    {id:"1asdasd1a1",title:"message1"},
                    {id:"1asdasd1a2",title:"message2"},
                    {id:"1asdasd1a3",title:"message3"},
                    {id:"1asdasd1a4",title:"message4"},
                ]
            })
        },1000)
    }
    render(){
       let {messages} = this.state 
       return (
        <ul>
            {
                messages.map(item =>{
                    return (
                    <li>
                        <a href="/home/message/5"  key={item.id} >{item.title}</a>
                    </li>
                    )
                })
            }
        </ul>
       )
   }
}