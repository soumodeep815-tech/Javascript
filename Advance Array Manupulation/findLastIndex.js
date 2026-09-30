
//FindLastIndex--> its a opposite of findIndex()

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

/*let last_failing=marks.findLastIndex((elem)=>{
    if(elem.marks<36){
        return true;
    } else false;
})
console.log(last_failing);*/


let last_name=marks.findLastIndex((elem)=>{
    if(elem.name.length===6){
        return true;
    }else false
})
console.log(last_name);
