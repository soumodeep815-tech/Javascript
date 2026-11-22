
//SEarching by ClassName-->in js DOM browser have many class and tag thats why when  used class js return html collection



let hdr1= Array.from(document.getElementsByClassName("hdr"));


//length method
for(let i=0; i<hdr1.length; i++){
    console.log(hdr1[i].innerHTML);
    
}

//its convert into array
let hdr2= Array.from(document.getElementsByClassName("hdr"));

//console.log(hdr1);
console.log(hdr2);

