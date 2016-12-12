var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000


app.use("/",express.static("public"))
app.use("/imgs",express.static("public/imgs"))
app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html')
})

app.listen(PORT, function(){
  console.log("listening on", PORT)
})
