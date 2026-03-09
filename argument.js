function add(num1,num2){
    console.log('argument',arguments,arguments[2]);
   const args=[...arguments];
   console.log(args);
    return num1+num2;
}
add(1,2,3,4,5);
