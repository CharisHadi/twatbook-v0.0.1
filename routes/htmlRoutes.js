var db = require("../models");

module.exports = function(app) {
    //Load homepage
    app.get("/", function(req, res) {
        res.render("index", {content: "pee pee poo poo"});
    });



    //404 Page
      // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
      res.render("404");
  });
};