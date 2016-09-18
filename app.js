var express = require('express');
var app = express();
var utils = require('./utils.js');
var cache = require('memory-cache');
var process = require('process');

var stories = utils.loadStories();

cache.put('stories',stories);

app.get('/v1/stories',function(req,res) {
    var msg = {};
    msg.status = 200;
    msg.data = cache.get('stories')||[];
    msg.count = msg.data.length || 0;
    var headers = {};
    headers['Content-Type'] = 'application/json';
    res.set(headers);
    res.status(200).json(msg);
}); 

app.get('/',function(req,res){
    res.redirect(302,'/v1/stories');
});

app.listen(process.env.PORT || 5000,function(){
   console.log('Started serving stories.....');
});
