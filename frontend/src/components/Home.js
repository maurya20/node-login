import React, { useState, useContext } from "react";
import {RfqContext} from './RfqContext'

const Home = () => {
 
  const [appState, setAppState] = useContext(RfqContext)
  return (
    <div className='page container'>
    <h3>Home page</h3>
  <h1>{appState.logged?"LoggedIn":"NotLoggedIn"}</h1>
  <h1>{appState.username}</h1>
    </div>
  )
}

export default Home
