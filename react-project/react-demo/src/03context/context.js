import React from "react";

// 创建一个context对象, 组件会从组件树中离自身最近的那个
// 匹配的provider 中读取到当前的context的值
// const MainContext=React.createContext({name="sure",age:18}) 给默认值, 没有使用provider时候生效
const MainContext=React.createContext()

export default MainContext