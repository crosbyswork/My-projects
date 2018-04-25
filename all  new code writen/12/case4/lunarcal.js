/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Case Problem 4

   Author: David Crosby
   Date:   3/1/2017

   Function List:

   writeDate(cDay)
      Writes the date in the form Month Day, Year

   lunar_calendar(cDay)
      Creates the lunar calendar table for the month specified in the
      cDay parameter.

   writeCalTitle(cDay)
      Writes the title row in the calendar table

   writeDayTitle()
      Writes the weekday title rows in the calendar table

   daysInMonth(cDay)
      Returns the number of days in the month from cDay

   writeCalDays(cDay)
      Writes the daily rows in the calendar table, highlighting
      cDay

*/

function writeDate(cDay) {
   var monthName = ["January", "February", "March", "April", "May", 
                    "June", "July", "August", "September", "October",                         "November", "December"];

   var thisMonth=cDay.getMonth();
   var thisYear=cDay.getFullYear();
   var thisDate=cDay.getDate();

   return monthName[thisMonth]+" "+thisDate+", "+thisYear;     
}

function lunar_calendar(cDay) {
   document.write("<table id='calendar_table'>");
   writeCalTitle(cDay);
   writeDayNames()
   writeCalDays(cDay);
   document.write("</table>");
}

function writeCalTitle(cDay) {
   var monthName = ["January", "February", "March", "April", "May", 
                    "June", "July", "August", "September",                                    "October","November", "December"];

   var thisMonth=cDay.getMonth();
   var thisYear=cDay.getFullYear();

   document.write("<tr>");
   document.write("<th id='calendar_head' colspan='7'>");
   document.write(monthName[thisMonth]+" "+thisYear);
   document.write("</th>");
   document.write("</tr>");
}

function writeDayNames() {
   var dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   document.write("<tr>");
   for (var i=0;i<dayName.length;i++) {
      document.write("<th class='calendar_weekdays'>"+dayName[i]+"</th>");
   }
   document.write("</tr>");
}

function daysInMonth(cDay) {
   var thisYear = cDay.getFullYear();
   var thisMonth = cDay.getMonth();
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];
   if (thisYear % 4 == 0) {
      if ((thisYear % 100 !=0) || (thisYear % 400 == 0)) {
         dayCount[1] = 29; // this is a leap year
      }
   }
   return dayCount[thisMonth]; // return the number of days in the month
}

function writeCalDays(cDay) {
   var currentDay = cDay.getDate();

   // determine the starting day of the week
   var dayCount = 1;
   var totalDays = daysInMonth(cDay);
   cDay.setDate(1);              // set the date to the first day of the month
   var weekDay = cDay.getDay();  // the day of week of the first day

   // write blank cells preceding the starting day
   document.write("<tr>");
   for (var i=0; i < weekDay; i++) {
      document.write("<td></td>");
   }

   // write cells for each day of the month
   while (dayCount <= totalDays) {
      // calculate the moon phase image
      moonPhase = "<img src='phase"+calcMPhase(cDay)+".jpg' />";
      // write the table rows and cells
      if (weekDay == 0) document.write("<tr>");

      document.write("<td class='calendar_dates'>"+dayCount+" "+moonPhase+"</td>");

      if (weekDay == 6) document.write("</tr>");

      // move to the next day
      dayCount++;
      cDay.setDate(dayCount);
      weekDay = cDay.getDay();
   }
   
   document.write("</tr>");
}





