var select = document.getElementById("select");
var left = document.getElementById("left");
var btn = document.getElementById("btn");
var mode1 = document.getElementById("mode1");
var mode2 = document.getElementById("mode2");
var mode3 = document.getElementById("mode3");
var bg3 = document.getElementById("bg3");

function menu(){
  select.style.visibility = "visible";
  select.style.opacity ="1";
  select.style.transition ="1s";
  left.style.transform = "translateX(-800px)";
  left.style.transition ="1s";
  btn.style.display ="none";
  mode1.style.transform = "translateX(0)";
  mode1.style.transition ="0.5s";
  mode2.style.transform = "translateX(0)";
  mode2.style.transition ="1s";
  mode3.style.transform = "translateX(0)";
  mode3.style.transition ="1.5s";
  bg3.style.display ="none";
}