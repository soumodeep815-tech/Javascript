//Async--> async marked a function that always return a promise
//await--> await pauses execution until promise resolved .

/*async function Gdata(){
    let res=await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data=await res.json();
    console.log(data)
}
Gdata()


try and catch-->
async function getdata(){
    try{
        let res=await fetch("https://jsonplaceholder.typicode.com/posts/2");
        let data=await res.json();
        console.log(data)
    }
    catch{
        console.log("Something Error Occurred")
    }

}
getdata()*/

//Fetch()-->
fetch("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Printed Successfully!")
})