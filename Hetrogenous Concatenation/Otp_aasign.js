

let ammount=500;
let cardNum=4520;

let OTP=""+Math.floor(Math.random()*10)+
Math.floor(Math.random()*10)+
Math.floor(Math.random()*10)+
Math.floor(Math.random()*10)+
Math.floor(Math.random()*10)+
Math.floor(Math.random()*10);

let message=`Your OTP for rupees ${ammount} with card Number XX${cardNum}is ${OTP}`
console.log(message);