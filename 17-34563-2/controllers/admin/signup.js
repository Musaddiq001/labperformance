var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('signup/index');
});

router.post('/', function(req, res){
	if(req.body.cpassword == req.body.password){
		res.redirect('/login');
	}else{
		res.render('signup/index');
	}
});
module.exports = router;