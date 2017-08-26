





var button = document.getElementById('counter');
button.onclick = function(){
  
    var request = new XMLHttpRequest();
   request.onreadystatechange = function(){
       if (request.readyState === XMLHttpRequest.DONE){
           if (request.status === 200){
               var counter = request.responseText;
               var span= document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       }
       
   };
    request.open('GET', 'http://sujinabiju.imad.hasura-app.io/counter', true);
    request.send();
     
};

//submit name

/*var submit = document.getElementById('submit_btn');
submit.onclick = function(){
   
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
       if (request.readyState === XMLHttpRequest.DONE){
           if (request.status === 200){
    var names =request.responseText;
    names=JSON.parse(names);
    var list = '';
    for(var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>' ;
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
           }
       }
    };
     var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://sujinabiju.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
       };*/
       
       
       
       //submit username/password to login
       var submit = document.getElementById('submit_btn');
       submit.onclick = function()
           {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function(){
                if(request.readystate ===XMLHttpRequest.DONE){
                    if(request.status===200){
                        console.log('user logged in');
                        alert('Logged in successfully');
                    }
                    else if(request.status ===403){
                        alert('Username/Password is incorrect');
                    }else if(request.satus===500){
                        alert('Something went wrong on the server');
                    
                    }
                }
            };
            var nameInput = document.getElementById('username');
            var username = nameInput.value;
            var password=document.getElementById('password').value;
            console.log(username);
            console.log(password);
            request.open('POST','http://sujinabiju.imad.hasura-app.io/login',true);
            request.setReuestHeader('Content-Type','application/json');
            request.send(JSON.stringify({username:username,password:password}));
           };
   

