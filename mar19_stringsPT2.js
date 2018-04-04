//pg 107 String to Word Array
function stw(str) {
    var word = "";
    var arr = [];
    for(var x=0; x<str.length; x++) {
        if(str[x] == " " || str[x] == "-" || str[x] == "." || str[x] == "?" || str[x] == "!") {
            arr.push(word);
            word = "";
        } 
        else {
            word += str[x];
            if(x == str.length - 1) {
                if(str[x] != "." || str[x] != "?" || str[x] != "!") {
                    arr.push(word);
                }
            }
        }
    }
    return arr;
}
stw("Life is not a drill!")

//pg 107 Longest Word
function longest(str) {
    var temp = "";
    var word = "";
    var count = 0;
    var arr = [];
    for(var x=0; x<str.length; x++) {
        if(str[x] != " ") {
            temp += str[x];
            count ++;
            if(count > word.length) {
                word = temp;
            }
        }
        else {
            temp = "";
            count = 0;
        }
    }
    return word;
}
longest("meow pillow hungry yellow green")