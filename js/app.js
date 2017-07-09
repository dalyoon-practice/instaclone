$(document).ready(function(){

	var	$heart = $('.heart'),
		$addComment = $('.photo__add-comment');

	$heart.click(function() {

		var likes = $(this).parent().parent().children('.photo__likes').children('.Photo__likes-number'),
			likesNumber = parseInt(likes.html()),
			newValue;

		if($(this).hasClass('fa-heart-o')){
			newValue = likesNumber +1;
		}
		else{
			newValue = likesNumber -1;
		}
		likes.html(newValue)

		$(this).toggleClass('fa-heart-o fa-heart');
	})

	$addComment.keydown(function(event){
		if(event.keyCode == 13){
//			console.log('pressed enter', event.target.value)
			var newComment = event.target.value;
//			console.log($(this).parent())
			var commentList = $(this).parent().parent().children('.photo__comments')
//			commentList.append('<p>hello</p>')
			$(this).val('').blur();

			commentList.append("<li class='photo__comment'>\
				<span class='photo__comment-author'>Visitor</span> \
				"+ newComment +"</li>")
		}
	})
})