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

var button = document.getElementById('counter');

button.onclick=function() {
    var request =new XMLHttpRequest();
    request.onreadystatechange=function()
    {
     if(request.readystate ===XMLHttpRequest.DONE){
         if(request.status ===200){
         var counter =  request.responseText;   
         var span = document.getElementById('count');
         span.innerHTML=counter.toString();
         }
     }
     
    };
     request.open('GET','http://sujinabiju.imad.hasura-app.io/counter',true) ;
     request.send(null);
    
};