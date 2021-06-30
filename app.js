
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    dessin();

})


var soleil = new Image();
var lune = new Image();
var terre = new Image();

soleil.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
lune.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
terre.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
function dessin(){

ctx.globalCompositeOperation = 'destination-over' ; 
ctx.clearRect(0,0,300,300);  

// dessin de l'orbite de la terre

ctx.beginPath();
ctx.strokeStyle = 'rgba(0,153,235,0.4)'
ctx.arc(150,150,105,0,Math.PI*2)
ctx.stroke();

// garder le translate par default
ctx.save();
ctx.translate(150,150);

var time = new Date();
// console.log(new Date());
ctx.rotate(((2*Math.PI/60) * time.getSeconds())+ ((2*Math.PI/60000)*time.getMilliseconds()))
// console.log(time.getSeconds());

// mettre la terre sur l'orbite
ctx.translate(105,0);
ctx.drawImage(terre,-12,-12)

// Lune
ctx.rotate( ((2*Math.PI/60) * time.getSeconds()) )
ctx.translate(0,28);
ctx.drawImage(lune,-3.5,-3.5)

// on retoure les valeurs de translate du début
ctx.restore();

// on desinne la soleil
ctx.drawImage(soleil,0,0);

requestAnimationFrame(dessin);

}
dessin();

