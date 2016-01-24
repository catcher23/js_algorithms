function Trie () {
  this.root = new Node();

  this.insert = function(word) {
    var current = this.root,
    i;
    for (i = 0; i < word.length; i++) {
        if (current.children[word[i]] === undefined) {
          current.children[word[i]] = new Node(word[i]);
          current = current.children[word[i]];
        }
    }
    current.isTerminal = true;
  };
}

function Node (letter) {
  this.letter =  letter;
  this.isTerminal = false;
  this.children = {};
}

var trie = new Trie();
trie.insert('alakazam');
console.log(trie.root.children);
