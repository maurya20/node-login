import { response } from "express";
import React,{useState} from "react";
import "../App.css"



const Login = ()=>{

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  
  

  
 
let handle_login = (e) => {
  e.preventDefault();
  const data = {email:email,password:password}
  fetch("http://localhost:4200/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {setMessage("Invilid Credentials ❌")
      setTimeout(()=>setMessage(""),4000)
    }
      else return response.json();
    })
    .then((json) => {
      if(response==200)
      localStorage.setItem("rfqtoken", json.token);
    });
};

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


