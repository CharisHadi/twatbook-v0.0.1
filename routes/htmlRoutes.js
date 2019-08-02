var db = require("../models");

module.exports = function(app) {
    //Load homepage
    app.get("/", function(req, res) {
        db.Twerp.findAll({}).then((dbTwerps)=>{
            res.render("index", {twerps: dbTwerps});
        })

    });

    app.get("/friends", function(req, res) {
        db.User.findAll({}).then((dbUsers)=>{
          res.render("friends", {users: dbUsers});
        });
    });

    //404 Page
      // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
      res.render("404");
  });
};