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
}
var list1 = new SLL();
list1.add(1).add(2).add(3).addfront(4).removefront();
console.log(list1);
