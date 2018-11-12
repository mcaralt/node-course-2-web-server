const express = require("express");
const hbs = require("hbs");

var app = express();

app.set("view engine",hbs);
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("home.hbs",{
      welcomeMessage: "Hello there!",
      currentYear: new Date().getFullYear()
    })
});

app.get("/about", (req,res) => {
  res.render("about.hbs");
});

app.get("/bad", (req,res) => {
  res.send({
    errorMessage: "Unable to fulfill the request"
  });
});


app.listen(3000);
