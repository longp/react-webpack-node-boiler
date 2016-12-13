var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000


var db = require("./config/connection.js")

app.use("/",express.static("public"))
app.use("/style",express.static("src/style"))
app.use("/src", express.static("src"));
app.use("/dist", express.static("dist"));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html')
})

app.listen(PORT, function(){
  console.log("listening on", PORT)
})
