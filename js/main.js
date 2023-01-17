//jquery code writing

$(document).ready(function(){

 $("#all").click(function(){
   $("#sec-1").show(400);
   $("#sec-2").show(400);
   $("#sec-3").show(400);
 });

 $("#ui").click(function(){
    $("#sec-1").show(400);
    $("#sec-2").hide(400);
    $("#sec-3").hide(400);
  });

  $("#ux").click(function(){
    $("#sec-1").hide(400);
    $("#sec-2").show(400);
    $("#sec-3").hide(400);
  });

  $("#web-design").click(function(){
    $("#sec-1").hide(400);
    $("#sec-2").hide(400);
    $("#sec-3").show(400);
  });

});


//javascript code writing

var menu = document.querySelector(".menu");
var icon = document.querySelector(".fa-bars");
var xMark = document.querySelector(".fa-xmark");


icon.addEventListener("click", function(){
  menu.classList.add("active");
});

xMark.addEventListener("click", function(){
  menu.classList.remove("active");
});

//javascript code writing
window.addEventListener("scroll",function(){
  menu.classList.remove("active");
});
 