
var timeDisplayEl = $('#timeDisplay');
var saveBtn = $(".saveBtn")


// date and time

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  displayTime();
  setInterval(displayTime, 1000);

// save/set into local storage

  saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text;
    var description = $(this).siblings(".description").val;

    localStorage.setItem(time, description);
  });



// function to see which block currently in and if it is past present or in the future compared to the current time

function timeBlock() {
  var currentTime = moment().hour();

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id"));

    if (blockTime < currentTime) {      
      $(this).addClass("past");
    }
    else if (blockTime === currentTime) {      
      $(this).addClass("present");      
    }
    else {      
      $(this).addClass("future"); 
    }

  })

};
// get item from local storage

function saveEvent() {
  
  $(".hour").each(function() {
    var currentHour = $(this).text();
    var currentEvent = localStorage.getItem(currentHour);

    if (currentEvent !== null)
      $(this).siblings(".description").val(currentEvent);
  });
}

timeBlock();
saveEvent();

