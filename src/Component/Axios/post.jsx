import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Post() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [paw, setpaw] = useState('')

    function send() {
        const data = {
            Name: name,
            Email: email,
            Password: paw
        }
        axios.post('https://671b2ce42c842d92c37ecbcb.mockapi.io/form', data)
            .then(alert("success"))
            .catch(err => console.log(err)
            )
    }

// get 
    const [view, setview] = useState([])

    useEffect(() => {
        axios.get('https://671b2ce42c842d92c37ecbcb.mockapi.io/form')
            .then((res) => setview(res.data))
            .catch(err => console.log(err)
            )
    })



    return (
        <div>
            <h1>Post Login Page</h1>
            <label>Enter Your Name</label>
            <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
            <br /> <br />
            <label >Enter Your Email Id</label>
            <input type="email" name="" id="" value={email} onChange={(e) => { setemail(e.target.value) }} />
            <br /> <br />
            <label >Enter Your Password</label>
            <input type="password" name="" id="" value={paw} onChange={(e) => { setpaw(e.target.value) }} />
            <br /> <br />
            <button onClick={send}>Submit</button>

{/* get */}
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.map((item, index) => {

                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Password}</td>
                                    <td>
                                        <button>edit</button>
                                        <button>delete</button>
                                    </td>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>
        </div>

    )
}
