//Replace Method is used to  repalce a part of string with another string...

//Approach-1
let user="Soumo,Deep,Ranit,Saikat";
let replace=user.replace("Deep","Sneha");
console.log(replace);

//Approach-2
let  user1="Soumo,Soumo,Soumo"
let replace1=user1.replace("Soumo","Sandhya");


 console.log(replace1);

 //Approach-3
 let user2="Mango,Mango,Mango,Mango";
 let replace2=user2.replace(/Mango/g,"Apple");
 console.log(replace2);
 
 