import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, NavLink} from "react-router-dom";
import Home from "./components//Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Rfq from './components/Rfq';


const App = ()=>{

    return (
      <div>
        <BrowserRouter>
        <Header />
      
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
