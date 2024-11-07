import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
// import Login from './Component/Login';
// import Mainpage from './Component/Mainpage';
// import Bootpage from './Component/Bootpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import Counter from './Component/Hooks/Usestate/Counter';
// import UseRef from './Component/Hooks/UseRef/UseRef';
// import Form from './Component/Hooks/Usestate/Form'
// import Counter from './Component/Hooks/Useeffect/Counter';
// import Fetchpost from './Component/Hooks/Usestate/Fetchpost';
// import Post from './Component/Axios/post';
import Postlogin from './Component/Axios/Postlogin';
import Updatelogin from './Component/Axios/Updatelogin';
import Customhook from './Component/Hooks/Customhooks/Customhook';
import Usememo from './Component/Hooks/Usememo/Usememo';
// import Expencepost from './Component/Axios/Expencepost';
// import Bankpage from './Component/Hooks/Usecontext/Bankpage';
// import Mui from './Component/Mui';
// import Navbar from './Component/mui/Navbar';
// import Imglist from './Component/mui/Imglist'


function App() {

  return (
    <div className="App ">
         {/* <Mui/> */}
         {/* <Navbar/> */}
         {/* <Imglist/> */}

{/* <Customhook/> */}
<Usememo/>

      {/* <Login></Login> */}
      {/* <h1>hello world</h1>
     

     <h2> Welcome</h2>
     <button>click</button> */}
      {/* <Mainpage></Mainpage> */}
      {/* <Bootpage></Bootpage> */}
      {/* <h1>web</h1> */}
      {/* <Counter/> */}
      {/* <UseRef/> */}
      {/* <Form/> */}
      
      {/* <Counter/> */}
      {/* <Fetchpost/> */}
      {/* <Postlogin/> */}

      {/* <Expencepost/> */}

      <Routes>
      <Route path={'/create'} element = { <Postlogin/>}></Route>
      <Route path={'/update/:id'} element = { <Updatelogin/>}></Route>
      </Routes>
      {/* <Updatelogin/> */}
      {/* <Post /> */}
      {/* 
          <div >
            <Link to ='/Mainpage' >Mainpage</Link>
            <Link to ='/Bootpage' >Bootpage</Link>

          </div>
          <Routes>
            <Route path = '/Mainpage' element = {<Mainpage/>}/>
            <Route path = '/Bootpage' element = {<Bootpage/>}/>
          </Routes> */}

          {/* <Bankpage/> */}


    </div>


  );
}

export default App;
