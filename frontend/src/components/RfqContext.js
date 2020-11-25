import React, {useState, createContext} from 'react'
 
export const RfqContext = createContext()
export const RfqProvider = (props)=>{
    const data = {name:"Mukesh"}
    return (
            <RfqContext.Provider value={data}>
                {props.children}
            </RfqContext.Provider>
    )
}