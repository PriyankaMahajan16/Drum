
/*for(var i = 0 ; i<document.querySelectorAll(".drum").length ;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    alert("Selected");
  });
}*/


var audio1 = new Audio("sounds/crash.mp3");
document.querySelectorAll(".drum")[0].addEventListener("click", function(){audio1.play();});
