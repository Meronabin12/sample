import React from 'react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Expenceupdate() {

    const [title, settitle] = useState('');
    const [date, setdate] = useState('');
    const [amount, setamount] = useState('');
    const {id} = useParams()

  return (
    <div>
        <h1>Expenceupdate</h1>
        <label> Title : </label>
            <input type="text" />
            <br /><br />
            <label> Date :</label>
            <input type="date" name="" id="" />
            <br /><br />
            <label> Amount : </label>
            <input type="number" name="" id="" />
            <label> Filter : </label>
            <button>
                <select name="" id="">
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                </select>
            </button>
            <button>save</button>


    </div>
  )
}
