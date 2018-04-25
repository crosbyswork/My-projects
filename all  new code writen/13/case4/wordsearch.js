/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 13
   Case Problem 4

   Author: Pete Burnham
   Date:   3/1/2015

   Function List
   =============

   drawWordSearch(letters, words)
      Function to create a Web table containing hidden words where
      letters is a multi-dimensional array containing the grid of
      letters and words is a multi-dimensional array specifying
      the location of the hidden words in the puzzle

	
*/


window.onload = init;

function init() {
   document.querySelectorAll("aside h1")[0].innerHTML = puzzleTitle;
   document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
   document.getElementById("wordList").innerHTML = showList(wordList);

   setupEvents();
}


function drawWordSearch(letters, words) {
   var rowSize = letters.length;
   var colSize = letters[0].length;

   var htmlCode = "<table id='wordsearchtable'>";

   for (var i = 0; i < rowSize; i++) {
      htmlCode += "<tr>";

      for (var j = 0; j < colSize; j++) {
         if (words[i][j] == " ") {
            htmlCode += "<td>";
         } else {
            htmlCode += "<td class='wordCell'>";
         }
         htmlCode += letters[i][j];
         htmlCode += "</td>";
      }

      htmlCode += "</tr>";
   }
   htmlCode += "</table>";

   return htmlCode;
}


function setupEvents() {

   var letterCells = document.querySelectorAll("table#wordsearchtable td");

   for (var i = 0; i < letterCells.length; i++) {
      letterCells[i].onclick = highlightCell;
   }

   var wordListCells = document.querySelectorAll("ul#wordsearchlist > li");

   for (var i = 0; i < wordListCells.length; i++) {
      wordListCells[i].onclick = strikeout;
   }
   
   document.getElementById("solve").onclick = showSolution;

}

function showSolution() {
   var allWordCells = document.querySelectorAll(".wordCell");

   for (var i = 0; i < allWordCells.length; i++) {
      allWordCells[i].style.border = "1px solid black";
      allWordCells[i].style.backgroundColor = "rgb(221, 141, 141)";
   }

}


function highlightCell() {
   if (this.style.border == "") {
      this.style.border = "1px solid black";
      this.style.backgroundColor = "rgb(221, 221, 141)";
   } else {
      this.style.border = "";
      this.style.backgroundColor = "white";
  }
}


function strikeout() {
   if (this.style.textDecoration == "") {
      this.style.textDecoration = "line-through";
   } else {
      this.style.textDecoration = "";
   }
}

function showList(list) {
   var htmlCode = "<ul id='wordsearchlist'>";

   for (var i = 0; i < list.length; i++) {
      htmlCode += "<li>" + list[i] + "</li>";
   }

   htmlCode += "</ul>";

   return htmlCode;
}

