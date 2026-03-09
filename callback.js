function settleLife(name,isBCS,marriage,parthi){
    if(isBCS){
        marriage(parthi);
    }
}
function bolokobul(parti){
    console.log('Kobul',parti);
}
settleLife('Jahid',true,bolokobul,'Shoker Rani');
bolokobul('pori');