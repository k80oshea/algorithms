// pg 85 Matrix Search
function matrix(arr1, arr2) {
    for(var x=0; x<arr1.length; x++) {
        for(var y=0; y<arr1[x].length; y++) {
            if(arr1[x][y] == arr2[0][0]) {
                for(var j=0; j<arr2.length; j++) {
                    for(var k=0; k<arr2[j].length; k++) {
                        if(arr1[x+j][y+k] != arr2[j][k]) {
                            break;
                        }
                        if(k == arr2[j].length-1 && j == arr2.length-1) {
                            return true;
                        }
                    }
                }
                return true;
            }
        }
    }
    return false;
}
matrix([[12,34,45,56], [98,87,76,65], [56,67,78,89],[54,43,32,21]], [[67,78],[43,32]])

// pg 85 Matrix Search V2
function matrixsearch(arr1, arr2) {
    for(var x=0; x<arr1.length; x++) {
        for(var y=0; y<arr1[x].length; y++) {
            if(arr1[x][y] == arr2[0][0]) {
                for(var j=0; j<arr2.length; j++) {
                    for(var k=0; k<arr2[j].length; k++) {
                        if(arr1[x+j][y+k] != arr2[j][k]) {
                            break;
                        }
                        if(k == arr2[j].length-1 && j == arr2.length-1) {
                            return console.log([x,y]);
                        }
                    }
                }
            }
        }
    }
    return console.log([-1,-1]);
}
matrixsearch([[12,67,45,56], [98,87,76,65], [56,67,78,89],[54,43,32,21]], [[67,78],[43,32]])