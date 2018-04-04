// pg 52 String: Is Palindrome
function palindrome(str) {
    for(var x = 0; x<=(str.length-1)/2; x++) {
        if (str[x] !== str[str.length-x-1]) {
            return false;
        }
        else {
            if (x === (str.length-1)/2 && str[x] === str[str.length-x-1]){
                return true;
            }
            else {
                continue;
            }
        }
    }
}
palindrome("tacocat")
palindrome("tacocat!")
