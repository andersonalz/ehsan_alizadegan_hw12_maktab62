
const express = require("express");
const app = express();
///////////////////////////////////////////////////////Third-party middleware/////////////////////////
const path = require("path");
//////////////////////////////////////////////////Router-level middleware//////////////////////////////////
const shoesRouter = require("./router/shoesRouter");
const shoesData = require("./public/json/product.json");
///////////////////////////////staticfile///////////////////////
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//////////////////viewengin///////////////////
app.set("view engine", "ejs");
app.set('views', __dirname + '/view');
app.use(shoesRouter);

//////////////////////////////////Routing////////////////////////
app.get("/", (req, res) => {
  res.render("index", { shoesData });
});
app.get("/about", (req, res) => {
   res.render("about");
 });

app.get("/contact", (req, res) => {
   res.render("contact");
 });
////////////////////////////////////////////runserver///////////////////////////////
app.listen(5500, () => {
  console.log("server run on port 5500");
});