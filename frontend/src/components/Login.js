// import { responsewa } from "express";
import React,{useState,useContext} from "react";
import "../App.css"
import axios from "axios"
import {RfqContext} from './RfqContext'


const Login = ()=>{
  const [appState, setAppState] = useContext(RfqContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  
  

  
 
const handle_login = (e) => {
  e.preventDefault();
  const data = {email:email,password:password}

  axios.post("http://localhost:4200/api/login/", data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  
    // body: JSON.stringify(data),
    .then(res => {
      // console.log(res)
localStorage.setItem("rfqtoken", res.data.token);
setAppState({kitkat:"pass"})
}).catch(function(error) {
  if(error) {setMessage("Invalid Credentials ❌")
  setTimeout(()=>{
  setMessage("")
  },4000)}
});
}
    return (
      <div className=" container login page">
        <div className="row">
    <div className="col-4 login">
     <br></br>
      <h3 style={{color:"white", backgroundColor:"red"}}>{message}</h3></div>
        <div className="col-3 login-box" >
        <br/>
        <h3>Login Here!!</h3>
        <form className="form-inline" onSubmit={(e) => handle_login(e)}>
          <label className="mb-2 mr-sm-2">Email:</label>
          <input
            type="email"
            className="form-control mb-2 mr-sm-2" onChange={(e)=>setEmail(e.target.value)}
          />
          <label className="mb-2 mr-sm-2">Password:</label>
          <input
            className="form-control mb-2 mr-sm-2"
            type="password" onChange={(e)=>setPassword(e.target.value)}
          />
        <div className="col-7"></div>
        <div className="col-5">
        <button type="submit" className="btn btn-primary right">
            Submit
          </button>
        </div>  
        </form>
        <br/>
        <br/>
        </div>
        <div className="col-5 login"></div>
        </div>
        </div>
      
    );
  }


export default Login


