//     function fibonacci(num) { //Katie(me!), Jifhan, Doug
//         var arr = [];
//         var fibseq;
//         for(var y=0; y<=num; y++){
//             if(y=0) {
//                 arr[y]=0;
//             }
//             else if(y=1) {
//                 arr[y]=1;
//             }
//             else {
//                 arr[y] = arry[y-1] + arr[y-2];
//             }
//             fibseq = arr[y];
//         }
//         return fibseq;
//     }
// fibonacci()

function fibonacci2(n) { //Brian & Sal
    var arr = [0,1];
    for(var x=2; x<=n; x++){
            arr[x] = arr[x-1] + arr[x-2];
    }
    return arr[n];
}
console.log(fibonacci2(6));

// function fibonacci3(num) { //Dan
//     var arr = [0,1];
//     for( var i=2; i<=num; i++) {
//         arr[i%3] = arr[(i-1)%3] - arr[(i-2)%3];
//     }
//     console.log(arr[num%3]);
//     return arr[num%3];
// }
// fibonacci3(6)