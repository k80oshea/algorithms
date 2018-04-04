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
    this.contains = function(val) {
        var runner = this.head;
            if(runner.val === val) {
                console.log(true); // return true;
            }
            else {
                while(runner.next !== null) {
                    if(runner.next.val === val) {
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
    this.removeVal = function(val) { //removes only first instance of val, not all instances
        var runner = this.head;
        if(this.head.val === val) {
            this.head ===this.head.next;
        }
        else {
            while(runner.next !== null) {
                if(runner.next.val === val) {
                    runner.next = runner.next.next;
                }
                runner = runner.next;
            }
        }
        return this;
    }
}
var list1 = new SLL();
list1.add("John").add("Tad").add("Fredd").add("Katie").add("Scorpius").contains("Tad");

// list1.add("John").add("Tad").add("Fredd").add("Katie").add("Scorpius").removeVal("Tad");
console.log(list1);
