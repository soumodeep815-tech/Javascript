//for of loop it mainly access values..

const user={
    Name:"Soumodeep Mondal",
    Age:24,
    Vill:"Dharmapur"
}

for (const value of Object.values (user)){
    console.log(value);
    
}

user.Gender="Male"
console.log(user);


const arr=[
    "Soumodeep",256,true,false
]
for (const value of arr){
    console.log(value);
    
}


const user1="Hello World";

for (const char of user1){
    console.log(char);
    
}

