function Trie () {
  this.root = new Node();
  var current = this.root;

  this.insert = function(word) {
    var i;
    current = this.root;
    for (i = 0; i < word.length; i++) {
        if (current.children[word[i]] === undefined) {
          current.children[word[i]] = new Node(word[i]);
        }
        current = current.children[word[i]];
    }
    current.isTerminal = true;
  };

  this.contains = function(word) {
    current = this.root;
    for (i = 0; i < word.length; i++) {
        if (current.children[word[i]] === undefined) {
          return false;
        }
        current = current.children[word[i]];
    }
    return true;
  };

  this.getPrefixes = function(word) {
    var prefix = '';
    var prefixes = {};
    current = this.root;
    for (i = 0; i < word.length; i++) {
        if (current.children[word[i]] === undefined) {
          return prefixes;
        }
        current = current.children[word[i]];
        prefix += word[i];
        if (current.isTerminal) {
          prefixes[prefix] = 1;
        }
    }
    return prefixes;
  };
}

function Node (letter) {
  this.letter =  letter;
  this.isTerminal = false;
  this.children = {};
}

function largestConcat(dictionary) {
  var trie = new Trie();
  var reader = new FileReader();
  var concats = [];
}

var trie = new Trie();
trie.insert('ala');
trie.insert('alaka');
trie.insert('alakazam');
console.log(trie.contains('alakazam'));
console.log(trie.getPrefixes('alakazam'));
console.log(largestConcat());
