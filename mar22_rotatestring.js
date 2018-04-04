//pg 108 Rotate String 3/20
function rotate(str, num) {
    var orig = "";
    var shift = "";
    for(var x=0; x<str.length-num; x++) {
        orig += str[x];
    }
    shift = str.slice(x, str.length);
    return shift + orig;
}
rotate("Boris Godunov", 5)

//pg 108 ionIs Rot(Is Rotation) 3/20
function ionis(str1, str2) {
    if(str1.length == str2.length) {
        var testone = "";
        var testtwo = "";
        for(var x=0; x<str1.length; x++) {
            testone += str1[x] + str1[x+1];
            for(var y=0; y<str2.length; y++) {
                testtwo += str2[y] + str2[y+1];
                if(testone == testtwo) {
                    return true;        //INCOMPLETE
                }
            }
        }
    }
    else {return false;}
}
ionis("Boris Godunov", "dunovBoris Go")
ionis("Boris Godunov", "dunobVoris Go")

//pg 112 String Encode 3/21
function encode(str) {
    var newstr = "";
    var count =0;
    for(var x=0; x<str.length; x++) {
        if(str[x] == str[x+1]) {
            count++;
        }
        else {
            count ++;
            newstr += str[x] + count;
            count = 0;
        }
    }
    if(newstr.length == str.length) {
        return str;
    }
    else {return newstr;}
}
encode("aaaabbcddd")
encode("aabb")

//pg 112 String Decode 3/21
function decode(str) {
    var newstr = "";
    for(var x=1; x<str.length; x+=2) {
        var num = parseInt(str[x]);
        while(num >0) {
            newstr += str[x-1];
            num--;
        }
    }
    return newstr;
}
decode("a3b2c1d4")
