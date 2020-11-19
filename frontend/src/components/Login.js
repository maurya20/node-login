import React,{useState} from "react";
import "../App.css"



const Login = (props)=>{

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


    return (
      <div className=" container login page">
        <div className="row">
        <div className="col-4 login"></div>
        <div className="col-3 login-box" >
        <br/>
        <h3>Login Here!!</h3>
        <form className="form-inline" onSubmit={(e) => props.handle_login(e, {email:email,password:password})}>
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


