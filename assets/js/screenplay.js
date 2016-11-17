
	var current = "#"+$("#about").attr('id');

 $('a[href^="#"]').on('click', function(event) {

	  var target = $( $(this).attr('href') );

	 navigateTo("#"+target.attr('id'));


});

function navigateTo(target){

if (current != target)
{
	if ($("#heading").css("opacity")==0){
		$("#heading").removeClass("fadeOut");
		$("#heading").addClass("fadeIn");
	}

	if (target!="#about") { $(".hori-third").css("width", "0%");
	$("#logo-div").removeClass("fadeOut");
	 $("#logo-div").addClass("fadeIn");
	 $("html").css("background-size","0%");
 }
	else { $(".hori-third").css("width", "40%");
	$("#logo-div").removeClass("fadeIn");
	$("#logo-div").addClass("fadeOut");
	$("html").css("background-size","30.1%");

}

	if (target!="skills") {
		$('#heading').css("color","black");
		 $("#bg2").css("width","0%");
	}


 $(current).removeClass("fadeInUp");
 $(current).addClass("fadeOutUp");
 setTimeout(function(){ $(current).addClass( "hide" ); $(target).removeClass("hide"); current=target;}, 1000);

 $(target).removeClass("fadeOutUp");
 $(target).addClass("fadeInUp");
 switch ( target) {
	 case "#about":
	 $('#menu-bar').css("top","15em");
			 $('#menu-line').css({"margin-left":"0%","width":"10%"});
			 $('#heading-text').typeIt({
		strings: 'Hi There',
		speed: 50,
		autoStart: false
		});
		$("#modal-menu").css({"opacity":"0","z-index":"-5"});
setTimeout(function(){
		$("#down").prop("href","#skills");
		$("#down").css("opacity","1");
		$("#up").prop("href","#");
		$("#up").css("opacity","0");
},1000);
		 break;

	 case "#skills":
	 $('#menu-bar').css("top","21em");
			 $('#menu-line').css({"margin-left":"18%","width":"14%"});
			 if ($(window).width() < 768)	$("#bg2").css("width","100%");
			 else $("#bg2").css("width","90%");
			 $('#heading').css("color","white");
			 $('#heading-text').typeIt({
		strings: 'What I Do',
		speed: 50,
		autoStart: false
});
$("#modal-menu").css({"opacity":"0","z-index":"-5"});
setTimeout(function(){
$("#down").prop("href","#exp");
$("#down").css("opacity","1");
$("#up").prop("href","#about");
$("#up").css("opacity","1");
},1000);
	 break;

	 case "#exp":
	 $('#menu-bar').css("top","27em");
		 $('#menu-line').css({"margin-left":"38%","width":"10%"});
		 $('#heading-text').typeIt({
	strings: 'Work & Play',
	speed: 50,
	autoStart: false
	});
	$("#modal-menu").css({"opacity":"0","z-index":"-5"});
	setTimeout(function(){
	$("#down").prop("href","#contact");
	$("#down").css("opacity","1");
	$("#up").prop("href","#skills");
	$("#up").css("opacity","1");
},1000);
	 break;

	 case "#contact":
	 $('#menu-bar').css("top","33em");
		 $('#menu-line').css({"margin-left":"54%","width":"15%"});
		 $('#heading-text').typeIt({
	strings: 'Get in touch',
	speed: 50,
	autoStart: false
	});
	$("#modal-menu").css({"opacity":"0","z-index":"-5"});
	setTimeout(function(){
	$("#down").prop("href","#");
	$("#down").css("opacity","0");
	$("#up").prop("href","#exp");
	$("#up").css("opacity","1");
},1000);
	 break;
	 default:

 }

}
}

 $( document ).ready(function() {
	 $(".hori-third").css("width", "40%");
	 $('#heading-text').typeIt({
strings: 'Hi there,',
speed: 50,
autoStart: false
});

if (window.location.hash != "#about" && window.location.hash!=""){
	navigateTo(window.location.hash);
}
else{
	$("#down").prop("href","#skills");
	$("#down").css("opacity","1");
}

 });

 $(window).scroll(function() {
    if($(window).scrollTop()> 0) {
				$("#heading").removeClass("fadeIn");
				$("#heading").addClass("fadeOut");
				$("#menu").removeClass("fadeIn");
				$("#menu").addClass("fadeOut");
    }
 if($(window).scrollTop() == 0) {
				$("#heading").removeClass("fadeOut");
				$("#heading").addClass("fadeIn");
				$("#menu").removeClass("fadeOut");
				$("#menu").addClass("fadeIn");
    }
 });

 $("#ham").click(function(){

	 $("#modal-menu").css({"opacity":"0.9","z-index":"5"});

});

$("#close-div").click(function(){

	$("#modal-menu").css({"opacity":"0","z-index":"-5"});

});
