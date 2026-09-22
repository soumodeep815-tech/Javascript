//Callback
//It passes argument to anoter function.

function user(name,callback){
    console.log("Hey!"+" "+name);
    callback();
    
};

function user1(){
    console.log("I am a Web Developer!😊");
    
}
user("Guys",user1)