import React, { useState } from "react";

const Home = () => {
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
          <h4 style={{ color: "red", textAlign: "center" }}>Product table</h4>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Dimension(l*b*h)</th>
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
      <h3 style={{ color: "red", textAlign: "center" }}>Home page </h3>
      <button
        type="button"
        className="btn btn-info btn-lg"
        data-toggle="modal"
        data-target="#myModal"
      >
        Add Product
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

export default Home;
