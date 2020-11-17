import React from "react";



const Login = ()=>{
    return (
      <div className="login">
        <div className="row">
        <div className="col-4 bg-white"></div>
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
         <div className="row">
        <div className="col-1"></div>
        <button type="submit" className="btn btn-primary login-btn">
            Submit
          </button>
       
         </div>
          
        </form>
        <br/>
        <br/>
        </div>
        <div className="col-5 bg-white"></div>
        </div>

      </div>
    );
  }


export default Login


