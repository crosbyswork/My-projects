/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 13
   Review Assignment

   Author: Rebecca Peretz
   Date:   3/1/2015

   Function List
   =============

   init()
      Run when the Web page is loaded; displays puzzle 1
      and loads the event handlers for the Web page buttons.

   swapPuzzle()
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   setupPuzzle()
      Sets up a new puzzle, adding the onclick event handlers for
      every puzzle cell.

   changeBackground()
      Changes the cell background from grey to circled to black and
      back to grey again. Checks the puzzle for a complete solution.

   peek()
      Temporarily displays incorrect cells with the numbers highlighted
      in a red font.

   unpeek()
      Returns the puzzle to its original state prior to peeking.

   showSolution()
      Removes all inline background color styles from the puzzle, showing
      the complete solution.

   checkSolution()
      Checks the current state of the puzzle, determining whether it 
      respreents a complete solution.

   drawHitori(numbers, blocks)
      Returns a text string of the HTML code to
      display a Hitori Web table based on the contents of
      multi-dimensional arrays: numbers and blocks.
	
*/


/* Run the init() function when the browser loads the page */
window.onload = init;

function init() {
   /* Write the first puzzle data into the Web page */
   document.getElementsByTagName("h1")[0].innerHTML = "Hitori Puzzle 1";
   document.getElementsByTagName("h2")[0].innerHTML = hitori1Rating;

   /* Display the first puzzle using the drawHitori() function  */
   document.getElementById("puzzle").innerHTML = drawHitori(hitori1Numbers, hitori1Blocks);

   /* Add event handlers for the puzzle buttons */
   var puzzleButtons = document.getElementsByClassName("puzzles");

   for (var i = 0; i < puzzleButtons.length; i++) {
      puzzleButtons[i].onclick = swapPuzzle;
   }

   /* Set up the initial appearance of the first puzzle */
   setupPuzzle();

   /* Add an event handler to the Peek! button */
   document.getElementById("peek").onclick = peek;

   /* Add an event handler to the Show Solution button */
   document.getElementById("solve").onclick = showSolution;
}


function swapPuzzle() {
   if (confirm("You will lose all of your work on the puzzle! Continue?")) {
      /* Determine the puzzle to show based on the button's id value */
      var title = "Hitori " + this.value;
      var rating = eval(this.id + "Rating");
      var numbers = eval(this.id + "Numbers");
      var blocks = eval(this.id + "Blocks");

      /* Write the puzzle data into the Web page */
      document.getElementsByTagName("h1")[0].innerHTML = title;
      document.getElementsByTagName("h2")[0].innerHTML = rating;

      /* Display the puzzle using the drawGrid() function  */
      document.getElementById("puzzle").innerHTML = drawHitori(numbers, blocks);

      /* Set up the initial appearance of the puzzle */
      setupPuzzle();
   }
}

function setupPuzzle() {
   /* Match all of the data cells in the puzzle */
   var puzzleCells = document.querySelectorAll("#hitoriGrid td");

   /* Set the initial color of each cell to grey */
   for (var i = 0; i < puzzleCells.length; i++) {
      puzzleCells[i].style.backgroundColor = "rgb(211, 211, 211)";
      puzzleCells[i].style.color = "black";
      puzzleCells[i].style.backgroundImage = "none";

      /* Change the color with each click */
      puzzleCells[i].onclick = changeBackground;

   }
}

function changeBackground() {
   /* Determine the current background color of the data cell */
   var bColor = this.style.backgroundColor;

   /* If the cell is grey, make it circled, 
      if the cell is circled, make it black,
      if the cell is black, make it grey */

   if (bColor == "rgb(211, 211, 211)") {
      this.style.backgroundColor = "white";
      this.style.backgroundImage = "url(circle.png)";
      this.style.color = "black";
   }
   else if (bColor == "white") {
      this.style.backgroundColor = "black";
      this.style.backgroundImage = "none";
      this.style.color = "white";      
   }
   else {
      this.style.backgroundColor = "rgb(211, 211, 211)";
      this.style.backgroundImage = "none";
      this.style.color = "black";         
   }

   /* Check the puzzle solution */
   checkSolution();
}

function checkSolution() {
   /* Create a collection of all puzzle cells */
   var allCells = document.querySelectorAll("#hitoriGrid td");

   /* Set the initial solved state of the puzzle to true */
   var solved = true;

   /* Loop through the puzzle cells, exiting when an incorrect
      cell is found, setting the solved variable to false */

   for (var i = 0; i < allCells.length; i++) {
      var cellColor = allCells[i].style.backgroundColor;
      var cellClass = allCells[i].className;

      /* A cell is incorrect if it is in the block class and is not black
         or in the circle class and is not white */
      if ( (cellClass == "blocks" && cellColor !== "black") || 
           (cellClass == "circles" && cellColor !== "white")) {
         solved = false;
         break;
      }
   }

   /* If solved is still true after the loop, display an alert box */
   if (solved) alert("Congratulations! You solved the puzzle!");
}


function peek() {
   /* Create collection of cells that are blocks */
   var blockCells = document.querySelectorAll("#hitoriGrid td.blocks");

   /* Create collection of cells that are circles */
   var circleCells = document.querySelectorAll("#hitoriGrid td.circles");

   /* Display every block cell in a red font */
   for (var i = 0; i < blockCells.length; i++) {
      if (blockCells[i].style.backgroundColor == "white") 
      blockCells[i].style.color = "red";
   }

   /* Display every incorrect circle cell in a red font */
   for (var i = 0; i < circleCells.length; i++) {
      if (circleCells[i].style.backgroundColor == "black") 
      circleCells[i].style.color = "red";
   }

   /* Remove the hints after 0.5 seconds */
   setTimeout("unpeek()", 500);
}

function unpeek() {
   /* Create collection of all puzzle data cells */
   var allCells = document.querySelectorAll("#hitoriGrid td");

   /* Change all cells with red fonts back to either 
      white text or black text depending on the class */
   for (var i = 0; i < allCells.length; i++) {
      if (allCells[i].style.color == "red") {
         if (allCells[i].className == "blocks") allCells[i].style.color = "black"
         else allCells[i].style.color = "white";
      }
   }
}

function showSolution() {
   /* Create a collection of all puzzle data cells */
   var circleCells = document.querySelectorAll("#hitoriGrid td.circles");
   var blockCells = document.querySelectorAll("#hitoriGrid td.blocks");
   
   for (var i = 0; i < circleCells.length; i++) {
      circleCells[i].style.color = "black";
      circleCells[i].style.backgroundColor = "white"
      circleCells[i].style.backgroundImage = "url(circle.png)";
   }

   for (var i = 0; i < blockCells.length; i++) {
      blockCells[i].style.color = "white";
      blockCells[i].style.backgroundColor = "black"
      blockCells[i].style.backgroundImage = "none";
   }

}




function drawHitori(numbers, blocks) {

   /* Initial HTML String for the Hitori Puzzle */
   var htmlString = "";

   /* numbers is a multidimensional array containing the
      Hitori numbers; blocks is a corresponding 
      multidimensional array containing the location of the
      blocks which are indicated by the # character.
      Non-blocking cells are indicated by a blank character.
  */

   /* Create a Web table with the id, hitoriGrid, containing
      the numeric values. Blocks cells have the class name,
      blocks. Non-blocking cells have the class name, circles
  */

   var totalRows = numbers.length;
   var totalCols = numbers[0].length;
   htmlString = "<table id='hitoriGrid'>";
   

   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr>";

      for (var j = 0; j < totalCols; j++) {
         if (blocks[i][j] == "#") htmlString += "<td  class='blocks'>"
         else htmlString += "<td class='circles'>";

         htmlString += numbers[i][j];
         htmlString +="</td>";
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";

   return htmlString;
}
