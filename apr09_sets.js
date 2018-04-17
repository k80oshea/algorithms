//pg 135 InterLeave Arrays
//works
function helper(arr, x) {
    for(var i=arr.length; i>x; i--) {
        arr[i] = arr[i-1];
    }
    return arr;
}
function interleave(arr1, arr2) {
    if(arr1.length >= arr2.length) {
        var y = 0;
        for(var x=0; x<arr2.length; x++) {
            helper(arr1, y);
            arr1[y] = arr2[x];
            y+=2;
        }
        return arr1;    
    }
    else if(arr1.length < arr2.length) {
        var y = 0;
        for(var x=0; x<arr1.length; x++) {
            helper(arr2, y);
            arr2[y] = arr1[x];
            y+=2;
        }
        return arr2;    
    }
}
interleave([77,22,11,22], [2,6,7,2,6,2])
//should return unsorted multiset array: [77, 2, 22, 6, 11, 7, 22, 2, 6, 2]

//pg 135 Merge Sorted Arrays
//not quite working, won't let x decrement line 57 --> infinite loop
function helper(arr, x) {
    for(var i=arr.length; i>x; i--) {
        arr[i] = arr[i-1];
    }
    return arr;
}
function mergSort(arr1, arr2) {
    if(arr1.length >= arr2.length) {
        var y = 0;
        for(var x=0; x<arr2.length; x++) {
            if(arr2[x] <= arr1[y]) {
                helper(arr1, y);
                arr1[y] = arr2[x];
                y+=2;
            }
            else { //if arr2[x] > arr1[y]
                if(arr2[x] <= arr1[y+1]){
                    helper(arr1, y);
                    arr1[y+1] = arr2[x];
                    y+=2;
                }
                else { //if arr2[x] > arr1[y+1]
                    y+=1; 
                    // x-=1; //for some reason breaks cuz 1000+ steps :(
                    // continue; 
                    // with no continue returns [1,2,2,2,2,2,6,7,7] 
                    //with continue returns     [1,2,2,2,2,2,6,6,7,7]
                }
            }
        }
        return arr1;    
    }
    else if(arr1.length < arr2.length) {
    //     var y = 0;
    //     for(var x=0; x<arr1.length; x++) {
    //         helper(arr2, y);
    //         arr2[y] = arr1[x];
    //         y+=2;
    //     }
        return arr2;    
    }
}
mergSort([1,2,2,2,7], [2,2,6,6,7])
// should return sorted multiset array: [1,2,2,2,2,2,6,6,7]


// function mergSort(arr1, arr2) {
//     if(arr1.length >= arr2.length) {
//         var y = 0;
//         for(var x=0; x<arr2.length; x++) {
//             if(arr2[x] <= arr1[y]) {
//                 helper(arr1, y);
//                 arr1[y] = arr2[x];
//                 y+=2;
//             }
//             else { //if arr2[x] > arr1[y]
//                 helper(arr1, y);
//                 arr1[y+1] = arr2[x];
//                 y+=2;
//             }
            
//         }
//         return arr1;    
//     }
//     else if(arr1.length < arr2.length) {
//         var y = 0;
//         for(var x=0; x<arr1.length; x++) {
//             helper(arr2, y);
//             arr2[y] = arr1[x];
//             y+=2;
//         }
//         return arr2;    
//     }
// }
// mergSort([1,2,2,2,7], [2,2,6,6,7])
//should return sorted multiset array: [1,2,2,2,2,2,6,6,7]
// returns [1,2,2,2,2,6,2,6,7,7]

//trying recursive...
// function mergSort(arr1, arr2,x ,y) {
//     if(arr1.length >= arr2.length) {
//       if(!x && !y) {
//         var x = 0;
//         var y = 0;
//         // for(var x=x; x<arr2.length; x++) {
//             if(arr2[x] <= arr1[y]) {
//                 helper(arr1, y);
//                 arr1[y] = arr2[x];
//                 y+=2;
//                 x++;
//             }
//             else { //if arr2[x] > arr1[y]
//                 if(arr2[x] <= arr1[y+1]){
//                     helper(arr1, y);
//                     arr1[y+1] = arr2[x];
//                     y+=2;
//                     x++;
//                 }
//                 else { //if arr2[x] > arr1[y+1]
//                     y+=1; 
//                     x-=1;
//                     // continue;
//                     mergeSort(arr1, arr2, x, y);
//                 }
//             }
            
//         }
//         return arr1;    
//     }
//     else if(arr1.length < arr2.length) {
//         var y = 0;
//         for(var x=0; x<arr1.length; x++) {
//             helper(arr2, y);
//             arr2[y] = arr1[x];
//             y+=2;
//         }
//         return arr2;    
//     }
// }
// mergSort([1,2,2,2,7], [2,2,6,6,7])
// should return sorted multiset array: [1,2,2,2,2,2,6,6,7]
// returns [1,2,2,2,2,7]
