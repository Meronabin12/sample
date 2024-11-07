import React, { createContext } from 'react'
import Clientpage from './Clientpage'

export const user = createContext();


export default function Bankpage() {
    
   
    const amount = '20,000';
    
    return (
        <div>
            <h1>Bank page</h1>
{/* pass amount to client  */}
            <user.Provider value = { amount}>

                <Clientpage/>

            </user.Provider>
        </div>
    )
}
