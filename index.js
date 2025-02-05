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
const chat=document.getElementById("clickedchat");
function togglechat(){
    if(chat.style.display==="none" || chat.style.display===""){
        chat.style.display="block";
    }
    else{
        chat.style.display="none";
    }   
}
//recheck
function close(){
    chat.style.display="none";
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

let username;

window.onload = function() {
    // Check if the username is already in localStorage
    username = localStorage.getItem("username");

    // If there's no username in localStorage, ask the user for it
    if (!username) {
        username = prompt("Please enter your username:");
        // Store the username in localStorage
        if (username) {
            localStorage.setItem("username", username);
        }
    }

    // Display the username
    document.getElementById("usernamedisplay").textContent = username;
};
