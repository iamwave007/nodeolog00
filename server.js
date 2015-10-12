var express = require("express");
var app = express();
var http = require('http').Server(app);
var path=require('path');

process.env.NODE_ENV = process.env.NODE_ENV||'development';
var port = process.env.PORT||3000;
// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/views')));









http.listen(port,function(){
  console.log("happening here: 3000")
})



