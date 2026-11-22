



let pagebdy=document.getElementById("mainbody");
let btn=document.getElementById("tggle");


let isDark=false;
function toggle(){
    if(isDark===false){
        pagebdy.style.backgroundColor="black";
        btn.innerText="Light Theme";
    }

        else{
            pagebdy.style.backgroundColor="white";
            btn.innerText="Dark Theme";
    }
    isDark=!isDark
}