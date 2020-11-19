import React, {useState} from 'react'


const Signup = ()=>{
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [message, setMessage] = useState("")

const handleSignup = (e)=>{
  
  e.preventDefault();
  if(password!==password2){
  return setMessage("Password do not match!")
  }
  else{
    let userData = {username:username,email:email,password:password}
    
    fetch('http://localhost:4200/api/signup',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        if(response.status==400) setMessage("Email Already Exists")
        else 
        response.json().then(data =>{
        return setMessage(data.msg)
        })
    })
  }
}
  
    return (
      <div className="page">
      <div className="row">
    <div className="col bg-white"> <h1>{message}</h1> </div>
    <div className="col-6 bg-secondary">
      <h3>Register Here</h3>
    <form  onSubmit={(e)=>handleSignup(e)}>
    <div className="form-group">
      <label >Username:</label>
      <input type="text" className="form-control" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
    </div>
    <div className="form-group">
      <label >Email:</label>
      <input type="email" className="form-control"  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div className="form-group">
      <label >Password:</label>
      <input type="password" className="form-control"  placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
    </div>
    <div className="form-group">
      <label >Confirm Password:</label>
      <input type="password" className="form-control"  placeholder="Confirm password" onChange={(e)=>setPassword2(e.target.value)}/>
    </div>
    <div className="form-group form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox"/> Remember me
      </label>
    </div>
    <button type="submit" className="btn btn-primary float-right" >Submit</button>
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
