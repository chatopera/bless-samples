// -*- coding: utf-8 -*-
//===============================================================================
//
// Copyright (c) 2017 <> All Rights Reserved
//
//
// File: /Users/hain/tmp/aa.js
// Author: Hai Liang Wang
// Date: 2019-05-15:14:28:32
//
//===============================================================================
/**
 *
 */
const argv = process.argv;
const curdir = __dirname;
const util = require("util");

var a = require("./lib/a");
var b = require("./lib/b");
var c = require("./lib/subdir/c");
var figlet = require("figlet");
var printlib = require("./lib");
var Word2vec = require("node-word2vec-reader");

console.log("foo");
figlet("Call Back", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// main function
async function main() {
  a();
  b();
  c();
  printlib("test index.js");
  figlet("Async", function(err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

  // consume c++ addon
  var word2vec = new Word2vec();
  word2vec.init("/data/model/word2vec/sohu.news.word2vec.bin");
  let vocabSize = await word2vec.getVocabSize();
  console.log("word2vec vocabSize", vocabSize);
}

console.log("require.main", require.main);
console.log("module", module);

// on main entry
(async function() {
  await main();
})();
