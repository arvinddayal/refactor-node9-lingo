var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'xRYn20BbS8XbBn8%2FnddXBA%3D%3D'
});
var modelLanguage = require('../models/languages');

var UserController = module.exports = {
	index: function(req,res){
		res.render('quiz');
	}


};