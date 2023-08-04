import React, { Component } from 'react'

export class ClassClearInterval extends Component {

    state = {
        count: 0
    }

    componentDidMount() {
        this.timer=setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)
    }
    // clear interval
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>{this.state.count}</div>
        )
    }
}

export default ClassClearInterval