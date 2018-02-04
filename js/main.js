"use strict";

var ipsumStrings = ['sentence one words words ', 'sentence three yay yaya yaya ', 'heres another sentence ', 'sentence yay yay yay yay '];

function buildSentence() {
    var sentenceText = ipsumStrings.slice().sort(function () {
        return 0.5 - Math.random();
    }).slice(0, 3).join(' ');

    return sentenceText.charAt(0).toUpperCase() + sentenceText.slice(1);
}

function buildParagraph() {
    var numSentences = Math.floor(Math.random() * (6 - 3 + 1) + 3),
        lines = '';
    var paragraph = '';
    for (var i = 0; i < numSentences; i++) {
        paragraph = paragraph + buildSentence();
    }
    return paragraph;
};

var form = document.querySelector('#paragraph-select');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelector('.ipsum').innerHtml = '';
    var count = document.querySelector('#paragraph-count').value;
    for (var i = 0; i < count; i++) {
        document.querySelector('.ipsum').innerHTML += '<p>' + buildParagraph() + '</p>';
    }
});