// Option 1 Parens Valid (pg52)
function parensValid(str) {
    var open = [];
    var closed =[];
    var count = 0;
    for(var i=0; i<str.length; i++) {
        if(str[i] == '(') {
            open.push(i);
        }
        if(str[i] == ')') {
            closed.push(i);
        }
    }
    if(open.length == closed.length) {
        for(var x=0; x<open.length; x++) {
            if(open[x]>closed[x]) {
                count ++
            }
        }
        if(count > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
parensValid("(Ye(ppe))rs")
parensValid(")No(pe)(")


// Option 2 Parens Valid (pg52)
function pVal(str) {
    var opencount = 0;
    var closecount = 0;
    for(var i=0; i<str.length; i++) {
        if(closecount>opencount) {
            return false;
        }
        else {
            if(str[i] == '(') {
                opencount++;
            }
            if(str[i] == ')') {
                closecount++;
            }
        }
    }
    if (closecount == opencount) {
        return true;
    }
    else {
        return false;
    }
}
pVal("(Ye(ppe))rs") 
pVal(")No(pe)(")

// Braces Valid (pg52) //not working yet!
function parentheses(str) {
    var count = 0;
    for(var i=0; i<str.length; i++) {
        if(count>1 || count<0) {
            return false;
        }
        else {
            if(str[i] === '(') {
                count++;
            }
            if(str[i] === ')') {
                count--;
            }
        }
    }
    if (count === 0) {
        return true;
    }
    else {
        return false;
    }
}
function brackets(str) {
    var count = 0;
    for(var i=0; i<str.length; i++) {
        if(count>1 || count<0) {
            return false;
        }
        else {
            if(str[i] === '[') {
                count++;
            }
            if(str[i] === ']') {
                count--;
            }
        }
    }
    if (count === 0) {
        return true;
    }
    else {
        return false;
    }
}
function curly(str) {
    var count = 0;
    for(var i=0; i<str.length; i++) {
        if(count>1 || count<0) {
            return false;
        }
        else {
            if(str[i] === '{') {
                count++;
            }
            if(str[i] === '}') {
                count--;
            }
        }
    }
    if (count === 0) {
        return true;
    }
    else {
        return false;
    }
}
function bracesValid (str) {
    var p = parentheses();
    var b = brackets();
    var c = curly();
    if(p==false || b==false || c==false) {
        return false;
    }
    else {
        return true;
    }
}
bracesValid("D(i{a}l[ t]o)n{e")
bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!")