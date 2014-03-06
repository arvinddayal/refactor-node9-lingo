$(function(){
	var total = [];
	var wrong = [];
	var currentLang = [];
	$('#myModal').modal('show');


	$('#save-button').click(function(){
		var e = $('#select-language option:selected').text();
		$.ajax('/quiz/start', {
			data: {language: e},
			success:function(data){
				currentLang.push(data.lang);
				$('.main-page').prepend('<h1>This will test your '+data.lang+' knowledge.');
				$('#question-box').val(data.word);
				}
		});
		$('#myModal').modal('hide');
		
	});

	$('#submit-answer').click(function(e){
		e.preventDefault();
		var question = $(this).prev().prev().val();
		var answer = $(this).prev().val();
		$.ajax('/check', {
			data: {
				question: question,
				answer: answer,
				lang: currentLang.toString()
			},
			success: function(data){
				if (answer.toLowerCase() === data.toLowerCase()) {
					$('.result').html("correct");
				}
				else
					$('.result').html("wrong");
			}
		});
	});
		// if(x === returnedWord) {
		// 	$('.result').empty();
		// 	$('.result').html("Correct!");
		// 	total.push("correct");
		// }
		// else{
		// 	if(wrong.length < 3){
		// 		$('.result').empty();
		// 		$('.result').html("Incorrect, you have " + (3- wrong.length) + " attempts remaing.");
		// 		wrong.push("wrong");
		// 		total.push("wrong");
		// 	}
		// 	else{
		// 		$('body').empty();
		// 		$('#startOver').modal('show');
		// 	}
		// }
		// if(total.length === 10){
		// 	$('body').empty();
		// 	$('body').append("<h1>You Passed!!!! Try the quiz in a different Language</h1><button method='get 'action='/quiz' class='restart'>Restart Quizes</button>");
		// }
	// });





});