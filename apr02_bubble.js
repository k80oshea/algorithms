//pg 125 Array: Bubble Sort
function bubble(arr) {
    for(var x=0; x<arr.length; x++) {
        for (var y=1; y<(arr.length-x); y++) {
            if(arr[y-1] > arr[y]) {
                temp = arr[y-1];
                arr[y-1] = arr[y];
                arr[y] = temp;
            }
            x--;
        }
    }
    return arr;
}
bubble([4,3,6,5,2,7,1])