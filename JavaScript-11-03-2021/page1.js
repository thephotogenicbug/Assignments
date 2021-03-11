var item =[100, "Apple", 100.50, "Mango", "Orange"];

console.log(item[0]);

console.log(item[item.length-1] );

for(var i=0; i<item.length; i++){
    console.log(item[i]);
}
console.log("Print Array in desc order");
for(var i=item.length-1; i>=0; i--){
    console.log( item[i] ); 
}