function Node(value) {
    this.value = value;
    this.next = null;
}

function SLL() {
    this.head = null;
    this.add = function(value) {
        if(this.head == null) {
            this.head = new Node(value);
        }
        else {
            var runner = this.head;
            while (runner.next) { 
                runner = runner.next; 
            }
            runner.next = new Node(value);
        }
        return this;
    }
    this.addfront = function(value) {
        if(this.head != null) {
            var temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }
        else {
            this.head = new Node(value);
        }
        return this;
    }
    this.removefront = function() {
        if(this.head != null) {
            this.head = this.head.next;
        }
        else {
            return null;
        }
        return this;
    }
    this.my_length  = function() {
        if(this.head !== null) {
            var runner = this.head;
            var count = 1;
            while(runner!= null) {
                runner = runner.next;
                counter += 1;
            }
            return counter;
        }
        return this;
    }
    this.contains = function(value) {
        var runner = this.head;
            if(runner.value === value) {
                console.log(true); // return true;
            }
            else {
                while(runner.next !== null) {
                    if(runner.next.value === value) {
                        console.log(true); // return true;
                    }
                    else {
                        runner = runner.next;
                    }
                }
                console.log(false); // return false;
            }
        return this;
    }
    this.removeVal = function(value) { //removes only first instance of val, not all instances
        var runner = this.head;
        if(this.head.value === value) {
            this.head ===this.head.next;
        }
        else {
            while(runner.next !== null) {
                if(runner.next.value === value) {
                    runner.next = runner.next.next;
                }
                runner = runner.next;
            }
        }
        return this;
    }
    this.minFront = function() {
        var min = this.head.value;
        var runner = this.head;
        while(runner !== null) {
            if (runner.value < min.value) {
                min = runner;
            }
            runner = runner.next;
        }
        while(runner.next !== min) {
            runner = runner.next;
        }
        runner.next = runner.next.next;
        var temp = this.head;
        this.head = min;
        this.head.next = temp;
        return this;
    }
    this.maxBack = function() {
        var max = this.head.value;
        var runner = this.head;
        while(runner.next !== null) {
            if (runner.next.value > max.value) {
                max = runner.next; 
            }
            runner = runner.next;
        }
        runner.next = max;
        runner = this.head;
        while(runner.next !== max) {
            runner = runner.next;
        }
        runner.next = runner.next.next;  
        return this;  
    }
}
var list1 = new SLL();
// list1.add(2).add(3).add(1).add(4).add(5).minFront();
list1.add(2).add(6).add(1).add(4).add(5).maxBack();
console.log(list1);
