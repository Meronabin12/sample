import React, { useContext } from 'react'
import { user } from './Bankpage'

export default function Clientepage() {
    const money = useContext(user)

  return (
    <div>
        Clientpage
        
        <h1>{money}</h1>
    
    </div>
  )
}
