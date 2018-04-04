function Node(value) {
    this.value = value;
    this.next = null;
    this.child = null;
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
            this.tail = runner.next
        }
        return this;
    }
    this.kth = function(k) { // pg 90 SList: Kth-Last Node
        
        var runner = this.head;
        var count = 0;
        while(runner.next != null) {
            runner = runner.next;
            count += 1;
        }
        if(k>count) {
            return "There aren't that many nodes in the list!";
        }
        else {
            runner = this.head;
            for(var x=0; x<count-k; x++) {
                runner = runner.next;
            }
            return runner;
        }
    }
    this.flattenchildren = function() {
        while(runner.next != null) {
            var temp = runner.next;
            runner.next = runner.child;
            runner.child.next = temp;
            runner = runner.next.next;
        }
        if(runner.next == null) {
            runner.next = runner.child;
        }
        return this;
    }
}
var list1 = new SLL();
list1.add(2).add(6).add(3).add(1).add(5);
console.log(list1.kth(4));
// console.log(list1.flattenchildren()); **can't test without instantiating children!!