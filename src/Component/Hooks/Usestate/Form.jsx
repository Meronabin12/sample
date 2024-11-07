import React from 'react'
import { useState } from 'react'

export default function Form() {

  // const [name, setname] = useState('')
  // const [age, setage] = useState(0);

          async function send() {


            await fetch('https://671b2ce42c842d92c37ecbcb.mockapi.io/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: 'meron',
                    Age: 23
                })

            })
                .then(alert("success"))
                .catch((err) => console.log(err))


        }


          fetch('https://671b2ce42c842d92c37ecbcb.mockapi.io/form')
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err)=>console.log(err))


  // function send(){

  //     console.log(name);

  //     console.log(age);       

  // }

  return (
    <div className='form'>
      <h1>login form</h1>
      <div>
        {/* <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />

        <label htmlFor="">Age</label>
        <input type="number" value={age} onChange={(e) => setage(e.target.value)} /> */}

        <button onClick={send}>send</button>

      </div>
    </div>
  )
}
