//pg 42 Remove Negatives and Zip It
function removeNegatives(arr) {
    for (var i=arr.length; i>=0; i--) {
        if(arr[i]<0) {
            for(var x=i; x<arr.length-1; x++) {
                arr[x]=arr[x+1];
            }
            arr.length--;
        }
    }
    return arr;
}
removeNegatives([3,-4,-8,10,2,-5])

function removeNegs(arr) {
    var arrnew = [];
    for (var x=0; x<arr.length; x++) {
        if(arr[x]>=0) {
            arrnew[arrnew.length]=arr[x];
        }
    }
    arr = arrnew;
    return arr;
}
removeNegs([3,-4,-8,10,2,-5])


function zipIt(arrA, arrB) {
    var arrnew=[];
    var length=arrA.length;
    if(arrB.length>length) {
        length = arrB.length;
    }
    for(var i=0; i<length; i++) {
        if(arrA[i]==true) {
            arrnew.push(arrA[i]);
        }
        if(arrB[i]==true) {
            arrnew.push(arrB[i]);
        }
    }
    return arrnew;
}
zipIt([1,2,3,4,5], [6,7,8,])