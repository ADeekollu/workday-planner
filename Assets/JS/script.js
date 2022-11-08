

$(document).ready(function(){
  $(".saveBtn").on("click", function(){
    var time = $(this).parent().attr("id")
    var value = $(this).siblings(".input").val()
    localStorage.setItem(time, value)    
  })

  function checkTime() {
    var currentHour = dayjs().hour()
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id"))
      if (blockHour < currentHour) {
        $(this).addClass("past")
      }      
      else if (blockHour === currentHour) {
        $(this).removeClass("past")
        $(this).addClass("present")
      }
      else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")        
      }

    })
  }
  checkTime();
  setInterval(checkTime, 60000)

  $("#9 .input").val(localStorage.getItem("9"))
  $("#10 .input").val(localStorage.getItem("10"))
  $("#11 .input").val(localStorage.getItem("11"))
  $("#12 .input").val(localStorage.getItem("12"))
  $("#13 .input").val(localStorage.getItem("13"))
  $("#14 .input").val(localStorage.getItem("14"))
  $("#15 .input").val(localStorage.getItem("15"))
  $("#16 .input").val(localStorage.getItem("16"))
  $("#17 .input").val(localStorage.getItem("17"))

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"))
})



