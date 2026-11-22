

let button=document.getElementById("btn");


button.addEventListener("click",function(){
    alert("Button has been Clicked !")
})


let image=document.getElementById("image");

image.style.height="160px";
image.style.width="150px"

image.addEventListener("click",function(){
    alert("Image has been clicked");
    image.style.height='500px';
    image.style.width="455px";
})