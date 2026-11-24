//Promise--> A promise represent a value that may be available now ,later or never..
//Async has 3 operation-->1)Fetch API 2)File Reading 3)Timers
//Promise has 3 states-->1)Pending 2)Fulfilled 3)Rejected

//Making a Promise-->
/*let promise=new Promise((resolve,reject)=>{
    let NovemberWinter=false;
    if(NovemberWinter){
        resolve("This is true because its a winter and its November")
    }else{
        reject("This is a false!")
    }
})
.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})*/

/*handling promisess:

function getData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
        res("A promise represent a value that may be available now,later or never..")
        },5000)
    })
}

getData().then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Data Print Successfully!")
})


//Promise allsettled()-->
//Promise all settled is a static method ,its wait for all promises, Either Fulfilled or rejected..

let a1=Promise.resolve("Its coming from a1 promise");
let a2=Promise.resolve ("Its solved by Soumo and a2");
let a3= Promise.reject("Its rejected by a3 promise");
let a4=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Its coming from a4 promise")
    }, 2000)
})
Promise.allSettled([a1,a2,a3,a4]).then((msg)=>{
    console.log(msg,"All promises is here")
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
   console.log("Successfully Printed")
})
//Promise.race()-->
//Promise race () is a static method , who first execiute first print.either fulfilled or rejected..

let a1=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("Its coming from a1 promise")
   }, 1000)
})
let a2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Its coming from a2 promise")
    }, 2000)
})
let a3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Its coming from a3 promise")
    }, 3000)
})

let a4=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    reject("Its coming from a4 promise and its rejected")
   }, 500)
})

Promise.race([a1,a2,a3,a4]).then((msg)=>{
    console.log(msg,"All Promises is here")
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("Its successfully Printed!")
})

//Chaining Promise with Promise.then()-->
function Order(){
return new Promise((res)=>{
    setTimeout(()=>{
        res("Step 1: Ordered Successfully")
    },1000)
})
}

function payment(data){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("Step 2:Payment Successfully!")
        },2000)
    })
}

function delivery(data){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("step3:Ordered Delivered Successfully!")
        },3000)
    })
}

Order().then((data)=>{
    console.log(data);
    return payment(data).then((data)=>{
        console.log(data);
        return delivery(data).then((data)=>{console.log(data)}).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            console.log("Thanks for your patience!")
        })
    })
})
*/

//Promise.all()-->
//If all promises are succeed then all prome are fulfilled and resolve Either one promise is reject then rect all promises.

let a1=Promise.resolve("Its coming from a1 promise");
let a2=Promise.resolve("Its coming from a2 promise");
let a3=Promise.reject("Its coming from a3 promise but its rejected for some issues");
let a4=Promise.resolve("Its coming from a4 promise")
let a5= new Promise((res)=>{
    setTimeout(()=>{
        res("Its coming from a5 promise")
    }, 1000)
})
Promise.all([a1,a2,a3,a4,a5]).then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("printed Successfully!")
})

