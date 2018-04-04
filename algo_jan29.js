// pushFront & popFront (pg38), reverseArray (pg40)


function pushFront(arr, num) { //didn't work
    for (var i=0; i<arr.length; i++) {
        var temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
    arr[0]=num;
    return arr;
}
pushFront([1,2,3,4,5],22);

function popFront(arr) { //didn't work
    var temp = arr[0];
    for (var i=0; i<arr.length; i++) {
        arr[i]=arr[i+1];
        arr.length--;
    }
    return arr;
}
console.log(temp);
popFront([1,2,3,4,5])

function reverse(arr) {
	for(var i = 0; i<arr.length; i++) {
		if(i > (arr.length-1)/2) { //for when the first half of values have already been replaced
			break;
		}
		else {
			var temp = arr[i]
			arr[i] = arr[arr.length-1-i]; 
			arr[arr.length-1-i] = temp;
		}
	}
	return arr;
}
reverse([1,2,3,4,5]);

//other group's reverse array
function reversearray(arr) {
	for(var x = 0; x<(arr.length-1)-x; x++) {
        var temp = arr[x]
        arr[x] = arr[arr.length-1-x]; 
        arr[arr.length-1-x] = temp;
	}
	return arr;
}
reversearray([1,2,3,4,5]);