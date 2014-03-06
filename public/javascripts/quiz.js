$(function(){
	var total = [];
	var wrong = [];

	$('#myModal').modal('show');


	$('#save-button').click(function(){
		var e = $('#select-language option:selected').text();
		$.ajax('/quiz/start', {
			data: {language: e},
			success:function(data){
				$('.main-page').prepend('<h1>This will test your '+data.lang+' knowledge.');
				$('.question').append('<h2>'+data.word);
				}
		});
		$('#myModal').modal('hide');
	});

	$('#submit-answer').click(function(){
		var x = $('#answer-box').val();
		$.ajax
		if(x === returnedWord) {
			$('.result').empty();
			$('.result').html("Correct!");
			total.push("correct");
		}
		else{
			if(wrong.length < 3){
				$('.result').empty();
				$('.result').html("Incorrect, you have " + (3- wrong.length) + " attempts remaing.");
				wrong.push("wrong");
				total.push("wrong");
			}
			else{
				$('body').empty();
				$('#startOver').modal('show');
			}
		}
		if(total.length === 10){
			$('body').empty();
			$('body').append("<h1>You Passed!!!! Try the quiz in a different Language</h1><button method='get 'action='/quiz' class='restart'>Restart Quizes</button>");
		}
	});
});