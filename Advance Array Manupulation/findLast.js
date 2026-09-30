//findLast()--> similar of find().but find() returns only first element but find last returns only last elemnet 



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

let last_failing=marks.findLast((elem)=>{
    if(elem.marks<36){
        return true;
    } else false;
});

console.log(last_failing);
//console.log(last_failing.name);
