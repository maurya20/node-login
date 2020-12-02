const express = require("express");
const router = express.Router();
const Products = require("../models/Products");




router.post("/postproduct", async (req, res) => {
  try {
    const {name, desc, price} = req.body;
    prod = new Products({name, desc, price})
    await prod.save()
    res.json({"success":"A new Product added successfully"});
  } catch (e) {
    res.send({ message: "Error in adding new product" });
  }
});


module.exports = router;