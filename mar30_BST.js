//pg121 BST:Add without Dupes & BST:Val Before & BST:Val After
function LeafNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
function Tree(val) {
    this.root = new LeafNode(val);
    let self = this;
    this.add =function(val) { 
        var runner = this.root;
        while(runner != null) {
            if(val == runner.val) {
                return "This is a duplicate value";
            }
            else if(val < runner.val) {
                if(runner.left == null) {
                    runner.left = new LeafNode(val);
                }
                else {
                    runner = runner.left;
                }
            }
            else {
                if(runner.right == null) {
                    runner.right = new LeafNode(val);
                }
                else {
                    runner = runner.right;
                }
            }
        }
        console.log(self);
        return self;
    }
    this.valBefore = function(val) {
        var runner = this.root;
        var less = this.root.val;
        function help(node) {
            if(runner.left != null) {
                if(val < runner.left.val) {
                    if(runner.left.val > less) {
                        less = runner.left.val;
                    }
                    runner = runner.left;
                }
                else { help(runner.right); }
            }
            else if(runner.right != null) {
                if(val < runner.right.val) {
                    if(runner.right.val > less) {
                        less = runner.right.val;
                    }
                    runner = runner.right;
                }
                else { help(runner.left); }
            }
        }
        help(runner);
    }   
}

var tree1 = new Tree(10);
tree1.add(5);
tree1.add(15);
tree1.add(11);
tree1.add(20);
tree1.add(12);
console.log(tree1);