function currentHour() {
  const time = moment();
  const timeEl = document.querySelector(".currentDay");

  timeEl.textContent = time.format("dddd MMMM Do, h:mm:ss a");
}

currentHour();
setInterval(currentHour, 1000);


function timeBlock() {
  const liveHour = moment().format("H"); // Use "H" to get the current hour in 24-hour format
  console.log(liveHour);

  const timeBlocks = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  timeBlocks.forEach((block) => {
    const timeBlockEl = document.getElementById(`hour-${block}`); // Assuming you have elements with IDs like "hour-8", "hour-9", etc.
    // console.log(block);
    // console.log(liveHour);

    if (block < liveHour) {
      timeBlockEl.classList.add("past");
      timeBlockEl.classList.remove("present", "future");
    } else if (block == liveHour) { // Use == for loose comparison, as block and liveHour may have different data types
      timeBlockEl.classList.add("present");
      timeBlockEl.classList.remove("past", "future");
    } else {
      timeBlockEl.classList.add("future");
      timeBlockEl.classList.remove("past", "present");
    }
  });
}

timeBlock();



// Using jQuery
$('.saveBtn').on('click', function () {
  // Get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  // Get the id attribute of the parent div element
  var timeId = $(this).parent().attr('id');

  // Save in local storage
  localStorage.setItem(timeId, textValue);
});

// Using plain JavaScript
const saveButtons = document.querySelectorAll(".saveBtn");

saveButtons.forEach(function(saveButton) {
  saveButton.addEventListener('click', function() {
    const parentDiv = this.parentElement; // Get the parent div element
    const inputEl = parentDiv.querySelector('.description'); // Find the child element with class 'description'
    const textValue = inputEl.value;
    const timeId = parentDiv.getAttribute('id');

    localStorage.setItem(timeId, textValue);

    console.log("saved");
  });
});


