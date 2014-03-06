$(function(){

//Search Function
	$('#searchbutton').click(function(e){
		e.preventDefault();
		$.ajax('/search', {
			data: $(this).parent().serialize(),
			success:function(data){
				$('#output-word').val("");
				$('#output-word').val(data.translation);
				}
		});
	});

});