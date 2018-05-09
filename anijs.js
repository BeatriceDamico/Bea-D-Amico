$(".c-header").velocity("fadeIn", 1000)

$(".b-one").mouseenter(function(){
	$(this)
		.velocity( { translateY: "-10px", backgroundColor: "#FFEB3B" }, 400 );
});

$(".b-one").mouseleave(function(){
	$(this)
		.velocity( { translateY: "0", backgroundColor: "#FFC107" }, 200 );
});

$(".b-two").mousedown(function(){
	$(this)
		.velocity({ translateY: "-30px", rotateZ: "10deg" }, 100, "easeOut")
		.velocity({ rotateZ: "-8deg" }, 150)
		.velocity({ translateY: "0", rotateZ: "0" }, {duration: 600, easing: [ 500, 14 ]});
});

$(".b-three").mousedown(function(){
	$(this)
	.velocity({ scale: "1.5"}, 150, "easeInOut")
	.velocity("reverse");
});

$(".b-four").mousedown(function(){
	$(this).effect("shake");
})

$(".b-five").removeClass("glow");

$( ".b-five" ).click(function() {
	$(this)
		.toggleClass( "glow", 2000, "easeOutSine" );
});
