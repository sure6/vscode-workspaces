import React, { Component } from 'react'
import World from './world'
import MainContext from './context'

export class hello extends Component {
    static contextType = MainContext
    render() {
        console.log(this.context);
        return (
            <div>parent page -- {this.context.name}--{this.context.age}
                <World />
            </div>
        )
    }
}
// 用class.contextType挂载在class上,然后使用this.context来消费最近Context上的那个值
// 可以在任何生命周期中访问到它, 包括render函数中(多用于类组件)
hello.contextType=MainContext // 与static contextType = MainContext等价

export default hello