// pg 158 Tries: Next, AutoComplete
function Node(val) {
    this.val = val;
    this.nodes = [];
    this.dictword = false; //is node.val string a real word? true or false
}
function Trie() {
    this.root = new Node("");
    this.traverse =(node, cb)=> {
        cb(node);
        for(let i=0; i<node.nodeslength; i++) {
            cb(node.nodes[i]);
            traverse(nodes.nodes[i]);
        }
    }
    this.contains = function(str) {
        traverse(this.root, (node)=> {
            if(node.val == str) {
                let istrue = true;
                return istrue;
            }
        })
        if(istrue) return true;
        else return false;
    }
    this.subsequent =(val)=> {
        traverse(this.root, (nodex)=> {
            if(nodex.val == val) {
                return nodex;
            }
        })
        if(nodex) {
            return nodex.nodes[0];
        }
        else return null;
    }
    this.autocomplete=(str)=> {
        traverse(this.root, (nodex)=> {
            if(nodex.val == val) {
                return nodex;
            }
        })
        if(nodex) {
            return nodex.nodes;
        }
        else return null;
    }
}
