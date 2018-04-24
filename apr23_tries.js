// pg 157 Tries: Insert
function Node(val) {
    this.val = val;
    this.nodes = [];
    this.real = real; //is node.val string a real word? true or false
}
function Trie() {
    this.root = "";
    this.insert = function(val) {
        var runner = this.root;
        function help(letterIndex, real) {
            for(let x = letter; x<val.length; x++) {
                if(this.runner.nodes.length > 0) {
                     for(let node in this.runner.nodes) {
                         for(let y=x; y<node.val.length; y++) {
                             if(val.charAt[x] == node.val.charAt[y]) {
                                 help(x+1, runner.node);
                             }
                         }
                     }
                }
                // else {

                // }
            }
            // return node;//runner??
            if(node.val == val) {
                return "already exists"
            }
            else if(val.length < node.val.length) {
                var temp = node;
                node = new Node(val);
                node.nodes.push(temp);
            }
            else {
                node.nodes.push(new Node(val));
            }        
        }
        help(0, runner)

    }
}
// pg 157 Tries: Contains
// pg 157 Tries: First
// pg 157 Tries: Last