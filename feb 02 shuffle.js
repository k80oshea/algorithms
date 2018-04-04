function shuff(arr){
    for(var i = 0; i<arr.length; i++){
        var temp = arr(i);
        var index = math.trunc(math.random()*arr.length);
        arr [i] = arr[index];
        arr[index] = temp;
        console.log(arr);
    }
}