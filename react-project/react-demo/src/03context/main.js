import React, { Component } from 'react'
import Hello from './hello'
import MainContext from './context'


export class main extends Component {
  render() {
    let obj={name:"sure", age:18}
    // let arr=[1,2,3,4,5,6]
    return (
      <div> 
        <MainContext.Provider value={obj}>
            main page  
            <Hello/>
        </MainContext.Provider>
        
        </div>
    
    )
  }
}

export default main