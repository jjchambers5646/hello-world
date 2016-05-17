var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

 app.use(bodyParser.json());

 app.get("/", function(req, res) {
   res.send('Hello from Node.js')
 });

 app.get("/webhooks", function(req, res) {
   res.sendFile(__dirname+'/web/index.html')
 });

 app.post("/webhooks", function(req, res) {
   var activityList = req.body;

   console.log('->', req.body);

   res.writeHead(200, { 'Content-Type': 'application/json' });
   res.end( JSON.stringify( { } ) );
 });

 app.listen(3000, function() {
   console.log('listening on port 3000, directory %s/web',__dirname);
 });
