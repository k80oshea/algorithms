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
            while (runner.next) { //js considers all things not null as truthey==> like saying while(runner.next !== null)
                runner = runner.next; //this is the increment, similar to i++
            }
            runner.next = new Node(value);
        }
        return this;
    }
    //more methods to come!
    this.printAsArray = function() {
        var arr = [];
        var runner = this.head;
        while(runner) { 
            arr.push(runner.val);
            runner = runner.next; 
        }
        console.log(arr);
    }
    this.printAsArrayV2 = function() {
        var arr = [];
        var runner = this.head;
        while(runner.next) { //does not get to the very end of the list
            arr.push(runner.val);
            runner = runner.next; 
        }
        arr.push(runner.val); // so must be printed here
        console.log(arr);
    }

}

var list1 = new SLL();
list1.add(1).add(2).add(3).printAsArray();
// console.log(list1);
// list1.printAsArray();