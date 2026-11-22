

//Event Loop---> Event Loop is a core mechanism that allows to js perform non-blocking and asyncronous operations..

//CallStack-->call stack is the place where js code is executed.and class stack have lifo structure.

//CallStack-->
console.log("start");

function soumo(){
    sandhya ();
    console.log("This is From soumo");
    
}

function sandhya(){
    sneha ();
    console.log("This is from Sandhya");
    
}

function sneha(){
    dad ();
    console.log("This is form sneha");

    
}

function dad(){
    console.log("This is from dad");
    
}
soumo()
console.log("End");
