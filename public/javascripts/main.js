$(function(){

//Search Function
	$('#searchbox').keyup(function(){

		$.ajax('/search', {
			data: $(this).serialize(),
			success:function(data){
				console.log(data);
				$('.main').html(data.translation);
				}
		});
	});






});