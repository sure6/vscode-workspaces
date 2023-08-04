import React, { createRef, useEffect, useRef } from 'react'
/*
createRef: 存储DOM元素对象, current刚开始创建时候是null
渲染完成后,inputRef.current是可以获取到对应的DOM对象
每次重新渲染时候都会创建一个新的ref对象
useRef: 第一次渲染的时候后创建一个对象以后, 之后重新渲染的时候, 如果发现这个对象创建过
它就不会创建新的, 所以性能好点.


*/
export default function UseRefLearn() {
    const inputRef = createRef()
    console.log(inputRef);

    const useinputRef = useRef()
    console.log(useinputRef);
    // 在useEffect中就能看到渲染完成后是input这个dom对象
    useEffect(()=>{
        console.log(inputRef);
    },[])
    
    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={()=> {inputRef.current.focus()}}>获取焦点</button>
            <input type='text' ref={inputRef} />
            <button onClick={()=> {inputRef.current.focus()}}>获取焦点</button>
        </div>
    )
}
