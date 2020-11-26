import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import axios from 'axios'



const Home =()=>{
   const [data, setData] = useState([])
   console.log(data)
   useEffect(() => {
    axios.get('http://localhost:4200/api/products',
    ).then(res => 
      setData(res.data)
      
    
    ).catch(function(error) {
      return
    });
      
  }
  , []);
    
  
        
      return (
        <div className="container page">
          <div className="row">
            {data.map((item) => {
              return (
                <div className="col-md-4" key={item.id}>
                  <div className="thumbnail">
                    <img
                      src={item.img}
                      alt="Nature"
                      style={{ width: "100%"}}
                    ></img>
                  </div>
                  <Card.Footer>
                    <div className="caption">
                      <h6 style={{ color: "blue" }}>
                      
                      </h6>
                      <h6>
                        {item.name}
                      </h6>
                      <p>{item.description}</p>
                      <button type="button" className="btn btn-primary btn-block">RFQ </button>
                    </div>
                  </Card.Footer>
                </div>
              );
            })}
          </div>
         
        </div>
      );
  }
 export default Home;

