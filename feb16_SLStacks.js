function SLNode(val) {
    this.val = val;
    this.next = null;
}
// Stacks function like arrays!
function SLStackArray() {
    var arr = [];
    this.arrstck_push = function(val) {
        arr = arr.push(val);
        return arr;
    }
    this.arrstck_pop = function() {
        arr = arr.pop();
        return arr;
    }
    this.arrstck_top = function() {
        var top = arr[arr.length-1];
        return top;
    }
    this.arrstck_contains = function(val) {
        var count = 0;
        for(var x=0; x<arr.length; x++) {
            if(arr[x] == val) {
                count++;
            }
        }
        if(count > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    this.arstck_isEmpty = function() {
        if(arr.length < 1) {
            return "Array Stack is empty"
        }
        else {
            return "Array stack is populated"
        }
    }
    this.arrstck_size = function() {
        return arr.length;
}

var arr1 = new SLStackArray();
arr1.arrstck_push(3).arrstck_push(6).arrstck_push(12).arrstck_push(8);
console.log(arr1);

// LAST IN FIRST OUT
function SLStack() {
    var bottom = null;
    var top = null;
    this.push = function(val) {
        if(bottom == null) {
            bottom = new SLNode(val);
            top = bottom;
        }
        else {
            top.next = new SLNode(val);
            top = top.next;
        }
        return this;
    }
    this.pop = function() {
        var pop = top.val;
        if(top == null) {
            return "Stack is empty"
        }
        else if(bottom == top) {
            bottom = null;
            return pop;
        }
        else {
            var runner = bottom;
            while(runner.next.next != null) {
                runner = runner.next;
            }
            top = runner;
            return pop;
        }
    }
    this.top = function() {
        return top;
    }
}
var stack1 = new SLStack();
stack1.push(3).push(6).push(12).push(8);
console.log(stack1);
