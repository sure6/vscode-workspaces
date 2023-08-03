import React, { Component } from 'react'
import MainContext from './context'

export class son extends Component {
    render() {
        return (
            <div>
                {/* 多用于函数式组件 */}
                <MainContext.Consumer>
                    {
                        context => {
                            console.log(context);
                            return (<div>son page---{context.name}</div>)
                        }
                    }
                </MainContext.Consumer>

            </div>
        )
    }
}

export default son