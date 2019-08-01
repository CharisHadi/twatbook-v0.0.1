//importing models for use withing CRUD functions
var db = require("../models");
var key = require("./security/encryption");

module.exports = function(app) {
    //Read Users
    app.get("/api/users", function(req, res) {
        db.User.findAll({}).then((dbUsers) =>{
            res.json(dbUsers);
        });
    });

    //Create Users and encrypt their passwords
    app.post("/api/users/create", function(req, res) {
        console.log(req.body.pword);
        req.body.pword = key.encrypt(req.body.pword);
        // Code for using decrypt method, Will need later for logins
        // var oldpass = key.decrypt(newpass);
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    //Delete user by ID
    app.delete("/api/users/delete/:id", function(req, res) {
        db.User.destroy({where: {id: req.params.id} }).then((dbUser) => {
            res.json(dbUser);
        });
    });
    
};