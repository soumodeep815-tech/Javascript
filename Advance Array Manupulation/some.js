//Some() checks if atlist one element in an array check condition
//It returns true or false not an array


let marks=[62,55,85,96,78,27,
    21,30];
let fail_student=marks.some((elem)=>{
    if(elem<26){
      //  console.log("Failed student is here!");
        
        return true;
    } 
    
    
   else false;
   
})

//console.log(fail_student);




let num=[1,3,5,7,9,16];
let even_Number= num.some((elem)=>{
    if(elem % 2===0){
        console.log("Even Number is here...");
        return true;
    }else false;
   
})
console.log(even_Number);
