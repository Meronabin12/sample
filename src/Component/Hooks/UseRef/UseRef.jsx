import React from 'react'
import { useRef } from 'react';

export default function UseRef() {

    const inpRef = useRef (null);
    const bgRef = useRef();
    const dispref = useRef();

    function changecolor(){

    console.log(inpRef.current.value);
    bgRef.current.style.background = inpRef.current.value
    dispref.current.innerHTML = inpRef.current.value
    

    }
  return (
    <div ref={bgRef}>
        <h1> Use ref Demo</h1>
        <label htmlFor=""> enter color code</label>
        <input type="text" ref={inpRef} name="" id=""/>
        <button onClick={changecolor}>change </button>
        <h1 ref={dispref}>
            
        </h1>

    </div>
  )
}
