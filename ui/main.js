





var button = document.getElementById('counter');
button.onclick = function(){
    var request = new XMLHttpRequest();
   request.onreadystatechange = function(){
       if (httpRequest.readyState === XMLHttpRequest.DONE){
           if (httpRequest.status === 200){
               var counter = request.responseText;
               var span= document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       }
       
   };
    request.open('GET', 'http://http://sujinabiju.imad.hasura-app.io/counter', true);
    request.send(null);
};