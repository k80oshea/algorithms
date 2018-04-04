// pg95 Doubly Linked Lists :: Append, Delete Middle
function Node(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
}

function DLL() {
    this.head = null;
    this.tail = null;

    this.add = function() {
        if(this.head == null) {
            this.head = new Node(val);
        }
        else {
            var runner = this.head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = new Node(val);
            this.tail = runner.next;
            runner.next.prev = runner;
        }
    }
    this.append = function(newVal, existVal) {
        var runner = this.head;
        while(runner.val != existVal) {
            runner = runner.next;
        }
        var newbie = new Node(newVal) 
        newbie.next = runner.next;
        runner.next = newbie;
        newbie.prev = runner;
        newbie.next.prev = newbie;
    }
    this.deleteMid = function() {
        var runner1 = this.head;
        var runner2 = this.tail;
        while(runner1.next != runner2.prev) {
            if(runner1.next == runner2 || runner2.prev == runner1) {
                runner1.next = runner1.next.next;
                runner1.next.prev = runner1;
            }
            runner1 = runner1.next;
            runner2 = runner2.prev;
        }
        runner1.next = runner2;
        runner2.prev = runner1;
    }
}