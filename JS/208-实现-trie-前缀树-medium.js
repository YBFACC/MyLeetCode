/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

//参考--前缀树多实现

var TrieNode = function () {
  this.next = {}
  this.isEnd = false
}
/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode()
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (!word) return

  let node = this.root
  for (let i = 0; i < word.length; i++) {
    if (!node.next[word[i]]) {
      node.next[word[i]] = new TrieNode()
    }
    node = node.next[word[i]]
  }
  node.isEnd = true
  return
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (!word) return false
  let node = this.root

  for (let i = 0; i < word.length; i++) {
    if (node.next[word[i]]) {
      node = node.next[word[i]]
    } else {
      return false
    }
  }
  return node.isEnd
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (!prefix) return true
  let node = this.root

  for (let i = 0; i < prefix.length; i++) {
    if (node.next[prefix[i]]) {
      node = node.next[prefix[i]]
    } else {
      return false
    }
  }
  return true
}

var obj = new Trie()
obj.insert('abcdefg')
var param_2 = obj.search('abcdefg')
var param_3 = obj.startsWith('abcd')

// @lc code=end



// by 司徒正美
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  isValid(str) {
    return /^[a-z1-9]+$/i.test(str);
  }
  insert(word) {
    // addWord
    if (this.isValid(word)) {
      var cur = this.root;
      for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        c -= 48; //减少”0“的charCode
        var node = cur.edges[c];
        if (node == null) {
          var node = (cur.edges[c] = new TrieNode());
          node.value = word.charAt(i);
          node.numPass = 1; //有N个字符串经过它
        } else {
          node.numPass++;
        }
        cur = node;
      }
      cur.isEnd = true; //樯记有字符串到此节点已经结束
      cur.numEnd++; //这个字符串重复次数

      return true;
    } else {
      return false;
    }
  }
  remove(word){
      if (this.isValid(word)) {
          var cur = this.root;
          var array = [], n = word.length
          for (var i = 0; i < n; i++) {
              var c = word.charCodeAt(i);
              c = this.getIndex(c)
              var node = cur.edges[c];
              if(node){
                  array.push(node)
                  cur = node
              }else{
                  return false
              }
  
          }
          if(array.length === n){
              array.forEach(function(){
                  el.numPass--
              })
              cur.numEnd --
              if( cur.numEnd == 0){
                  cur.isEnd = false
              } 
          }
      }else{
          return false
      }
  }
  preTraversal(cb){//先序遍历
        function preTraversalImpl(root, str, cb){  
            cb(root, str);
            for(let i = 0,n = root.edges.length; i < n; i ++){
                let node = root.edges[i];
                if(node){
                    preTraversalImpl(node, str + node.value, cb);
                }
            }
        }  
        preTraversalImpl(this.root, "", cb);
   }
  // 在字典树中查找是否存在某字符串为前缀开头的字符串(包括前缀字符串本身)
  isContainPrefix(word) {
    if (this.isValid(word)) {
      var cur = this.root;
      for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        c -= 48; //减少”0“的charCode
        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
  isContainWord(str) {
    // 在字典树中查找是否存在某字符串(不为前缀)
    if (this.isValid(word)) {
      var cur = this.root;
      for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        c -= 48; //减少”0“的charCode
        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return false;
        }
      }
      return cur.isEnd;
    } else {
      return false;
    }
  }
  countPrefix(word) {
    // 统计以指定字符串为前缀的字符串数量
    if (this.isValid(word)) {
      var cur = this.root;
      for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        c -= 48; //减少”0“的charCode
        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return 0;
        }
      }
      return cur.numPass;
    } else {
      return 0;
    }
  }
  countWord(word) {
    // 统计某字符串出现的次数方法
    if (this.isValid(word)) {
      var cur = this.root;
      for (var i = 0; i < word.length; i++) {
        var c = word.charCodeAt(i);
        c -= 48; //减少”0“的charCode
        if (cur.edges[c]) {
          cur = cur.edges[c];
        } else {
          return 0;
        }
      }
      return cur.numEnd;
    } else {
      return 0;
    }
  }
}

class TrieNode {
  constructor() {
    this.numPass = 0;//有多少个单词经过这节点
    this.numEnd = 0; //有多少个单词就此结束
    this.edges = [];
    this.value = ""; //value为单个字符
    this.isEnd = false;
  }
}