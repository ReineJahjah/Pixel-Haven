function clickedgames(){
    const games=document.getElementById("clickedgames");
    if(games.style.display==="none" || games.style.display===""){
        games.style.display="block";
    }
    else{
        games.style.display="none";
    }
}
function clickedmore3(){
    const more=document.getElementById("clickedmore3");
    if(more.style.display==="none" || more.style.display===""){
        more.style.display="block";
    }
    else{
        more.style.display="none";
    }
}
function clickedotification(){
    const notification=document.getElementById("clickednotification");
    if(notification.style.display==="none" || notification.style.display===""){
        notification.style.display="block";
    }
    else{
        notification.style.display="none";
    }
}

var chat = document.getElementById('clickedchat');
function togglechat() {
    chat.classList.toggle('show');
    chat.style.display="block";
}

function close(){
    chat.classList.toggle('hide');
    chat.classList.remove('show'); 
    chat.style.display="none"
}


function togglemore(){
    const more=document.getElementById("clickedmore");
    if(more.style.display==="none" || more.style.display===""){
        more.style.display="block";
    }
    else{
        more.style.display="none";
    }
}
function togglemore2(){
    const more=document.getElementById("clickedmore2");
    if(more.style.display==="none" || more.style.display===""){
        more.style.display="block";
    }
    else{
        more.style.display="none";
    }
}