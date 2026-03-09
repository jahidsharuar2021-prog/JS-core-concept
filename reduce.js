const numbers=[1,3,4,5];
// let sum=0;
// for(number of numbers){
//     sum=sum+number;
   
// }
const sum=numbers.reduce((acc,num)=>acc+num,0);
console.log(sum);
