//pg117 BST:Add & BST:Contains
function LeafNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
function Tree(val) {
    this.root = new LeafNode(val);
    this.add =(val)=> { //arrow function
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
        return this;
    }
    this.alternateAdd =(val)=> { //with recursion
        var ptr = this.root;
        function help(node) {
            if(node.left != null && node.left.val < val) {
                help(node.left);
            }
            else if(node.right != null && node.right.val > val) {
                help(node.right);
            }
            if(node.left == null && val < node.val) {
                this.left = new LeafNode(val);
            }
            else if(node.right == null && val < node.val) {
                this.right = new LeafNode(val);
            }
            return this;
        }
        help(ptr);
    }
    this.contains =(val)=> { //with recursion
        var ptr = this.root;
        function helpc(node) {
            if(node.val != val) {
                if(node.left != null) {
                    if(node.left.val != val && node.left.val < val) {
                        helpc(node.left);
                    }
                    else if(node.right.val != val && node.right.val > val) {
                        helpc(node.right);
                    }
                    else {
                        return true;
                    }
                }
                else if(node.right != null) {
                    if(node.left.val != val && node.left.val < val) {
                        helpc(node.left);
                    }
                    else if(node.right.val != val && node.right.val > val) {
                        helpc(node.right);
                    }
                    else {
                        return true;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
        helpc(ptr);
    }
}