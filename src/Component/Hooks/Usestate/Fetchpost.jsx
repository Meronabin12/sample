

import React, { useEffect, useState } from 'react'


export default function Fetchpost() {
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')

    function submit() {
        const data = {
            Name: name,
            Password: password,
        }
        fetch('https://671b2ce42c842d92c37ecbcb.mockapi.io/sam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(alert("sucess"))
            .catch(err => console.log(err))
    }

    const [view, setview] = useState('');

    useEffect(() => {
        fetch('https://671b2ce42c842d92c37ecbcb.mockapi.io/sam')
            // .then(res => res.json)
            .then((res) => setview(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div>
            {/* <form id='login'> */}
            <h1>loginpage</h1>
            <label >Name :</label>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
            <label >password :</label>
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <button onClick={submit}>submit</button>
            {/* </form> */}


            <table className='table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>pw</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       view && view.map((item) => {
                            return (
                                <tr key={item}>
                                    <td>{item.Name}</td>
                                    <td>{item.Password}</td>
                                    <td>{item.age}</td>
                                   
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
