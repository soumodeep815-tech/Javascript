 //What are Default Parameter?
 //Default Parameter allow function to have preset values for Parameters.
 //1)If an argument is provided ,the function uses that value.
 //2)If an argument is not provided ,the function uses default value.



 function user(Last_name="Soumo"){
    console.log("Hello" +" "+ Last_name + "!");
    
 }
 user(); //Argument is not provided that's why default value was printed..


 function user1(name="Sandhya"){
    console.log("Hey"+" "+name);
    
 }
 user1("Universe!");//Argument is provided that's why did not printed default value.