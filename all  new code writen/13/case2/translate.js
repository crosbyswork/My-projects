/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 13
   Case Problem 2

   Author:   Eve Granger
   Date:     3/1/2015

   Filename: translate.js


   Function List:


   setup()
      Insert the current week's french phrases into document and set up
      event handlers for the phrases.

   showEnglish()
      Changes all of the English phrases to French

   showFrench()
      Changes all of the French phrases to English

*/


/* Run the setup() function when the page is loaded */
window.onload = setup;

function setup() {
   /* Create collection of ordered list items */
   var questions = document.querySelectorAll("ol li");

   /* Loop though the object collection, setting the id value,
      event handlers, and cursor style */
   for (var i = 0; i < questions.length; i++) {
      questions[i].id = i + "phrase";
      questions[i].onmousedown = showEnglish;
      questions[i].onmouseup = showFrench;
      questions[i].style.cursor = "pointer";
   }
}
  

function showEnglish() {
   /* Determine the phrase number from the list item id */
   var phraseNumber = parseInt(this.id);

   /* Change the text of the list item */
   this.innerHTML = english[phraseNumber];

   /* Change the list item inline styles */
   this.style.fontStyle = "italic";
   this.style.color = "rgb(191, 22, 31)";
}

function showFrench() {
   /* Determine the phrase number from the list item id */
   var phraseNumber = parseInt(this.id);

   /* Change the text of the list item */
   this.innerHTML = french[phraseNumber];

   /* Remove the list item inline styles */
   this.style.fontStyle = "";
   this.style.color = "";
}