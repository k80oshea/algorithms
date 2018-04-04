//Katie, Gabe, Preston - using %9 pattern
function sumToOne(num) { 
    if(num%9 == 0) {
        return (9);
    }
    else {
        return(num%9);
    }
}
sumToOne(12345)


// possible solution #2...has errors :[ does not give out correct numbers all the time

function digits_count(num) {
    var count = 0;
    if(num>1)++count;
    while(num/10>=1) {
        num/=10;
        ++count;
    }
    return count;
}

function sumToOne(num, count) {
    while(num>=10){
        digits_count ();
        var arr=[];
        for(var i = 0; i <count-1; i++) {
            var digit = num.toString()[i];
            parseInt(digit);
            arr.push(digit);
        }
        var sum = 0;
        for(var x = 0; x < arr.length; x++) {
            sum = sum + x;
        }
        num = sum;
    }
    return num;
}
sumToOne(12345)


//Also possible per Dan
function sumToOne(num) { 
    return((num-1)%9 +1);
}
sumToOne(12345)
