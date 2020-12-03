var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db = require('./config/db');
//const mongoose = require('mongoose');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;


//mongoose.connect(db.url);

mongoose.connect(db.url, { useNewUrlParser: true,  useUnifiedTopology: true }, (err)=>{
    if (err) console.log(err);
    else console.log("Connected to database");
} );

app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static('/public'));

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/views/index.html');
});

require('./config/app/routes') (app);

app.listen(port);

console.log('Magic happens on port: ', +port);

exports = module.exports = app;
