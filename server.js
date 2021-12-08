var express = require ('express');
var app = express();


var PORT = process.env.PORT || 3000;
var date = new Date().toString();

var middleware = require('./middleware.js');



app.use(middleware.logger);

app.get ('/about', middleware.requestAuthentication, function(req, res){

    res.send('About Us!');
})

app.use(express.static(__dirname +'/public'));



app.listen(PORT, function(){
    console.log('Your web is served at port '+ PORT);
});