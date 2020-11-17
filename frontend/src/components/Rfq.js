import React, { useState } from "react";

const Rfq = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [dimension, setDimension] = useState("");

  const table = () => {
    if (name === "" && price === "") {
      return null;
    } else {
      return (
        <div>
          <h4 style={{ color: 'rgb(0, 128, 255)', textAlign: "center" }}> Filled RFQ Deatails</h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Quantity(Pcs.)</th>
                <th>Place of Delivery</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{dimension}</td>

                <td>
                  <li class="list-inline-item">
                    <button
                      class="btn btn-warning"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit"
                    >
                      <i class="fa fa-edit"></i>
                    </button>
                  </li>
                  <button className="btn btn-danger">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  };
  return (
    <div className="container">
      <h3 style={{ color: "rgb(0, 153, 153)", textAlign: "center" }}>Request For Quote (RFQ) </h3>
      <p>  A request for quotation is a business process in which a company or public entity requests a quote from a supplier for the purchase of specific products or services. RfQ generally means the same thing as Call for bids and Invitation for bid. An RfQ typically involves more than the price per item.</p>
      <button
        type="button"
        className="btn btn-info btn-lg"
        data-toggle="modal"
        data-target="#myModal"
      >
        Fill RFQ
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
                onChange={(e) => setName(e.target.value)}
              />
              <label className="mb-2 mr-sm-2">Description:</label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                onChange={(e) => setDescription(e.target.value)}
              />
              <label className="mb-2 mr-sm-2">Price:</label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                onChange={(e) => setPrice(e.target.value)}
              />
              <label className="mb-2 mr-sm-2">Dimension(l*b*h):</label>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                onChange={(e) => setDimension(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* For Table  */}
      {table()}
    </div>
  );
};

export default Rfq;
