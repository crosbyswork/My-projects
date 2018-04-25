/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 13
   Case Problem 1

   Author: Elise Howard
   Date:   3/1/2015

   Function List
   =============

   startup()
      Run when the Web page is loaded; applies the onclick
      event handlers to the font buttons.

   resizeText()
      Changes the inline font-size style for the document body,
      based on the value of the font image button being clicked.
	
*/


/* Run the startup() function when the browser loads the page */

window.onload = startup;

function startup() {

   var fontButtons = document.getElementsByClassName("fontsizer");
   for (var i = 0; i < fontButtons.length; i++) {
      fontButtons[i].onclick = resizeText;
   }

}

function resizeText() {
   /* Determine the numeric value of the font image button being clicked */
   var fontChange = parseFloat(this.value);

   /* If no default font size has been defined for the document body,
      set the default font size to 1.0em */
   if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.0em";
   }

   /* Determine the numeric value of the font size of the document
      body */
   var currentFontSize = parseFloat(document.body.style.fontSize);

   /* Change the document body font size by the value of the fontChange
      variable */
   document.body.style.fontSize = currentFontSize + fontChange + "em";
}
      
