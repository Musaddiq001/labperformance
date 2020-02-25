var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('signup/index');
});

router.get('/viewManagers', function(req, res){
	
		userModel.getAll(function(results){
			if(results.length > 0){
				res.render('home/view_users', {userlist: results});
			}else{
				res.redirect('/home');
			}
		});
});
module.exports = router;