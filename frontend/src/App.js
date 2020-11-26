import React, {useState,useContext} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import Home from "./components//Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dash from './components/Dash';
import {RfqContext} from './components/RfqContext'


const App = ()=>{
 const [appState, setAppState] = useContext(RfqContext)
  
  const chek = true
    return (
      <div>
        <BrowserRouter>
        <Header />
            <Route exact path="/" component={Home} />
            <Route path="/dash" component={Dash} />
            <Route path="/login" render={() => appState.logged ? (<Redirect to="/" />) : (<Login />)}/>
            <Route path="/signup" component={Signup} />
           
        </BrowserRouter>
       
        <Footer />
      </div>
    )
  }


export default App
