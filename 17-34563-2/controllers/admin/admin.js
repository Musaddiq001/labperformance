var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.redirect('admin/index');

});
router.get('/addNewManager', function(req, res){
	res.render('admin/signup');

});
router.get('/assignManager', function(req, res){
	res.render('admin/assignManager');

});
router.get('/view_Managers', function(req, res){
	res.render('admin/view_Managers');

});

module.exports = router;