// Find the stray number
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)
// Examples
    // [1, 1, 2] ==> 2
    // [17, 17, 3, 17, 17, 17, 17] ==> 3
function stray(numbers) {
    var numA = numbers[0];
    var numB;
    for (var x=0; x<numbers.length; x++) {
        if(numbers[x] != numbers[x+1]) {
            if(numbers[x] == numbers[x-1]) {
                return numbers[x+1];
            }
            else {
                return numbers[x];
            }
        }
    }
}

// Tribonacci Sequence
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified ;)
// Examples
    // Test.describe("Basic tests",function(){
    //     Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
    //     Test.assertSimilar(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
    //     Test.assertSimilar(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
    //     Test.assertSimilar(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
    //     Test.assertSimilar(tribonacci([1,1,1],1),[1])
    //     Test.assertSimilar(tribonacci([300,200,100],0),[])
    //     Test.assertSimilar(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
    // })
function tribonacci(signature,n){
    if(n <= 3) {
        if(n==0) {return [];}
        else if(n==1) {
            signature.pop();
            signature.pop();      
            return signature;
        }
        else if(n==3) {
            return signature;
        }
        else {
            signature.pop();
            return signature;
        }
    }
    while(signature.length < n) {
        signature[signature.length] = signature[signature.length-3] + signature[signature.length-2] + signature[signature.length-1]
    }
    return signature;
}

// Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
    // maskify("4556364607935616") == "############5616"
    // maskify(     "64607935616") ==      "#######5616"
    // maskify(               "1") ==                "1"
    // maskify(                "") ==                 ""
    // // "What was the name of your first pet?"
    // maskify("Skippy")                                   == "##ippy"
    // maskify("Nananananananananananananananana Batman!") == "####################################man!"
function maskify(cc) {
    if(cc.length < 4) {
        return cc;
    }
    else {
        var ccNew = "";
        for(var x=0; x<cc.length-4; x++) {
            ccNew += "#";
        }
        ccNew += cc.slice(cc.length-4);
        return ccNew;
    }
}
      