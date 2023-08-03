import React, { Component } from 'react'

export class son extends Component {
    
    render() {
        return (
            <div>
                 <button style={{"color":this.props.color}}>{this.props.value}</button>
            </div>
        )
    }
}

export default son