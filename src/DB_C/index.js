const {Client} = require ('pg');
const express = require('express');
const client = new Client({
 user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'kumaravel123',
  port: '5432'
});
const app = new express();
app.get('/login',function(token2,res){
    const m={};
    const query = {
         text : 'select * from user_det where username=$1 and password=$2',
         values : (token2.body.username , token2.body.password)
    }
    const c={};
    client.query(query,(res)=>{
        if (res){
            c=res;
        }
        else 
        {
        console.error('Invalid Credentials');
        }
        client.end();
    })
    res.send(c);
})
var server= app.listen(8080,function(){
    var host= server.address().address;
    var port=server.address().port;
    console.log('Done');
})