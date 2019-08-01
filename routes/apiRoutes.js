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
        /* I currently do not possess the knowledge for Authentification and Sessions,
        So this feature has been shelved for release --C.H.
        Code for using decrypt method, Will need later for logins
         var oldpass = key.decrypt(newpass); */
        db.User.create(req.body).then((dbUser) => {
            res.json(dbUser);
        });
    });

    //Delete user by ID
    app.delete("/api/users/delete/:id", function(req, res) {
        db.User.destroy({where: {id: req.params.id} }).then((dbUser) => {
            res.json(dbUser);
        });
    });
    
    //Read Twerps
    app.get("/api/twerps", function(req, res) {
        db.Twerp.findAll({}).then((dbTwerps) =>{
            res.json(dbTwerps);
        });
    });

    //Post Twerps
    app.post("/api/twerps/create", function(req, res) {
        db.Twerp.create(req.body).then((dbTwerp) => {
            res.json(dbTwerp);
        })
    });

    //Delete twerp by ID
    app.delete("api/twerps/delete/:id", function(req, res){
        db.Twerp.destroy({where: {id: req.params.id} }).then((dbTwerp) => {
            res.json(dbTwerp);
        });
    });
};