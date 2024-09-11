const mybtn=document.getElementById("mybtn");
const body = document.querySelector('body');
let light=true;

mybtn.onclick=function(){

    if(light){
        document.body.style.color="white";
        document.getElementById("myh1").innerHTML="Dark Mode";
        body.classList.add('bg-change');
        light=false;
    }
    else{
        document.body.style.color="black";
        document.getElementById("myh1").innerHTML="Light Mode";
        body.classList.remove('bg-change');
        light=true;
    }
}