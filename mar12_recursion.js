function loop(min, max) {
    if(min, max) {
        loop(min+1, max);
    }
}

// pg97 Recursive Sigma
function sigma(num) {
    if(num > 0) {
        return n + sigma(n-1);
    }
}

// pg97 Recursive Factorial 
function factorial(num, sum) {
    if(num > 0) {
        sum *= num;
        factorial(num-1, sum);
    }
    return sum;
}

// pg99 Recursive Fibonacci
function fibonacci(n) {
    if(n == 0 || n == 1) {
        return n;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}