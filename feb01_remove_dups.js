//pg 38 Remove Duplicates

//My Group: Key, Gabe, Katie
function removeDuplicates(names) { 
    var arrnew=[];
    for (var i=0; i<names.length-1; i++) {
        if(names[i] !== names[i+1]) {
            arrnew[arrnew.length]=names[i];
        }
    }
    arrnew[arrnew.length] = names[names.length-1];
    names = arrnew;
    return names;
}
removeDuplicates(['Amy', 'Brenda', 'Brenda', 'Caroline', 'Caroline', 'Caroline', 'Zelda'])

function removeDups(arr) { //doesnt work
    for (var i=0; i<arr.length-1; i++) {
        for(var x=i; x<arr.length-1; x++) {
            while(arr[x]==arr[x+1]) {
                arr[x]=arr[x+1];
            }
            arr.length--;
        }
    }
    return arr;
}
removeDups([1,1,1,2,3,3,4,5])



//Other Groups

function removeDup(arr) { 
    var arrnew=[];
    for (var i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            arrnew[arrnew.length]=arr[i];
        }
    }
    arr = arrnew;
    return arr;
}
removeDuplicates(['Amy', 'Brenda', 'Brenda', 'Caroline', 'Caroline', 'Caroline', 'Zelda'])

function RD(arr) { //console freezes, but no errors...
    for (var x=0; x<arr.length-1; x++) {
        if(arr[x] == arr[x+1]) {
            for(var i=x; i<arr.length-1; i++) {
                arr[i]=arr[i+1];
            }
            arr.length--;
        }
        x--;
    }
    return arr;
}
RD([1,1,1,2,3,3,4,5])

function RemDup(arr) {
    for (var x=arr.length; x>0; x--) {
        if(arr[x] == arr[x-1]) {
            for(var y=x; y<arr.length-1; y++) {
                arr[y]=arr[y+1];
            }
            arr.length--;
        }
    }
    return arr;
}
RemDup([1,1,1,2,3,3,4,5])
