/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Case Problem 1

   Author:  David Crosby
   Date:     3/1/2017

   Filename: tables.js

   Function List:

   showTable()
      Shows a table of contributors to the Lighthouse

   showSummary()
      Shows a table summarizing the contributions made to the Lighthouse

*/


function showTable() {

   /* Write the table head */
   document.write("<table id='contributors'>");
   document.write("<thead>");
   document.write("<tr><th>Date</th><th>Amount</th><th>First Name</th>");
   document.write("<th>Last Name</th><th>Address</th></tr>");
   document.write("</thead>");

   /* Write the table body */
   document.write("<tbody>"); 

   /* Write each table row */
   for (var i = 0; i < lastName.length; i++) {
      document.write("<tr>");
      document.write("<td>" + date[i] + "</td>");
      document.write("<td class = 'amt'>" + amount[i] + "</td>");
      document.write("<td>" + firstName[i] + "</td>");
      document.write("<td>" + lastName[i] + "</td>");
      document.write("<td>");
      document.write(street[i] + "<br />");
      document.write(city[i]+", " + state[i] + " " + zip[i]);
      document.write("</td>");
      document.write("</tr>");
   }
   document.write("</tbody>");
   document.write("</table>");
}

function showSummary() {

   /* Calculate the total amount */
   var total = 0;
   for (var i = 0; i < amount.length; i++) {
      total+=amount[i];
   }

   /* Write the summary table */
   document.write("<table id='sumTable'>");
   document.write("<tr><th id='sumTitle' colspan='2'>Summary</th></tr>");
   document.write("<tr><th>Contributors</th>");
   document.write("<td>" + lastName.length + "</td></tr>");
   document.write("<tr><th>Amount</th>");
   document.write("<td>$" + total + "</td></tr>");
   document.write("</table>");

}
