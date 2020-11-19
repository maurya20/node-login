import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, NavLink} from "react-router-dom";
import Home from "./components//Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Rfq from './components/Rfq';


const App = (props)=>{

  const [logged, setLogged] = useState(false)
  const [msg, setMsg] = useState("")


  const handle_login = (e, data) => {
    e.preventDefault();
    fetch("http://localhost:4200/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok){setMsg({msg:"Invalid Credentials ❌ "})
        setTimeout(()=>{
          this.setState({msg:""})
        },4000)
      }
        else return response.json();
      })
      .then((json) => {
        localStorage.setItem("token", json.token);
        setLogged({logged:true})
      });
  };



    return (
      <div>
        <BrowserRouter>
        <Header />
        <div style={{color:'white',backgroundColor:"red",textAlign:'center'}}><h3>{msg}</h3></div>
            <Route exact path="/" component={Home} />
            <Route path="/rfq" component={Rfq} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
           
        </BrowserRouter>
       
        <Footer />
      </div>
    )
  }


export default App
