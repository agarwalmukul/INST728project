// JavaScript Document

$(function(){

	
$(".btn1").click(function() {
  // Instead of directly editing CSS, toggle a class
  $(this).addClass("clicked");
  $(".btn2").removeClass("clicked");  
});

$(".btn2").click(function() {
  // Instead of directly editing CSS, toggle a class
  $(this).addClass("clicked");
  $(".btn1").removeClass("clicked");  
});


// 
var video = document.querySelector("#videoElement");

if( video !== null)
{
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
if (navigator.getUserMedia) {       
    navigator.getUserMedia({video: true}, handleVideo, videoError);
}
}
 
function handleVideo(stream) {
    video.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
    // do something
}


// drawing cheque border on the video
var canvas = document.getElementById("draw"); 
if(canvas !== null)
{
var ctx = canvas.getContext("2d"); 
ctx.lineWidth=2;
ctx.fillStyle = "#00FF00";
ctx.strokeStyle="#00FF00";
ctx.strokeRect(100,5,100,50); 
}

// loading animation 

var c=document.getElementById('load'),
    ctx1=c.getContext('2d'),
    pi = Math.PI,
    xCenter = c.width/2,
    yCenter = c.height/2,
    radius = c.width/3,
    startSize = radius/3,
    num=5,
    posX=[],posY=[],angle,size,i;
  
  window.setInterval(function() {

    num++;
    ctx1.clearRect ( 0 , 0 , xCenter*2 , yCenter*2 );
    for (i=0; i<9; i++){
      ctx1.beginPath();
      ctx1.fillStyle = 'rgba(69,99,255,'+0.1*i+')';
      if (posX.length === i){
        angle = pi*i*0.25;
        posX[i] = xCenter + radius * Math.cos(angle);
        posY[i] = yCenter + radius * Math.sin(angle);
      }
      ctx1.arc(
        posX[(i+num)%8],
        posY[(i+num)%8],
        startSize/9*i,
        0, pi*2, 1); 
      ctx1.fill();
    }
  }, 100);

	setInterval(function(){
		if(document.title === 'TV Bank - license')
		{
			window.location.href = "./card_show.html";
		}
		else if(document.title === 'TV Bank - card')
		{
			window.location.href = "./info_confirm.html"
		}
		else
		{
		window.location.href = "./deposit_cheque2.html";}},3000);
  
});

