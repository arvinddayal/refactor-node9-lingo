var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'xRYn20BbS8XbBn8%2FnddXBA%3D%3D'
});
var modelLanguage = require('../models/languages');

var UserController = module.exports = {
	index: function(req, res){
		var lang = modelLanguage.grabLang();
		res.render('index', {lang: lang});
	},
	search: function(req, res){
		var searchWord = req.query.search;
		var fromLang = req.query.from;
		var toLang = req.query.to;
		beglobal.translations.translate(
			{text: searchWord, from: fromLang, to: toLang},
			function(err, results) {
				if (err) {
					return console.log(err);
				}
			res.send(results);
			}
		);
	},
};