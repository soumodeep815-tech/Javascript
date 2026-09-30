//Map-->
//Map is used to iterate over an array and return a new array
//Similar like forEach but its return a new one.
//it does not modify main array


let price= [
 200,650,250,780
]

let includeTax= price.map((elem)=>{
    return elem * 1.8
})
console.log(includeTax);


let name=["Soumo","Sandhya","Ranit"]
 let length= name.map((elem)=>{
    return elem.length
 })
 console.log(length);


 let number =[
    1,2,3,4,5,6
 ]

 let square= number.map((elem)=>{
     return elem * elem
 })
 console.log(square);
 
 
