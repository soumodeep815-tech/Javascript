//find()--> find()returns the first element that is matches condition..


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

let failed_student=marks.find((elem)=>{
    if(elem.marks <33){
        return true;
    } else false;
})

console.log(failed_student);
//console.log(failed_student.name);
