import React from "react";
import "../App.css"



const Login = ()=>{
    return (
      <div className=" container login page">
        <div className="row">
        <div className="col-4 login"></div>
        <div className="col-3 login-box" >
        <br/>
        <h3>Login Here!!</h3>
        <form
          className="form-inline"
        >
          <label className="mb-2 mr-sm-2">Username:</label>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            name="username"
          />
          <label className="mb-2 mr-sm-2">Password:</label>
          <input
            className="form-control mb-2 mr-sm-2"
            type="password"
            name="password"
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


