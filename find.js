const students=[
    {name:'Jahid',age:22},
    {name:'Jahidul',age:21},
    {name:'lehid',age:35},
    {name:'sabid',age:24},
    {name:'dahangir',age:50}
];
const name=students.find(nam=> nam.name[0]=='J');
console.log(name);