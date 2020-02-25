var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	if(req.body.usertype == "Admin"){
		if(req.body.uname=='admin'  && req.body.password=='admin'){
		res.cookie('username', req.body.uname);
		console.log("admin");	
		}
		res.redirect('admin/index');
	}
	else if(req.body.usertype == "Manager"){
        res.redirect('manager/index');
	}
});

module.exports = router;