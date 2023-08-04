import React, { useEffect, useState } from 'react'

export default function FunctionClearInterval() {
    const [state, setstate]=useState(0)
    const timer=useEffect(()=>{
        setInterval(()=>{
            setstate((prev)=>prev+1)
        },1000)
        // 清除定时器
        return ()=>clearInterval(timer)
    }, [])
  return (
    <div>{state}</div>
  )
}
