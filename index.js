//reading mouse clicks

var buttonLength=document.querySelectorAll(".drum").length;
for(var i=0; i<buttonLength; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonClick=this.innerHTML;
    var buttonClicked= buttonClick.toLowerCase();

    makeNoise(buttonClicked);
  });
}

//reading butting clicks
document.addEventListener("keypress",function(event){
  var buttonClicked=event.key;
  makeNoise(buttonClicked);
});

function makeNoise(buttonClicked){
switch (buttonClicked) {
  case "q":
  var q=new Audio("sounds//Q.mp3");
  q.play();
  break;

  case "w":
  var w=new Audio("sounds//W.mp3");
  w.play();break;

  case "e":
  var e=new Audio("sounds//E.mp3");
  e.play();break;

  case "r":
  var r=new Audio("sounds//R.mp3");
  r.play();break;

  case "t":
  var t=new Audio("sounds//T.mp3");
  t.play();break;

  case "y":
  var y=new Audio("sounds//Y.mp3");
  y.play();break;

  case "u":
  var u=new Audio("sounds//U.mp3");
  u.play();break;

  case "i":
  var i=new Audio("sounds//I.mp3");
  i.play();break;

  case "o":
  var o=new Audio("sounds//O.mp3");
  o.play();break;

  case "p":
  var p=new Audio("sounds//P.mp3");
  p.play();break;

  case "a":
  var a=new Audio("sounds//A.mp3");
  a.play();break;

  case "s":
  var s=new Audio("sounds//S.mp3");
  s.play();break;

  case "d":
  var d=new Audio("sounds//D.mp3");
  d.play();break;

  case "f":
  var f=new Audio("sounds//F.mp3");
  f.play();break;

  case "g":
  var g=new Audio("sounds//G.mp3");
  g.play();break;

  case "h":
  var h=new Audio("sounds//H.mp3");
  h.play();break;

  case "j":
  var j=new Audio("sounds//J.mp3");
  j.play();break;

  case "k":
  var k=new Audio("sounds//K.mp3");
  k.play();break;

  case "l":
  var l=new Audio("sounds//L.mp3");
  l.play();break;

  case "z":
  var z=new Audio("sounds//Z.mp3");
  z.play();break;

  case "x":
  var x=new Audio("sounds//X.mp3");
  x.play();break;

  case "c":
  var c=new Audio("sounds//C.mp3");
  c.play();break;

  case "v":
  var v=new Audio("sounds//V.mp3");
  v.play();break;

  case "b":
  var b=new Audio("sounds//B.mp3");
  b.play();break;

  case "n":
  var n=new Audio("sounds//N.mp3");
  n.play();break;

  case "m":
  var m=new Audio("sounds//M.mp3");
  m.play();break;

  default:
  console.log(buttonClicked);
}}

function buttonAnimation(buttonClicked){
  var activeButton = document.querySelector(buttonClicked);
  activeButton.classList.add("pressed");
}
