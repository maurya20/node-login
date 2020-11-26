import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'
export const RfqContext = createContext()
export const RfqProvider = (props)=>{
    const [appState, setAppState] = useState({kitkat:"", logged:false, username:"", uid:26})
    
    useEffect(() => {
      if (localStorage.getItem('rfqtoken'))
      axios.get('http://localhost:4200/api/logged/user', {
        headers: {
          "Content-Type": "application/json",
          "token" : `${localStorage.getItem('rfqtoken')}`
        }
      }).then(res => 
        setAppState({username:res.data.username, logged:true})
        //console.log(res.data)
      
      ).catch(function(error) {
        return
      });
        
    }
    , [appState.kitkat]);
    return (
            <RfqContext.Provider value={[appState, setAppState]}>
                {props.children}
            </RfqContext.Provider>
    )
}