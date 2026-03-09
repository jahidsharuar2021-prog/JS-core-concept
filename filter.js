const numbers=[1,4,6,8,9];
const even=numbers.filter(num=>num%2==0);
console.log(even);

const name=['jahid','johir','nela','shihab','jeba'];
const jfriend=name.filter(nam=> nam[0]=='j');
console.log(jfriend);

const students=[
    {name:'Jahid',age:22},
    {name:'Jahidul',age:21},
    {name:'Jehid',age:35},
    {name:'Jabid',age:24},
    {name:'Jahangir',age:50}
];
const oldboy=students.filter(stu=>stu.age>30);
console.log(oldboy);