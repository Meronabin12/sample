import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Usefetch(url) {
    
    const [view,setview] = useState([])


    useEffect(()=>{
        axios.get(url)
        .then((res)=>{setview(res.data)})
        .catch((err)=>{console.log(err)})
    },[url])
 

    return [view]

}
