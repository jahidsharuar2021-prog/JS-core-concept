function sum(arr1,arr2){
    arr1[0]=100;
    arr2[0]=200;
    const first=arr1[0];
    const second=arr2[0];
    return first+second;
}

const num1=[1,3,4,5,6];
const num2=[7,8,9,10,11];
console.log('Before calling fuction' ,num1,num2);
const result=sum(num1,num2);
console.log('Before calling fuction' ,num1,num2);