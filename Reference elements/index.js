

/*alert("Hello People!")


let header=document.getElementById("hdr1");
header.style.backgroundColor="red";
header.style.color="white";

console.log(header);*/


let boxes= Array.from(document.getElementsByClassName("cds1"));

for(let i=0; i<boxes.length; i++){
    if(i==0){
        boxes[i].style.backgroundColor="green";
    }
     if(i==1){
        boxes[i].style.backgroundColor="skyblue";
    }
     if(i==5){
        boxes[i].style.backgroundColor="orange";
    }
     if(i==7){
        boxes[i].style.backgroundColor="yellow";
    }
     if(i==9){
        boxes[i].style.backgroundColor="beige";
    }
     if(i==12){
        boxes[i].style.backgroundColor="pink";
    }
}
console.log(boxes);