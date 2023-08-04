import React, { useReducer } from 'react'
const initialState={count:0}

function reducer(state, action){
    switch(action.type){
        case 'add':
            return {count: state.count+1}
        case 'sub':
            return {count: state.count-1}
        default:
            throw new Error()
    }
}
export default function UseReducerLearn() {
    // 接收2个参数, 第一个是参数是reducer函数, 第二个参数是初始值
    /**
     * reducer函数接收2个参数, 一个state, 另一个是action, 然后返回一个state, dispatch
     * state 返回个状态中值, dispatch是可以发布事件来更新state的. 相当于微型redux
     */
    // const [state, dispatch]= useReducer((state, action)=>{
    //     if(action==="add"){
    //         return state+1
    //     }else if(action==="sub"){
    //         return state-1
    //     }
    //     return state
    // },0)
    const [state, dispatch]= useReducer(reducer,initialState)
  return (
    <div>
        {/* <h2>{state}</h2>
        <button onClick={()=>dispatch('add')}>+1</button>
        <button onClick={()=>dispatch('sub')}>-1</button> */}
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:'add'})}>+1</button>
        <button onClick={()=>dispatch({type:'sub'})}>-1</button>
    </div>
  )
}
