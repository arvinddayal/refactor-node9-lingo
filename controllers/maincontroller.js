var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'xRYn20BbS8XbBn8%2FnddXBA%3D%3D'
});


var UserController = module.exports = {
	search: function(req, res){
		var x = req.query.search;
		beglobal.translations.translate(
			{text: x, from: 'eng', to: 'fra'},
			function(err, results) {
				if (err) {
					return console.log(err);
				}
			res.send(results);
			}
		);

	}
};