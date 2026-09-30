

//filter create a new array and containing only elements that match a condition

let products=[
    "IPhone","Laptop", "Charger", "Light"
]

let sixword_item=products.filter((elem)=>{
    if (elem.length===7)
        {
        return true;
    } else false;
})
console.log(sixword_item);



let names=[{
    Name:"Soumodeep",
    marks:45,

},
{
    Name:"Sneha",
    marks:23
},
{
    Name:"Abhijeet",
    marks:56

}]

let failing_student=names.filter((elem)=>{
    if(elem.marks <46){
    return true;
        
    }
    else false
})
console.log( "Failed Student:",failing_student);
