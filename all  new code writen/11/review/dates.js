/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 11
   Review Assignment

   Author: David Crosby
   Date:   3/1/2017

   Function List:
   showDateTime(time)
      Returns the date in a text string formatted as:
      mm/dd/yyyy at hh:mm:ss am

   changeYear(today, holiday)
      Changes the year value of the holiday object to point to the
      next year if it has already occurred in the present year

   countdown(stop, start)
      Displays the time between the stop and start date objects in the
      text format:
      dd days, hh hrs, mm mins, ss secs
*/

function showDateTime(time) {
   date = time.getDate();
   month = time.getMonth()+1;
   year = time.getFullYear();

   second = time.getSeconds();
   minute = time.getMinutes();
   hour = time.getHours();

   ampm = (hour < 12) ? " a.m." : " p.m.";
   hour = (hour > 12) ? hour - 12 : hour;
   hour = (hour == 0) ? 12 : hour;

   minute = minute < 10 ? "0"+minute : minute;
   second = second < 10 ? "0"+second : second;

   return month+"/"+date +"/"+year+" at "+hour+":"+minute+":"+second+ampm;
}

function changeYear(today, holiday) {
   year = today.getFullYear();
   holiday.setFullYear(year);
   year = (holiday < today) ? year+1 : year;
   holiday.setFullYear(year);
}

function countdown(start, stop) {
   time = stop - start;
   days = time/(1000*60*60*24);
   hours = (days - Math.floor(days))*24;
   minutes = (hours - Math.floor(hours))*60;
   seconds = (minutes - Math.floor(minutes))*60;
   return parseInt(days)+" days, "+parseInt(hours)+" hrs, "+parseInt(minutes)+" mins, "+parseInt(seconds)+" secs";
}






