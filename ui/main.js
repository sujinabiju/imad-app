console.log('Loaded!');
//change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';
//move the image
var img = document.getElementById('maddy');
var marginLeft= 0;
function moveRight()
{
    alert('moving');
     marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function() {
   var interval=setInterval(moveRight,100);
};