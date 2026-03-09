let data;
data=0;
data='0';
data=false;
data=null;
data=undefined;
data={};
data=[];

if(data){
    console.log('Truthy');
}
else{
    console.log('False');
}

// not true conditon is
const price=0;
if(!price){
    console.log('price is False');
}