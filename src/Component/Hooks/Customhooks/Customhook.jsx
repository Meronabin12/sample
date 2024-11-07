import React from 'react'
import Usefetch from './Usefetch'

export default function Customhook() {
    const [data] = Usefetch('https://671b2ce42c842d92c37ecbcb.mockapi.io/sam')
  return (
    <div>
        <div>
            {
                data.map((item)=>{
                    return (
                        <ol>
                            <li>{item.Name}</li>
                            <li>{item.Email}</li>
                            <li>{item.Password}</li>
                        </ol>
                    )
                })
            }
        </div>
    </div>
  )
}
