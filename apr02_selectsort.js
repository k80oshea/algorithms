//pg 125 Array: Select Sort
function select(arr) {
    for(var x=0; x<arr.length; x++) {
        for (var y=x+1; y<arr.length; y++) {
            if(arr[x] > arr[y]) {
                temp = arr[y];
                arr[y] = arr[x];
                arr[x] = temp;
            }
        }
    }
    return arr;
}
select([4,3,6,5,2,7,1])

//pg 125 SL: Sellect Sort
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
    this.select = function() {
        var runner = this.head;
        var run2 = runner.next;
        while(runner != null) {
            while(run2 != null) {
                if(runner.val > run2.val) {
                    temp = run2.val;
                    run2.val = runner.val;
                    runner.val = temp;
                }
                run2 = run2.next;
            }
            runner = runner.next;
        }
        return this;
    }
}
var list1 = new SLL();
list1.add(4).add(3).add(6).add(5).add(2).add(7).add(1);
console.log(list1);
list1.select();
console.log(list1);