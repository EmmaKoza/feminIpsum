"use strict";

var feminipsum = {};
//array of all the sentences
var sentences = ['sentence one words words', 'sentence three yay yaya yaya', 'heres another sentence', 'sentence yay yay yay yay'];

//paragraph array var for final ipsum 
var paragraph = [];

//randomly sort through the array  
//build the strings into sentences (capital first letter and .)
function buildSentence(array) {
    array.sort(function () {
        return 0.5 - Math.random();
    });
    //build a sentence from the random strings
    array = array.slice(0, 3).join(' ') + '. ';
    //capitalize the first letter in the array
    array = array.charAt(0).toUpperCase() + array.slice(1);
    console.log(array);
}

buildSentence(sentences);

//go through the array 5 times per paragraph

//let the user decide how many paragraphs there will be