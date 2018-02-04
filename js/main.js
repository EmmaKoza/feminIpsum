"use strict";

var sentences = ['sentence one words words ', 'sentence three yay yaya yaya ', 'heres another sentence ', 'sentence yay yay yay yay '];
//paragraph array var for final ipsum
var paragraphs = [];
//array of all the sentences
var feminipsum = {};

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
    paragraphs.push(array);
}

//go through the array 5 times per paragraph
function buildParagraph() {
    //generate random number for sentences in paragraph
    var x = Math.floor(Math.random() * (6 - 3 + 1) + 3),
        lines = '';
    //make a sentences with x  amount of lines
    for (var i = 0; i < x; i++) {
        buildSentence(sentences);
    }
    // console.log(paragraphs);
    writeParagraph(paragraphs);
};
//helper function to normalize and then print paragraph to the page
function writeParagraph(array) {
    array = array.toString().split(',').join('');
    document.querySelector('.ipsum').innerHTML = document.querySelector('.ipsum').innerHTML + '<p>' + array + '</p>';
}

//will build multiple paragraphs with the user's input
function buildMultipleParagraphs(num) {
    paragraphs = [];
    document.querySelector('.ipsum').innerHTML = '';
    for (var i = 0; i < num; i++) {
        buildParagraph();
    }
}

//let the user decide how many paragraphs there will be
function generateText() {
    var form = document.querySelector('#paragraph-select');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var count = document.querySelector('#paragraph-count').value;
        buildMultipleParagraphs(count);
    });
}

generateText();