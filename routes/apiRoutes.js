//importing models for use withing CRUD functions
var db = require("../models");

module.exports = function(app) {
    //Read Users
    app.get("/api/users", function(req, res) {
        db.User.findall({}).then((dbUsers) =>{
            res.json(dbUsers);
        });
    });

    //Create Users
    app.post("/api/users/create", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });
};