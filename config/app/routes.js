var Nerd = require('./models/nerd');
var express = require('express');

module.exports = function(app) {

    //returns all the nerds
    app.get('/api/nerds', (req,res)=>{
        Nerd.find( (err, nerds)=>{
            if(err) res.send(err);
            else res.json(nerds);
        })
    });

}