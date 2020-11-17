import React from "react";



const Login = ()=>{
    return (
      <div className="container">
        
        
        <div className="row">
        <div className="col-4 bg-white"></div>
        <div className="col-4 bg-secondary">
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

          <button type="submit" className="btn btn-primary float-right">
            Submit
          </button>
        </form>
        <br/>
        <br/>
        </div>
        <div className="col-4 bg-white"></div>
        </div>

      </div>
    );
  }


export default Login


