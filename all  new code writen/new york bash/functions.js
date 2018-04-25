/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 11
   Tutorial Case

   Author: David Crosby
   Date:   3/1/2017


   Function List:
   showDate(dateObj)
      Returns the current date in the format mm/dd/yyyy

   showTime(dateObj)
      Returns the current time in the format hh:mm:ss a.m./p.m.

   calcDays(currentDate)
      Returns the number of days between the current date and January 1st
      of the next year

*/
      function showDate(dateObj) {
         thisDate = dateObj.getDate();
         thisMonth = dateObj.getMonth()+1;
         thisYear = dateObj.getFullYear();
         return thisMonth + "/" + thisDate + "/" + thisYear;
      }

      function showTime(dateObj) {
         thisSecond = dateObj.getSeconds();
         thisMinute = dateObj.getMinutes();
         thisHour = dateObj.getHours();
         return thisHour + ":" + thisMinute + ":" + thisSecond;
      }

      function calcDays(currentDate) {

         // create a Date Object for January 1 of the next year
         newYear = new Date("January 1, 2015");
         nextYear = currentDate.getFullYear() + 1;
         newYear.setFullYear(nextYear);
         // calculate the difference between CurrentDate and January 1
         days = (newYear - currentDate)/(1000*60*60*24);

         return days;
      }
