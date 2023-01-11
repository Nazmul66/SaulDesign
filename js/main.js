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