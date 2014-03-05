$(function(){

//Search Function
	$('#searchbutton').click(function(e){
		e.preventDefault();
		$.ajax('/search', {
			data: $(this).parent().serialize(),			
			success:function(data){
				$('.main').empty();
				$('.main').html(data.translation);
				}
		});
	});






});