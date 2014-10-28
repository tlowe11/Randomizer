$(function(){

	$("button#randomizer").on("click", function(){
		var selector = $(".students");
		var randomIndex = Math.floor(Math.random() * (selector.length));

		var randomItem = selector[randomIndex];
	 	$(randomItem).hide().fadeIn().removeClass("students").addClass("highlight");
	});

	$("button#reset").on("click", function(){
	 	$("div.highlight").removeClass("highlight").addClass("students");
	})

});


