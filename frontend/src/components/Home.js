import React, { useState, useContext } from "react";
import {RfqContext} from './RfqContext'

const Home = () => {
  const value = useContext(RfqContext)
  return (
    <div className='page container'>
    <h3>Home page</h3>
  <h1>{value.name}</h1>
    </div>
  )
}

export default Home
