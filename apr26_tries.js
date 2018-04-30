// pg 157 Tries: (Insert), Remove, Size
function Node(val) {
    this.val = val;
    this.nodes = [];
    this.dictword = false; //is node.val string a real word? true or false
}
function Trie() {
    this.root = new Node("");
    this.insert = function(str) {
        let ptr = this.root;
        let s = "";
        let count = 0;
        help(ptr);
        function help(node) {
            for(let i=count; i<str.length; i++){
                s+=str[i];
                count ++;
                if(node.nodes.length > 0) {
                    for(let n in node.nodes) {
                        if(node.nodes[n].val[0] == s[0]) {
                            if(node.nodes[n].val == s) {
                                node.nodes[n].dictword = true;
                                break;
                            }
                            else {
                                if(node.nodes[n].val[i] != s[i]) {
                                    let incrLetter = new Node(s);                                        
                                    node.nodes.push(incrLetter);
                                    help(incrLetter);
                                }
                                else {
                                    help(node.nodes[n]);
                                }
                            }
                        }
                    
                        //     else {
                        //         for(let x in s) {                                
                        //             if(node.nodes[n].val[x] != s[x]) {
                        //                 let incrLetter = new Node(s);                                        
                        //                 node.nodes.push(incrLetter);
                        //                 help(incrLetter);                                                                     
                        //             }
                        //         }
                        //         help(node.nodes[n]);
                        //     }
                        // }
                    }
                    let incrLetter = new Node(s);
                    node.nodes.push(incrLetter);
                    help(node.nodes[node.nodes.length-1]);
                }
                else {
                    let incrLetter = new Node(s);
                    node.nodes.push(incrLetter);
                    if(s.length == str.length) {
                        incrLetter.dictword = true;
                        break;
                    }
                    help(node.nodes[node.nodes.length-1]);
                }
            } 
        }
        return this;
    }
}
let trie1 = new Trie();
// trie1.insert("hello").insert("ant").insert("other").insert("a").insert("he");
trie1.insert("hello").insert("he").insert("hell");
// trie1.insert("hello");
// trie1.insert("ant");
// trie1.insert("other");
// trie1.insert("a");
// trie1.insert("he");

console.log(trie1); 
// console.log(trie1.root); 
// console.log(trie1.root.nodes);  
// for(let node in trie1.root.nodes) {
//     console.log(trie1.root.nodes[node]);
// }