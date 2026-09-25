// Methods are functions that are properties of object.
//Array have also built in methods..allow perofrom opertaion on the array.
//Ex-array.pop(),array.push()

const person={
    Name:"Soumodeep Mondal",
    Age:24,
    Vill:"Dharmapur",
    Message: function (){
        console.log("This is Data:--");
        
        console.log("Hey!"+" "+ person.Name+"!");
        console.log(person.Age);
        console.log(person.Vill);
        
        
    }
}
person.Message();