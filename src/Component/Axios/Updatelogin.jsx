import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Updatelogin() {
    const [name, setname] = useState('')
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [paw, setpaw] = useState('')
    const {id} = useParams()

    useEffect(() => {
        axios.get('https://671b2ce42c842d92c37ecbcb.mockapi.io/sam/'+id)
            .then(res => {
                setname(res.data.Name)
                setusername(res.data.userName)
                setemail(res.data.Email)
                setpaw(res.data.Password)
            }).catch((err) => console.log(err))
    },[id])

    function update(){
        axios.put('https://671b2ce42c842d92c37ecbcb.mockapi.io/sam/'+id,{
            Name: name,
            UserName: username,
            Email: email,
            Password: paw
        })
        .then(() => {
            alert("inserted")
            window.location ='/create'
        }).catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Update Login Page</h1>
            <label>Enter Your Name :</label>
            <input type="text" value={name} onChange={(e) => {setname(e.target.value)} }/>
            <br /> <br />
            <label>Enter Your UserName :</label>
            <input type="text" value={username} onChange={(e) => {setusername(e.target.value)} }/>
            <br /> <br />
            <label >Enter Your Emial Id :</label>
            <input type="email" value={email} onChange={(e) => {setemail(e.target.value)}} />
            <br /> <br />
            <label >Enter Your Password</label>
            <input type="password" name="" id="" value={paw} onChange={(e) => {setpaw(e.target.value)} }/>
            <br /> <br />
            <button onClick={update}>Submit</button>
        </div>
    )
}
