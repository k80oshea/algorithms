// pg95 Doubly Linked Lists: Palindrome, Prepend
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
    this.size = function() {
        var len = 0;
        var runner = this.head;
        while(runner != null) {
            runner = runner.next;
            len ++;
        }
        return len;
    }
    this.palindrome = function() {
        var runner1 = this.head;
        var runner2 = this.tail;        
        if(this.size() > 2) {
            while(runner1.next != runner2.prev) {
                if(runner1.val != runner2.val) {
                    return false;
                }
                runner1 = runner1.next;
                runner2 = runner2.prev;
            }
            return true;
        }
        else if(this.size() == 2) {
            if(runner1.val == runner2.val) {
                return true;
            }
            else {
                return false;
            }
        }
        else{
            return true;
        }
    }
}