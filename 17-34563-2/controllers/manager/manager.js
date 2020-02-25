var express = require('express');
var router = express.Router();

router.post('/', function(req, res){

	var data ={
		name: 'admin',
		id: '22-334-3'
	};	
	res.render('manager/index', data);
});

router.get('/profile', function(req, res){
	res.render('manager/profile');

});
router.get('/view_Available', function(req, res){
	res.render('manager/view_Available');

});
router.get('/pendingCustomers', function(req, res){
	res.render('manager/pendingCustomers');

});
router.get('/pendingHouseowners', function(req, res){
	res.render('manager/pendingHouseowners');

});
router.get('/view_Customers', function(req, res){
	res.render('manager/view_Customers');

});
router.get('/view_Owners', function(req, res){
	res.render('manager/view_Owners');

});
router.get('/view_Rented', function(req, res){
	res.render('manager/view_Rented');

});

module.exports = router;