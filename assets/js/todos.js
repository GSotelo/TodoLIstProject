$('ul').on("click", "li", function() {
	$(this).toggleClass("completed");
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
		var liStart = "<li><span><i class='fa fa-trash'></i></span> ";
		$("ul").append(liStart + todoText + "</li>");
		$(this).val("");
	}
});

$('.fa-plus-square').click(function() {
	$('input[type="text"]').fadeToggle(200);
});