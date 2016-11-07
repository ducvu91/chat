var express = require('express');
var app = new express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./private/views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000, function(){
    console.log('conected');
});

app.get('/chat', function(req, res){
    res.render('chat');
});