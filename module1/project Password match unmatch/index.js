

let form=document.getElementById("signup");
let pass= document.getElementById("pass");
let cnf_pass=document.getElementById("cnf_pass");
let msg=document.getElementById("msg");
let tggle=document.getElementById("tggle")

    tggle.addEventListener("change",function(){
        if(tggle.checked===true){
pass.type="text"
        }
        else{
            pass.type="password"
        }
    })
form.addEventListener("submit",function(e){


    e.preventDefault();

    if(pass.value!==cnf_pass.value){
        msg.innerText="PassWord do not Matched ";
         msg.style.color="red";
    }
    else{
        msg.innerText="PasssWord Matched";
      alert("Form hasbeen submitted!")
        msg.style.color="green";
    }
})