// Create web server
// by using express module
var express = require('express');
var app = express();
// create web server
var server = require('http').createServer(app);
// create socket io server
var io = require('socket.io')(server);
// create mysql connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'nodejs'
});
// connect to mysql
connection.connect();
// set web server port number
server.listen(3000, function(){
    console.log('Server Running at http://');
});