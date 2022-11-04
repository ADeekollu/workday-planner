// date and time display

var timeDisplayEl = $('#timeDisplay');

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  displayTime();
  setInterval(displayTime, 1000);

// save/set into local storage

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

})

// function to see which block currently in and if it is past present or in the future compared to the current time

function timeTracker() {
  var currentTime = moment().hour();

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (blockTime === currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");      
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future"); 
    }

  })

}
// get item from local storage

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour9 .description").val(localStorage.getItem("hour10"));
$("#hour9 .description").val(localStorage.getItem("hour11"));
$("#hour9 .description").val(localStorage.getItem("hour12"));
$("#hour9 .description").val(localStorage.getItem("hour13"));
$("#hour9 .description").val(localStorage.getItem("hour14"));
$("#hour9 .description").val(localStorage.getItem("hour15"));
$("#hour9 .description").val(localStorage.getItem("hour16"));
$("#hour9 .description").val(localStorage.getItem("hour16"));

timeTracker();

