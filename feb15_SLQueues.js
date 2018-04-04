function SLNode(val) {
    this.val = val;
    this.next = null;
}
// FIRST IN FIRST OUT
function SLQueue() {
    var head = null;
    var tail = null;
    this.enqueue = function(val) {
        if(head == null) {
            head = new SLNode(val);
            tail = head;
        }
        else {
            tail.next = new SLNode(val);
            tail = tail.next;
        }
        return this;
    }
    this.enqueueAlt = function(val) {
        var runner = this.head;
        while(runner.next != null) {
            runner = runner.next;
        }
        runner.val = new SLNode(val);
        runner.next = tail;
        return this;
    }
    this.dequeue = function() {
        if(head!=null) {
            var dequeueVal = head.val;
            head = head.next;
        }
        return dequeueVal;
    }
    this.front = function() {
        if(head !== null) {
            var front = head.val;
        }
        return front;
    }
    this.contains = function(val) {
        if(head !== null) {
            var runner
        }
    }
    this.isEmpty = function() {
        if(head == null) {
            return "This queue is empty"
        }
        else {
            return "This queue is not empty"
        }

    }
    this.compare = function(q1, q2) {
        if(q1.head != null && q2.head != null) {
            if(q1.length !== q2.length) {
                return false;
            }
            else {
                var run1 = q1.head;
                var run2 = q2.head;
                while(run1.next !== null) {
                    if(run1.val !== run2.val) {
                        return false;
                    }
                    run1 = run1.next;
                    run2 = run2.next;
                }
                if(run1 == tail && run2 == tail) {
                    return true;
                }
                else {
                    return false;
                }    
            } 
        }
        else {
            return false;
        }
    }
}

var q1 = new SLQueue();
q1.enqueue(3).enqueue(6).enqueue("Jackie").enqueue(8);
console.log(q1);
