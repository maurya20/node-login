import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, NavLink} from "react-router-dom";
import Home from "./components//Home";
import Login from "./components/Login"
import Signup from "./components/Signup"


const App = ()=>{

    return (
      <div>
        <BrowserRouter>
        <Header />
        <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            </div> 
        </BrowserRouter>
       
        <Footer />
      </div>
    )
  }


export default App
