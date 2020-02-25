//declaration
var express = require('express');
var login = require('./controllers/login');
var home = require('./controllers/home');
var admin = require('./controllers/admin/admin');
var manager = require('./controllers/manager/manager');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();

//configuration
app.set('view engine', 'ejs');


//middleware 
app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser());
app.use('/login', login);
app.use('/home', home);
app.use('/admin', admin);
app.use('/manager', manager);

//routes
app.get('/', function(req, res){
	res.render('welcome/index');
});
app.get('/logout', function(req, res){
	res.redirect('login/index');
});

//server startup
app.listen(3000, function(){
	console.log('node server started at 3000!');
});