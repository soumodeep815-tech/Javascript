

//rest operator allow to pass infinit numbers of argument to a function.
let sum=0;
function addition(...nums){
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    console.log(sum);
    sum=0
}

addition(55,65,78,96,-1000);
addition(2,5,7,6,9,3,4,-45);