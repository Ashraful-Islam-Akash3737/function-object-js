//practice problem 1
function foo(){
    console.log("foo");
    return bar();
}
//foo();



function bar(){

    console.log("bar");
    
}

//bar();





//practice problem 2

function make_avg(num1, num2, num3){
    var total = num1 + num2 + num3;
    
    var avg = total / 3
    var avgs = parseFloat(avg);
    avgs= avgs.toFixed(2);
    return avgs;
}
var result = make_avg(20, 30, 50);
//console.log(result);


//practice problem 3










//practice problem 4
function odd_even(a){
    var number = a;
    if(number % 2 == 0){
        //console.log("even number");
    }
    else{
        //console.log("odd number"); 
    }
    return number;
}
odd_even(20);




//practice problem 5
var signal = " green";
switch(signal){
    case " red" :
       // console.log(" you may be in danger");
        break;
    case " yellow" :
       // console.log(" you should stop");
        break;
    case " green" :
       // console.log(" you can cross the road");
        break;
    default :
    //console.log(" do whatever you want");
    
}





var array = [23,56,76,76,7,6,86,86,86,84, 50,38, 48,69];
   


function arraySum(arr){
    let sum = [];
    for(let i = 0; i<arr.length ; i++){
        var element = arr[i];
        //console.log(element);
        //sum = sum+element;
        if(element <= 50){
            sum.push(element);
        }

         
    }
    return sum ;
}

var total = arraySum(array);
console.log(total);