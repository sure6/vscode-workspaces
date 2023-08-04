import React, {useEffect, useState} from 'react'
// useEffect使用使得函数式组件有生命周期

function Page(){
  const [ age, setage] =useState(18)
  const [ money, setmoney] =useState(1000)
  useEffect(()=>{
    console.log("我被执行了");
  },[age, money]) // []可以传入依赖项, 空代表只会执行一次, 

  return (
    <div>
      <h2>page component</h2>
      <h3>{age}</h3>
      <h3>${money}</h3>
      <button onClick={()=>setage(age+1)}>长大</button>
      <button onClick={()=>setmoney(money+1000)}>有钱</button>
    </div>
  )
}

export default function UserEffect() {
  // const [state, setState]=useState(0)
  const [state, setState]=useState(true)
  /*
  在默认情况下, useEffect会在第一次渲染之后和每次更新之前都会执行. useEffect每一次渲染完都会去执行
  */
  // useEffect(()=>{
  //   document.title = `你点击了${state}次`
  // })
  
  return (
    <div> 
        <h1>{state}</h1>
        <button onClick={()=>setState(!state)}>click</button>
        {state && <Page/>}
    </div>
  )
}
