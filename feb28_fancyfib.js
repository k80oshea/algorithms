// pg 83 Fancy Fibonacci and Tricky Tribonacci

function fancyFibonacci(num) {
    var fib = [];
    for(var x = 0; x <= num; x++) {
        if(x<2) {
            fib.push(x);
        }
        else {
            var temp = fib[0];
            fib[0] = fib[1];
            fib[1] = fib[0] + temp;
        }
    }
    return fib[1];
}
fancyFibonacci(9)
fancyFibonacci(3)
fancyFibonacci(21)
fancyFibonacci(63)

function Tribonacci(num) {
    var fib = [0];
    for(var x = 0; x <= num; x++) {
        if(x<3) {
            fib.push(x);
        }
        else {
            var temp = fib[0];
            fib[0] = fib[1];
            fib[1] = fib[2];
            fib[2] = fib[1] + fib[0] + temp;
        }
    }
    return fib[2];
}
Tribonacci(3)
Tribonacci(9)
Tribonacci(21)
Tribonacci(63)