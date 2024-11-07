import React, { useState } from 'react'
import './Counter.css';

export default function Counter() {
    // const [state,setstate] = useState(initialstate)

    const [count,setcount] = useState(0)


    function incre(){
        setcount(count+2)
    }

    function decre(){
        setcount(count-2)
    }
    function Reset(){
        setcount(count-count)
    }
  return (
    <div>
        <h1>counter page</h1>
        <h1>count : {count}</h1>

        <button onClick={incre}>+</button>
        <button onClick={Reset}>reset</button>
        <button onClick={decre}>-</button>
    </div>
  )
}
