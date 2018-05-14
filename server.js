const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //this
var path = require("path"); //this
// sessions

app.use(bodyParser.json()); //this
app.use(express.static(__dirname + '/angular/dist/angular'));



//mongoose
require("./server/config/mongoose");
//routes
require("./server/config/routes.js")(app) //this

//port
app.listen(5000, function () {
    console.log("listening on port 5000"); //this
});