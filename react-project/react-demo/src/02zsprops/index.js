import React, { Component } from 'react'
import Parents from './parents'

export class index extends Component {
  state={
    list:[
      {id:1,value:"red"},
      {id:2,value:"green"},
      {id:3,value:"blue"},
    ],
    color:"red"
  }
  handleSelect=(e)=>{
    this.setState({color:e.target.value})
  }
  render() {
    let {list, color}=this.state
    return (
      <div>grandfa page
        <select value={color} onChange={this.handleSelect}>
          {
            list.map(item=><option key={item.id}>{
            item.value
            }</option>)
          }

        </select>
        {
            list.map(item=><Parents key={item.id} value={item.value} color={color} />)
          }
      </div>
    )
  }
}

export default index