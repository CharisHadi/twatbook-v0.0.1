require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ extended : false}));
app.use(express.json());
app.use(express.static("public"));

//handlebars init
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

//Routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Starting server and syncing models w/ database
db.sequelize.sync({force : false}).then(()=>{
    app.listen(PORT, () => {
        console.log(   "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
});