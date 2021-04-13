$(document).ready(function(){

  $(".all").on("click",function(){
      $(".nav").addClass("on");
      $("header .inner").addClass("on")
      $(".nav div").removeClass("sub-menu")
      $(".nav ul").removeClass("menu")
      $(".dim").show();
  });
  $(".nav .close").on("click",function(){
      $(".nav").removeClass("on");
      $("header .inner").removeClass("on")
      $(".dim").hide();
  });

  if(window.innerWidth<= 482){
      
    $("#logo").attr("src", "./images/cremona_logo.png")
    $("#logo").attr("style", "height:70px")
  }else{
    
    $("#logo").attr("src", "./images/cremona_logo_only_text.png")
    $("#logo").attr("style", "width:400px; margin-top:2px;")
  }

  $(window).resize(function(){
    width_size=window.innerWidth;
    if(width_size<= 482){
      
      $("#logo").attr("src", "./images/cremona_logo.png")
      $("#logo").attr("style", "height:70px")
    }else{
      $(".nav div").addClass("sub-menu")
      $(".nav ul").addClass("menu")
      $("#logo").attr("src", "./images/cremona_logo_only_text.png")
      $("#logo").attr("style", "width:400px; margin-top:2px;")
    }
  
  });
});

// function sidebar() {

//   var html="";
//   html += ""

//   $("#side_search").empty();
//   $("#side_search").append(html).trigger('create');
// }
