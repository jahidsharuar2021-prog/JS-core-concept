function outerFunction(){
    function innerFunction(){
        console.log('This is inner funtion');
    }
    return innerFunction;
}
const output=outerFunction();
output();

// console.log('In the outside' ,output);


function counter(name){
    let count =0;
    function increment(){
         count=count+1;
        console.log('value of count=',name,count);
    }
    return increment;
}
const RohimCounter=counter('Rohim');
RohimCounter();
RohimCounter();
RohimCounter();

//another counter for understanding
const KarimCounter=counter('karim');
KarimCounter();
KarimCounter();
KarimCounter();
KarimCounter();
KarimCounter();
KarimCounter();