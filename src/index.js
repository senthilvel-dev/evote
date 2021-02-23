const express = require('express');
const dotenv = require("dotenv");
const db_c = require('./DB_C');
const app = new express();
dotenv.config();
app.get("/login", function(req , res ){
    db_c.validation(req);
    res.send(next());
});
var server= app.listen(8080,function(){
    var host= server.address().address;
    var port=server.address().port;
    console.log('Done');
})