//Dependicies
//======================================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;

var friendsData = require("./app/data/friends.js");

//Express route-specific
//======================================================================================
// create application/json parser 
// var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Change accepted type for parsers
//=======================================================================================

// parse various different custom JSON types as JSON 
app.use(bodyParser.json());
 
// parse some custom thing into a Buffer 
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string 
// app.use(bodyParser.text({ type: 'text/html' }))

// Routes
//=======================================================================================
require("./app/routing/html-routes.js")(app);
require("./app/routing/api-routes.js")(app);


// app.get("/survey", function(req, res) {

//     res.sendFile(path.join(__dirname + "/app/public/survey.html"));
// });

// app.get('/', function(req, res) {

//     res.sendFile(path.join(__dirname + "/app/public/home.html"));
// });

// app.get("/api/friends", function(req, res) {
//     res.json(friendsData);
//   });

//Listener
//========================================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});