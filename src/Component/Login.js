import './Login.css';


export default function Login(){
    return (
        <div className='demo'>
            {/* <h1>login</h1> */}
            <h1>Login Page</h1>
    <label> User Name :</label> <br></br>
    <input type='text' placeholder='Enter Your Name'></input> <br></br>
    <label> Password : </label><br></br>
    <input type='text' placeholder='Type Your Password'></input><br></br><br></br>

    <button>Login</button>

        </div>
    )
}