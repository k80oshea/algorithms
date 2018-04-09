// pg127 Array: Quick Sort

// V1:: using partition ===> does not work!! starts replacing values in partition, since index passed is not at 0 anymore! and is not going left to right!
function partition(arr, index) {
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
    return arr; 
}
function v1QuickSort(arr, index) {
    while(arr[index] <= arr[index+1]) {
        index++;
    }
    while(arr[index] > arr[index+1] ) {
        console.log(arr);
        console.log(index);
        partition(arr, index);
        console.log("new array is"+arr);
        console.log(index);
        v1QuickSort(arr,index);
    }
    return arr;
}
v1QuickSort([5,4,9,2,5,3], 0)

// V2 :: using left and right pointers
function v2QuickSort(arr, index) { //unfinished....
    var pivot = arr[index];
    var left = 0;
    var right = arr.length;
    while(arr[left] < pivot) {
        left++; //want something bigger
    }
    while(arr[right] > pivot) {
        right--; //want something smaller
    }
    if(arr[left] != arr[right]) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        v2QuickSort(arr,index);        
    }
    else {
        var temp = arr[left];
        arr[left] = arr[index];
        arr[index] = temp;
        v2QuickSort(arr,left);
    }

    return arr;
}
v2QuickSort([5,4,9,2,5,3], 2)