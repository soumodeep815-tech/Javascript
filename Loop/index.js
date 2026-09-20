//For in loop
//Mainly Access key or index numbers

const user={
    Name:"Soumodeep Mondal",
    Age:24,
    Vill:"Dharmapur"

}
user.Gender="Male"
delete user.Age;
//console.log(user);

for(const keys in user){
    console.log(keys);
    
}

const user1=[
    "Soumodeep",24,true,false,56,"Array"
]
console.log(user1[4]);
user1[3]="Deep"
user1.pop();
user1[5]="Sandhya"

for(const indexes in user1){
    console.log(indexes);
    
}


