//pg 51 String: Reverse

function reverseString (string) { //our group
    var arr = string.split ("");
    for(var x=0; x<(arr.length-1)-x; x++) {
        var temp = arr[x];
        arr[x] = arr[arr.length-1-x];
        arr[arr.length-1-x] = temp;
    }
    string = arr.join("");
    return string;
}
reverseString ("creature");

function revStr (str) {
    var sum = "";
    for(var i=str.length-1; i>=0; i--) {
        sum = sum + str[i];
    }
    return sum;
}
revStr("hello world");

//pg 51 Integer to Roman Numerals

function RomanNums (num) { //incomplete
    while(num<4000) {
        var M = num/1000;
        var sum = num%1000;
        var D = sum/500;
        sum = sum%500;
        var C = sum/100;
        sum = sum%100;
        var L = sum/50;
        sum = sum%50;
        var X = sum/10;
        sum = sum%10;
        var V = sum/5;
        sum = sum%5;
        var I = sum;
    }
    console.log("M"*M);
    if(D=4)
    console.log("CD")
}
RomanNums(3497)