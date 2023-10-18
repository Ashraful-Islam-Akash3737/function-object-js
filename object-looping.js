var myComputer = {
    type : "laptop",
    price : 10000,
    processor : "i-7",
    ram : "16GB" ,
    version : "10",

}
console.log(myComputer);

const propertyName = Object.keys(myComputer);
console.log(propertyName);
const propertyValue = Object.values(myComputer);
console.log(propertyValue);


//loop for showing propertyName and propertyValue in the same line
for (var propertyNames in myComputer){
    const value = myComputer[propertyNames];
    console.log(propertyNames, value);
}

