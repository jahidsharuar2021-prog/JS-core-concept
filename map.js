const numbers=[1,2,3,4,5];
// const doubled=[];
// for(const num of numbers){
//     doubled.push(num*2);
// }


// const doubleIt= num => num*2;
// const doubled=numbers.map(doubleIt)

 const doubled=numbers.map(num => num*2 );

 const squared=numbers.map(num => num*num );
console.log(squared);


const fireds=['jahid','ashik','shihab'];
const firstLeter=fireds.map(friend => friend[0]);
console.log(firstLeter);


const products=[
    {name:'laptop',price:45000},
    {name:'phone',price:15000},
    {name:'tablet',price:25000}
];

const prices=products.map(pd=>pd.price*2 );
console.log(prices);

const mames=products.map((pd,index,array)=>{
    const uppercaseName=pd.name.toUpperCase();
    console.log(index,uppercaseName,array);
})

const output=products.forEach(pd=>console.log(pd.name));
console.log(output);