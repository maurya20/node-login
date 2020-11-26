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
                    </div>
                  </Card.Footer>

                  <button
        type="button"
        className="btn btn-info btn-block"
        data-toggle="modal"
        data-target="#myModal"
      >
       RFQ
      </button>
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title"></h4>
            </div>
            <div className="modal-body">
              <label className="mb-2 mr-sm-2">Name:</label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                value={item.name}
              />
               <label className="mb-2 mr-sm-2">Part Number:</label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
               value={item.partnumber}
              />
              <label className="mb-2 mr-sm-2">Required Quantity:</label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
              />
               <label className="mb-2 mr-sm-2">Your Company Name:</label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
              
              />
               <label className="mb-2 mr-sm-2">RFQ Description:</label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
        





                </div>
              );
            })}
          </div>
          <br></br>
        </div>
      );
  }
 export default Home;

