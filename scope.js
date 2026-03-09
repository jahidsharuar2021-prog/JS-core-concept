let pi=3.1416;
function add(a,b){
    const factor=0.5;
    const result=(a+b)*factor+pi;
    const total=double(result);
    const value=addtwo(total);

   //inside local function
    function addtwo(num){
        return num+2+pi;
    }
    return value;
}

//Global function
function double(num){
    return num*2;
}
const result=add(5,10);
console.log(result);


//multiply arrow function
const multifly=(a,b)=>{
   
     const result=a*b;
    return result;
}

multifly(2,5);