// pg40 Rotate Array

function rotate(arr, shiftBy) {
    if(shiftBy<0) {
        shiftBy = shiftBy *(-1); rotateL()
    }
    else {
        for(var y = 0; y<shiftBy; y++) {
            var temp = arr[arr.length-1];
            for(var x=arr.length-2; x>+0; x--) {
                arr[x+1]=arr[x];
            }
            arr[0] = temp;
        }
    }
    return arr;
}
rotate([1,2,3,4,5,6,], 4)

function rotateL (arr, shiftBy) {
    for(var y = 0; y<shiftBy; y++) {
        var temp = arr[0];
        for(var x=0; x<arr.length-1; x++) {
            arr[x]=arr[x+1];
        }
        arr[arr.length-1] = temp;
    }
    return arr;
}
rotateL()

// :/ not working as I typed it, but worked in the algo demonstration!!