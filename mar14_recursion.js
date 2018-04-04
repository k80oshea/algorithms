// pg 101 In Order Substrings

function iosubs(str) {
    var length = str.length;
    var arr = [""];
    var x = 0;
    var y = 0;
    var j = 0;
    while(x<length) {
        while(y<length) {
            while(j<length) {
                arr.push(str.slice(x,y) + str.slice(j, length));
                j++;
            }
            y++;
            j=y;
        }
        x++;
        y = x;
    }
    return arr;
}
iosubs("cat")
// iosubs("never")

//so close! yet so far :[[[[[[