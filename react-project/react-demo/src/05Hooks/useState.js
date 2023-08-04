import React, { useState } from 'react'

export default function UseState() {
    const [movies, setMovies] = useState([
        { id: 1, name: "天龙八部", price: 50 },
        { id: 2, name: "射雕英雄传", price: 60 },
        { id: 3, name: "神雕侠侣", price: 70 },
        { id: 4, name: "倚天屠龙记", price: 80 },
        { id: 5, name: "拥抱星星的月亮", price: 90 },
    ]);
    //如果新的状态值需要根据之前的state计算的话, 我们可以使用函数传递给setState
    const [state, setState] = useState(()=>100)

    function changePrice(index){
        console.log(index);
        const moviesList=[...movies]
        moviesList[index].price+=1
        setMovies(moviesList)
    }
    return (
        <div>
            <ul>
                {
                    movies.map((item, index) => {
                        return (
                            <li key={item.id}>
                                <span>name: {item.name}</span>
                                <span>price: ${item.price}</span>
                                <button onClick={() => changePrice(index)}>modify price</button>
                            </li>
                        )
                    })
                }
            </ul>
            <h1>{state}</h1>
            <button onClick={()=>{
                setState((prev)=>prev+100)
            }}>+100</button>
        </div>
    )
}
