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
    this.hasLoop = function() { // pg92 SList: Has Loop
        var runner1 = this.head;
        var runner2 = this.head;
        while(runner1.next != null) {
            while(runner2.next != runner1) {
                if(runner1.next == runner2) {
                    return "Loop! Found at "+runner1;
                }
                runner2 = runner2.next;
            }
            runner1 = runner1.next;
        }
    }
}
var list1 = new SLL();
list1.add(2).add(6).add(3).add(1).add(5);
console.log(list1.hasLoop());
