var express = require('express');
var app = express();
var request = require('request');
app.use(express.static('public'));
app.set("view engine", "ejs");


app.get('/', function(req, res){
	res.render('search');
});


app.get('/results', function(req, res){
	var part = req.query.movieName;
	var url = 'http://www.omdbapi.com/?s='+part+'&apikey=thewdb';
	request(url, function(error, response, body){
			if(!error && response.statusCode === 200){
			var x = JSON.parse(body);
			var list = x["Search"];
			res.render('results', {list: list, part: part});
		}
	});
});


app.listen('3000', function(){
	console.log('3000 bih')
});

