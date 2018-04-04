// pg 85 Max Subarray Sum
function MaxSub(arr) {
    var tempsum = 0;
    var sum = 0;
    for(var x=0; x<arr.length; x++) {
        tempsum = 0;
        for(var y=x; x<arr.length; y++) {
            tempsum += arr[y];
            if(tempsum > sum) {
                sum = tempsum;
            }
        }
    }
    return sum;
}
MaxSub([1, 2, -4, 3, -2, 3, -1])