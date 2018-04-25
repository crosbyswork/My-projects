/*
   New Perspectives on HTML, XHTML, and JavaScript
   Tutorial 11
   Case Problem 4

   Author: David Crosby
   Date:   3/1/2017

   Function List:
   daysDiff(start, stop)
      Calculates the number of days, rounded down the next lowest integer, 
      between a starting date and stopping date.

   hoursDiff(start, top)
      Calculates the number of hours left in the current day rounded down 
      to the next lowest integer between a starting date and the stopping date.

   minutesDiff(start, stop)
      Calculates the number of minutes left in the current hour rounded down 
      to the next lowest integer between a starting date and the stopping date.

   showDate(time)
      Displays the value of the time object in the format:
      mm/dd/yyyy

   showTime(time)
      Displays the value of the time object in the format:
      hh:mm am/pm
*/

function daysDiff(start, stop) {
   // calculate the starting date and the stopping date
      return Math.floor((stop - start)/(1000*60*60*24));
}

function hoursDiff(start, stop) {
   // calculate the hours left in the current day between start and stop dates
      var daysLeft = (stop-start)/(1000*60*60*24);
      return Math.floor((daysLeft - daysDiff(start, stop))*24);
}

function minutesDiff(start, stop) {
   // calculate the minutes left in the current hour between start and stop dates
      var daysLeft = (stop-start)/(1000*60*60*24);
      var hoursLeft = (daysLeft - daysDiff(start, stop))*24;
      return Math.floor((hoursLeft - hoursDiff(start, stop))*60);
}


function showDate(dateObj) {
   thisDate = dateObj.getDate();
   thisMonth = dateObj.getMonth()+1;
   thisYear = dateObj.getFullYear();
   return thisMonth + "/" + thisDate + "/" + thisYear;
}

function showTime(dateObj) {
   thisSecond=dateObj.getSeconds();
   thisMinute=dateObj.getMinutes();
   thisHour=dateObj.getHours();

   // change thisHour from 24-hour time to 12-hour time by:
   // 1) if thisHour < 12 then set ampm to " a.m." otherwise set it to " p.m."
   var ampm = (thisHour < 12) ? " a.m." : " p.m.";

   // 2) subtract 12 from the thisHour variable
   thisHour = (thisHour > 12) ? thisHour - 12 : thisHour;

   // 3) if thisHour equals 0, change it to 12
   thisHour = (thisHour == 0) ? 12 : thisHour;

   // add leading zeros to minutes and seconds less than 10
   thisMinute = thisMinute < 10 ? "0"+thisMinute : thisMinute;
   thisSecond = thisSecond < 10 ? "0"+thisSecond : thisSecond;

   return thisHour + ":" + thisMinute + ":" + thisSecond + ampm;
}





