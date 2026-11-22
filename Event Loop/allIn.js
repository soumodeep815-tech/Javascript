//Callstack and Micro and Macro in this code...

console.log("Operation Start");
Promise.resolve().then(()=>{
    console.log("Please Wait Few mins........");
    
})

let interval=setInterval(()=>{
    console.log("Thanks for beliving us");
    
},5000)
setTimeout(()=>{
    console.log("Operation Succesfully and Thanks for Waiting");
    
},50000)

clearInterval(interval);
