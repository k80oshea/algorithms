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
            this.tail = runner.next
        }
        return this;
    }
    this.my_length  = function() {
        if(this.head !== null) {
            var runner = this.head;
            var count = 1;
            while(runner!= null) {
                runner = runner.next;
                count += 1;
            }
            return count;
        }
        return this;
    }
    this.reverseMe = function() { // pg 90 SList: Reverse
        var runner2 = this.tail;
        var head2 = runner2;
        while (my_length() > 0) {
            console.log(mylength());
            var runner = this.head;
            while (runner.next.next != null){
                runner = runner.next;
            }
            var prev = runner;
            var tail2 = this.tail;
            this.tail = runner;
            runner2.next = prev;
        }
        this.head = head2;
        // console.log(this.tail);
        // console.log(prev);
        // console.log(tail2);
        // console.log(runner2);
        return this;
    }
}
var list1 = new SLL();
list1.add(2).add(6).add(3).add(1).add(5).reverseMe();
console.log(list1);