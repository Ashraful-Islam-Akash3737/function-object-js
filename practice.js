var array = [189, 59, 47, 30, 60, 50, 239, 70];

function graterThen50(arr) {
    var total = [];
    for (let i = 0; i < arr.length; i++) {
        var number = arr[i];
        if (number >= 50) {
            total.push(number);
        }
    }

    return total;
}
var result = graterThen50(array);
console.log(result);



var num1 = ["akash", "shajib", "sayem", "tipu", "Bangladesh"];

function friendsName(names) {


    var item = "";
    for (let i = 0; i < names.length; i++) {
        var num2 = names[i];
        if (item.length < num2.length) {
            item = num2
        }

    }
    return item
}
var results = friendsName(num1);
console.log(results)







var add = [100, 20, 40, 50, 60, 90, 10, 40, 20, 60, 40];


function addition(result) {
    let total = 0;
    for (var i = 0; i < add.length; i++) {
        var sum = add[i];
        total = total + sum;
        
        
    }
    if(total >= 500){
        console.log(true)
    }
    else{
        console.log(false)
    }
    return total;
}
var plus = addition(add);
//console.log(plus);








var add = [100, 20, 40, 50, 600, 90, 10, 40, 20, 60, 200];
function largestNumber(result) {
    let number = 0;
    for (var i = 0; i < result.length; i++) {
        var sum = result[i];
        if(number < sum){
            number = sum;
        }
    }
   
    return number;
}
var plus = largestNumber(add);
console.log(plus);
