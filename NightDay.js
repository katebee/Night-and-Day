
var Calendar = (function () {
   var displayDate = function () {
       var currentDate = new Date();
       var year = currentDate.getFullYear();
       var month = 1 + currentDate.getMonth();
       if (month < 10) {
           month = "0" + month;
       }
       var date = currentDate.getDate();
       if (date < 10) {
           date = "0" + date;
       }
       var calendarDiv = document.getElementById('calendar');
       calendarDiv.innerText = year + "-" + month + "-" + date;
   }

   var displayDay = function () {
     var currentDay = new Date();
     var day = currentDay.getDay();
     switch (day) {
         case 0:
             day = "SUNDAY";
             break;
         case 1:
             day = "MONDAY";
             break;
         case 2:
             day = "TUESDAY";
             break;
         case 3:
             day = "WEDNESDAY";
             break;
         case 4:
             day = "THURSDAY";
             break;
         case 5:
             day = "FRIDAY";
             break;
         case 6:
             day = "SATURDAY";
             break;
        default:
          throw "Error passed by core JavaScript (Date methods); be very afraid.";
     }
     var dayDiv = document.getElementById('day');
     dayDiv.innerText = day;
   }
   return {
     displayDate: displayDate,
     displayDay: displayDay
   };
}());

var Clock = (function () {
   var hours;
   var minutes;
   var seconds;
   var displayTime = function () {
       var currentTime = new Date();
       hours = currentTime.getHours();
       if (hours < 10) {
           hours = "0" + hours;
       }
       minutes = currentTime.getMinutes();
       if (minutes < 10) {
           minutes = "0" + minutes;
       }
       seconds = currentTime.getSeconds();
       if (seconds < 10) {
           seconds = "0" + seconds;
       }
       var clockDiv = document.getElementById('clock');
       clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
   };
   var sunMoonEffect = function () {
       if (hours >= 8 || hours <= 20 ) {
         $('#orb').removeClass('moon').addClass('sun');
         $('#sunMoonEffect').removeClass('night').addClass('day');
         $('.sunHalo').addClass('visible');
         console.log("Day time!");
       }
       else {
         $('#orb').removeClass('sun').addClass('moon');
         $('#sunMoonEffect').removeClass('day').addClass('night');
         $('.moonspot').addClass('visible');
         console.log("Night time!");
       }
   };
   return {
       //public methods
       displayTime: displayTime,
       sunMoonEffect: sunMoonEffect
   };
}()); // Immediately-Invoked-Function-Expression

// ------------------ On load -----------------------------

$(document).ready(function () {
  // causes a slight delay if combined into a single function, leave as is.
    Clock.displayTime();
    setInterval(Clock.displayTime, 1000);
    Calendar.displayDate();
    setInterval(Calendar.displayDate, 1000);
    Calendar.displayDay();
    setInterval(Calendar.displayDay, 1000);

    Clock.sunMoonEffect();
    setInterval(Clock.sunMoonEffect, 1000);
});
