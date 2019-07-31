//importing models for use withing CRUD functions
var db = require("../models");

module.exports = function(app) {
    //Read Users
    app.get("/api/users", function(req, res) {
        db.User.findall({}).then((dbUsers) =>{
            res.json(dbUsers);
        });
    });

};