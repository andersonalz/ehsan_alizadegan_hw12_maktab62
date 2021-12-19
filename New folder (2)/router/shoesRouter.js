const express = require("express");
const router = express.Router();
const shoesData = require("../public/json/product.json");

/////////////////////////////////////////////////////////////////infoshose////////////////////////////////
router.get("/shoeInfo/:id", (req, res) => {
  const shoe = shoesData.find((shoe) => shoe.id === req.params.id);
  res.render("shoeInfo", { shoe });
});
///////////////////////////////////////////////////////////////searchshose////////////////////////////////////
router.post("/shoesSearch", (req, res) => {
  const shoes = shoesData.filter(
    (shoe) =>
      shoe.title === req.body.parameter ||
      shoe.size === req.body.parameter ||
      shoe.color === req.body.parameter
  );

  if (!shoes) {
    res.send("Not Found");
  } else {
    res.render("searchResault", { shoes });
  }
});

module.exports = router;