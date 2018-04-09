// pg127 Array: Partition
function partition(arr, index) {
    // var pivot = arr[index]; //this is the pivot value from given index
    var piv = index; 
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < arr[piv]) {
            var temp = arr[i];
            for(var j=i; j>piv; j--) {
                arr[j] = arr[j-1];
            }
            arr[piv] = temp;
            piv++;
        }
    }
    console.log(arr);
    return arr[index]; //return new value at original index of pivot
}
partition([5,4,9,2,5,3], 0)