import React, { Component } from 'react'
import Son from './son'

export class parents extends Component {
    state = {
        name: "frontend devops",
        msg:"this is senior frontend devops"
    }
    // 如果要让子组件改父组件的值的话, 就需要定义这个函数
    parentChange(data){
        console.log(data); //  接收到从子组件传给父组件的值之后我门可以改变父组件的值了
        this.setState({msg: data})
    }
    render() {
        let {name, msg} = this.state
        return (
            <div>
                <h1>parents page</h1>
                <p>name: {name}</p>
                <p>introduce: {msg}</p>
                {/* {...this.state}就能把state的值全部传过去 */}
                {/* 子组件改变父组件值, 那么就把父组件改值事件传给子组件 */}
                <Son {...this.state} parentChange={this.parentChange.bind(this)}/>
            </div>
        )
    }
}

export default parents