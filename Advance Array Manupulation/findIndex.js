
//findIndex()--> it used to return first index depend on condtion...


let marks=[
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

/*Aa-1
let first_index=marks.findIndex((elem)=>{
    if (elem.marks <33){
        return true;
    } else false;
})
console.log(first_index);*/

//Ap-2

let first_index= marks.findIndex((elem)=>{
    if(elem.name.length ===9){
        return true;
    }else false;
})
console.log(first_index);
