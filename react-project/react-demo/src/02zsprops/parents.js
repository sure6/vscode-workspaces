import React, { Component } from 'react'
import Son from './son'

export class parents extends Component {
    state={
        name:""
    }
    handleValue=(e)=>{
        this.setState({name:e.target.value})
    }
    render() {
        return (
            <div>
                parents
                <input type='text' value={this.props.value} onChange={this.handleValue}/>
                <Son {...this.props}/>
            </div>
        )
    }
}

export default parents