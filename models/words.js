var words = ["antibiotic", "summer", "time", "strong", "soft", "heart", "weak", "yours",
"balloon", "green", "orange", "clown", "basketball", "hockey", "football", "shirt", "headphones",
"water", "air", "earth", "fire", "wind", "desk", "table", "yell", "favorite", "couch", "bottle",
"counter", "woman", "man", "computer", "coffee", "cow", "bird", "snake", "fish", "book", "quiz",
"money", "cash", "cat", "dog", "olive", "lecture", "tree", "screen", "marker", "hair", "pants"];

module.exports = {
	random: function(){
		var randomNum = Math.floor(Math.random()*50);
		return words[randomNum];
	}
};