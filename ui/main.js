console.log('Loaded!');
//change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';
//move the image
var img = document.getElementById('maddy');
var marginLeft= 0;
function moveRight()
{
    
     marginLeft=marginLeft + 1;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function() {
   var interval=setInterval(moveRight,50);
};
var counter=0;
var button = document.getElementById('counter');

butten.onclick=function() {
   counter = counter + 1;
   var count = document.getElementById('count');
   count.innerHTML=counter;
    
};