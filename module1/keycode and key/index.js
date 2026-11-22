


let inp=document.getElementById("input");
inp.addEventListener("keyup",(e)=>{

let res=document.getElementById("result");
res.innerText=e.keyCode;


let result=document.getElementById("text_result");
result.innerText=e.key;



})