
/*for(var i = 0 ; i<document.querySelectorAll(".drum").length ;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    alert("Selected");
  });
}*/


document.querySelectorAll(".drum")[0].addEventListener("click", function(){new Audio("sounds/crash.mp3").play();});
