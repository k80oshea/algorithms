//pg 136 Intersect Sorted Arrays
// works
function intersect(arr1, arr2) {
    var newarr = [];
    for(var x=0; x<arr1.length; x++) {
        for(var y=0; y<arr2.length; y++) {
            if(arr1[x] == arr2[y]) {
                newarr.push(arr2[y]);
                arr1.splice(x, 1);
                arr2.splice(y, 1);
            }
        }
    }
    console.log(arr1, arr2);
    return newarr;
}
intersect([1,2,2,2,7], [2,2,6,6,7])
// intersect([2,2,6,6,7], [1,2,2,2,7])


//pg 136 Intersect Sorted Arrays(dedupe)
//not quite working, still returns duplicates
function helper(arr, index) {
    for(var i=index; i<arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.pop(); //returns [2,2,2,7]

    // arr.splice(index, 1); //returns [2,2,2,7], shortcut for the for loop lines 6-9

    // var temp = arr[index];
    // arr[index] = arr[arr.length-1];
    // arr[arr.length-1] = temp;
    // arr.pop(); //returns [7,2,2,2]
    return arr;
}
function dedupe(arr1, arr2, newarr) {
    if(newarr == null) {
        newarr = [];
    }
    while (arr1.length > 0) {
        var x = arr2.length-1;
        while(x > -1) {
            if(arr1[0] == arr2[x]) {
                var y = 0;
                while(y > newarr.length) {
                    if(arr2[x] == newarr[y]) {                      
                        arr2 = helper(arr2, x);
                        dedupe(arr1, arr2, newarr);
                    }
                    else {
                        y++;
                    }
                }
                newarr.push(arr2[x]);
                arr1 = helper(arr1, 0);
                dedupe(arr1, arr2, newarr);
            }
            else {
                x--;
            }
        }
        arr1 = helper(arr1, 0);
        dedupe(arr1, arr2, newarr);
    }
    // console.log(newarr);
    return newarr;
}
dedupe([1,2,2,2,7], [2,2,6,6,7])
// intersect([2,2,6,6,7], [1,2,2,2,7])