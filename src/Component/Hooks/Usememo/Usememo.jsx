import React, { useEffect, useMemo, useState } from 'react'

export default function Usememo() {
    const [count, setcount] = useState(0)
    const [maxi, setmax] = useState([2, 4, 5, 6])

    function plus() {
        setcount(count + 1)

    }

    function minus() {
        setcount(count - 1)
    }


    console.log("render"); 


    const maxs = () => {
        // return(

        console.log("maximum");

        return Math.max(...maxi)


    }



    const usemax = useMemo(maxs, [maxi])

    



    return (
        <div>

            <h1>{count}</h1>
            <button onClick={plus} >plus</button>
            <button onClick={minus} >minu</button>

            {/* <h1>{maxs()}</h1> */}
            <h1>{usemax}</h1>


        </div>
    )
}
