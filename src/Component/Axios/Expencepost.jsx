import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Expencepost() {

    const [title, settitle] = useState('');
    const [date, setdate] = useState('');
    const [amount, setamount] = useState('');

    function send() {
        const data = {
            Title: title,
            Date: date,
            Amout: amount
        }
        axios.post('https://671b2ce42c842d92c37ecbcb.mockapi.io/sam', data)
            .then(alert("success"))
            .catch(err => console.log(err)
            )
    }

    // get 
    const [view, setview] = useState([])

    // useEffect(() => {
    //     axios.get('https://671b2ce42c842d92c37ecbcb.mockapi.io/sam')
    //         .then((res) => setview(res.data))
    //         .catch(err => console.log(err)
    //         )
    // })


    return (
        <div>
            <h1>Expencepost</h1>
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




            {/* get */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Amout</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.map((item, index) => {

                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.Title}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.Amount}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`} className='btn btn-success'>edit</Link>
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
