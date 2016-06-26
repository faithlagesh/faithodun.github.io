//Call function when DOM is ready

$(document).ready(function(){

  // Toggle Navigation - mobile device
  	$('.icon-nav').on('click', function(){
  		$('.nav').slideToggle();
     $("#header").toggleClass("active");
  	});

  // // fix issue with naigation not display when changing from mobile to desktop.
  //   function nav(){
  //     if($(".icon-toggle").hasClass("active") === false
  //         && $('.nav').css("display") == "none" && window.innerWidth > 651){
  //       // $('.nav li').css("display","inline-block");
  //       $('.nav li').css("display","");
  //     }
  //     return nav;
  //   }


});
