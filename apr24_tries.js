// pg 157 Tries: Insert
class TrieNode {
    constructor(val) {
        this.val = val;
        this.nodes = [];
        this.temp = false; //is node.val string a real word? true or false
    }
}
class TrieSet {
    constructor() {
        this.root=new TrieNode("");
    }
    insert(str) {
        let ptr = this.root;
        let s = "";
        traverse(ptr);
        function traverse(node) {
            for(let i=0; i<str.length; i++){
                s+=str[i];
                if(node.nodes.length > 0) {
                    for(let n in node.nodes) {
                        if(n.val == s) {
                            traverse(node.nodes[n]);
                        }
                    }
                }
                else {
                    let incrLetter = new TrieNode(s)
                    node.nodes.push(incrLetter);
                    if(s.length == str.length) {
                        incrLetter.temp = true;
                        break;
                    }
                    traverse(node.nodes[nonde.nodes.length-1]);
                }
            }
        }
    }
}
let trie1 = new TrieSet();
trie1.insert("hello").insert("ant").insert("other").insert("a");