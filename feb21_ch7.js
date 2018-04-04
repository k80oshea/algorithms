// With Tim, Doug, Jifahn 
// pg80 Balance Point
function balancept(arr) {
    var sumx = 0;
    for(var x=0; x<arr.length-1; x++) {
        var sumi = 0;
        for(var i=arr.length-1; i>x; i--) {
            sumi += arr[i];
        }
        sumx += arr[x];
        if(sumx == sumi) {
            return true;
        }
    }
    return false;
}
balancept([1,2,3,4,10]) //true
// balancept([1,2,3,4,6]) //false

// pg80 Balance Index
function balanceindex(arr) {
    if(arr.length<3){
        return -1;
    }
    else {
        var sumx = 0;
        for(var x=1; x<arr.length-1; x++) {
            var sumi = 0;
            for(var i=arr.length-1; i>x; i--) {
                sumi += arr[i];
            }
            sumx += arr[x-1];
            if(sumx == sumi) {
                return x;
            }
        }
        return -1;    
    }
}
// balanceindex([1,2,3,4,10]) //false
balanceindex([1,2,3,4,6]) //true


//other ways
function bp2(arr) {
    var sum = 0;
    for(var x=0; x<arr.length-1; x++) {
        sum += arr[x];
    }
    for(var i=arr.length-1; i>=0; i--) {
        if(arr[i] == sum/2) {
            return true
        }
    }
    return false;
}
bp2([1,2,3,4,10]) //true
// bp2([1,2,3,4,6]) //false

function bi2(arr) {
    if(arr.length<3){
        return -1;
    }
    else {
        var sumx = arr[0];
        for(var x=1; x<arr.length-1; x++) {
            var sumi = 0;
            for(var i=arr.length-1; i>x; i--) {
                sumi += arr[i];
            }
            if(sumx == sumi) {
                return x;
            }
            sumx += arr[x];
        }
        return -1;    
    }
}
// bi2([1,2,3,4,10]) //false
bi2([1,2,3,4,6]) //true
