function currentHour() {
  const time = moment();
  const timeEl = document.querySelector(".currentDay");
  timeEl.textContent = time.format("dddd MMMM Do, h:mm:ss a");
}
function timeBlock() {
  const liveHour = moment().format("H"); // Use "H" to get the current hour in 24-hour format
  // console.log(liveHour);
  const timeBlocks = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  timeBlocks.forEach((block) => {
    const timeBlockEl = document.getElementById(`hour-${block}`); // Assuming you have elements with IDs like "hour-8", "hour-9", etc.
    // console.log(block);
    // console.log(liveHour);
    if (block < liveHour) {
      timeBlockEl.classList.add("past");
      timeBlockEl.classList.remove("present", "future");
    } else if (block == liveHour) {
      // Use == for loose comparison, as block and liveHour may have different data types
      timeBlockEl.classList.add("present");
      timeBlockEl.classList.remove("past", "future");
    } else {
      timeBlockEl.classList.add("future");
      timeBlockEl.classList.remove("past", "present");
    }
  });
}
// // Using jQuery
// $(".saveBtn").on("click", function () {
//   // Get nearby values of the description in jQuery
//   var textValue = $(this).siblings(".description").val();
//   // Get the id attribute of the parent div element
//   var timeId = $(this).parent().attr("id");
//   // Save in local storage
//   localStorage.setItem(timeId, textValue);
// });


const saveButtons = document.querySelectorAll(".saveBtn");
saveButtons.forEach(function (saveButton) {
  saveButton.addEventListener("click", function () {
    const parentDiv = this.parentElement; // Get the parent div element
    const inputEl = parentDiv.querySelector(".description"); // Find the child element with class 'description'
    const textValue = inputEl.value;
    const timeId = parentDiv.getAttribute("id");
    localStorage.setItem(timeId, textValue);
    // console.log("saved");
  });
});

// Assuming you have a specific key for each time block (e.g., 'hour8', 'hour9', etc.)
// Get the saved value from local storage when the page loads
window.onload = function () {
  const timeBlockIds = ['hour-8', 'hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17'];

  timeBlockIds.forEach(function (timeId) {
    // Retrieve the saved value from local storage using the timeId as the key
    const savedValue = localStorage.getItem(timeId);
    
    // Check if a value was found in local storage
    if (savedValue !== null) {
      // Populate the corresponding textarea with the saved value
      document.querySelector("#" + timeId + " .description").value = savedValue;
    }
  });
  // console.log("saved value displayed");
};

currentHour();
setInterval(currentHour, 1000);    //refresh time every second
timeBlock();
setInterval(timeBlock, 60000);   //refresh every minute