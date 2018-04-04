//pg117 BST:Remove & BST:Is Vali
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


}