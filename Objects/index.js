// Object is a dynamic data structure use to collection of data and functions.

const user={
    First_Name:"Soumodeep",
    Last_Name:"Mondal",
    Vill:"Dharmapur",
    Pin:743249,
    Occupation: "Student of FSD"
}

console.log(user);

//Creating Objects
//Approach 1
 const user1="Name";
 const data={
    [user1]:"Sandhya Mondal"
 }
 console.log(data);


 //Approach2

 const user2=new Object();
 user2.Name="Madhusudan Mondal",
 user2.Vill="Dharmapur"

 console.log(user2);

 user2.Gender="Male"
 user2.Vill="Dharmapur North 24pgs"
 console.log(user2);
 
 delete user.Pin
 console.log(user);
 
 
 
 








 