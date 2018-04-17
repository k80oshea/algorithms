// pg 140 Heap: Insert
function Node(val) {
    this.val = val;
}
function Heap() {
    // act like queues
    // manage data like trees
    // stored in arrays
    this.data = [0];
    var N = this.data.length;    
    this.insert = function(val) {
        this.data[N] = new Node(val);
        function restructure(this.data, N) { //always adds to index[arr.length]
            let temp = this.data[N];
            this.data[N] = this.data[N/2];
            this.data[N/2] = temp;
            N = N/2;
            return {this.data, N};
        }
        while(this.data[N/2] > this.data[N]) {
            restructure(this.data, N);
        }
        return this;
    }
    this.extract = function() { //always takes from index 1
        var extracted = this.data[1];
        console.log("You are extracting "+ extracted);
        this.data[1] = this.data[N-1];
        this.data[N-1] = extracted;
        this.data.pop();
        var B = 1;
        function restructure2(this.data, B) {
            let temp = this.data[B];
            this.data[B] = this.data[2*B];
            this.data[2*B] = temp;
            B = 2*B;
            return {this.data, B};
        }
        while(this.data[B] > this.data[2*B]) {
            restructure2(this.data, B);
        }
        return this;
    }
}