$(document).ready(function(){

    $("#oneparagraph").click(function(){
        alert("I am the Leader.");
    });

	$("#twoparagraph").on("mouseenter", function() {
        $(".flashing").addClass("lemon")
    }).on("mouseleave", function() {
		$(".flashing").removeClass("lemon")    
	});

}); 