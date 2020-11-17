import React, { Component } from 'react'


const Signup = ()=>{
    return (
      <div>
      <div className="row">
    <div className="col bg-white"></div>
    <div className="col-6 bg-secondary">
      <h3>Register Here</h3>
    <form >
    <div className="form-group">
      <label >Username:</label>
      <input type="text" className="form-control" placeholder="Enter Username" />
    </div>
    <div className="form-group">
      <label >Email:</label>
      <input type="email" className="form-control"  placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label >Password:</label>
      <input type="password" className="form-control"  placeholder="Enter password" />
    </div>
    <div className="form-group">
      <label >Confirm Password:</label>
      <input type="password" className="form-control"  placeholder="Confirm password"/>
    </div>
    <div className="form-group form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox"/> Remember me
      </label>
    </div>
    <button type="submit" className="btn btn-primary float-right">Submit</button>
  </form>
  <br/>
  <br/>
    </div>
    <div className="col bg-white"></div>
  </div>
 
      </div>
    )
  }


export default Signup
