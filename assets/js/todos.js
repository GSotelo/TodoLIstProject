$('.fa-check').hide();

$('ul').on("click", "li", function() {
	$(this).toggleClass("completed");
	$(this).children('.fa-check').toggle();
});


$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//grab new todo text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		var liStart = "<li><span id='trash'><i class='fa fa-trash'></i></span><i class='fa fa-check'></i> ";
		$("ul").append(liStart + todoText + "</li>");
		$('.fa-check').hide();
		$(this).val("");
	}
});

$('.fa-plus-square').click(function() {
	$('input[type="text"]').fadeToggle(200);
});