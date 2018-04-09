//pg 126 Array: Insertion Sort
function insert(arr) {
    console.log("*****************************");
    for(var i=1; i<arr.length; i++) {
        for(var j=1; j<arr.length; j++) {
            if(arr[i] < arr[0]) {
                temp = arr[i];
                for(var k=i; k>0; k--) {
                    arr[k] = arr[k-1];
                }
                arr[0] = temp;
                console.log(arr);
                console.log("first");
            }
            if(arr[i] > arr[j-1] && arr[i] < arr[j]) {
                temp = arr[i];
                for(var k=i-1; k>j-1; k--) {
                    arr[k] = arr[k-1];
                }
                arr[j-1] = temp;
                console.log(arr);
                console.log("second");
            }
        }
    }
    return arr;
}
insert([7,6,3,4,9,1])


//pg 126 Array: Combine Sort
function combine(arr1, arr2) {
    for(var i=0; i<arr2.length; i++) {
        for(var j=1; j<arr1.length; j++) {
            if(arr2[i] < arr1[0]) {
                for(var k=arr1.length-1; k>j-1; k--) {
                    arr1[k+1] = arr1[k];
                }
                arr1[0] = arr2[i];
            }
            else if(arr2[i] < arr1[j] && arr2[i]>= arr1[j-1]){
                for(var k=arr1.length-1; k>j; k--) {
                    arr1[k+1] = arr1[k];
                }
                arr1[j] = arr2[i];
            }
        }
    }
    console.log(arr1);
    return arr1;
}
combine([1,3,4,6], [2,5,7])