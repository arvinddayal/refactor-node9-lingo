var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'xRYn20BbS8XbBn8%2FnddXBA%3D%3D'
});
var modelLanguage = require('../models/languages');
var modelWords = require('../models/words');

var UserController = module.exports = {
	index: function(req,res){
		var lang = modelLanguage.grabLang();
		res.render('quiz', {lang: lang});
	},
	start: function(req,res){
		var word = modelWords.random();
		var transWord = beglobal.translations.translate(
			{text: word, from: 'eng', to: req.query.language},
			function(err, results) {
				if (err) {
					console.log(err);
				}
				res.send({lang: req.query.language, word: results.translation});
			}
		);
		
	}

};