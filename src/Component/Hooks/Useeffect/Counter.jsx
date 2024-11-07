import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count,setcount] = useState(0)
    function plus(){
        setcount(count+1)
    }
    function minus(){
        setcount(count-1)
    }
    console.log("render");


    useEffect(()=>{
        console.log("update");
        
    },[])
    
  return (
    <div>
        <h1>count {count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
    </div>
  )
}
