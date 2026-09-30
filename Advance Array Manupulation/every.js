//Every--> it checks all element then return condition wise true or false


let num=[4,6,2,28,32,14,50];

let even_number=num.every((elem)=>{
    if(elem%2===0){
        return true;
    }else false
})
console.log(even_number);


let names=[
    {
 name:"Soumodeep",
 marks:55,
 gender:"Male"
},
{
    name:"Manaj",
 marks:36,
 gender: "Male"
},
{
    name:"Aritra",
 marks:32,
 gender: "Male"
},
{
    name:"Sayan",
 marks:30,
 gender: "Male"
}
]
let Has_failed_student=names.every((elem)=>{
    if(elem.marks <35){
        return true;
    }
    else false;
})
console.log(Has_failed_student);

