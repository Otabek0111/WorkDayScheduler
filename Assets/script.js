// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// Get current date and time
// Retrieve the current date and time and then display the current date in a format at the top of the page using the toLocaleDateString method.
const currentDate = new Date();
function updateCurrentDate() {
  const currentDayElement = document.querySelector(".currentDay");
  const dateForm = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const currentDate = new Date();
  currentDayElement.textContent = currentDate.toLocaleDateString(
    "en-US",
    dateForm
  );
}

updateCurrentDate(); // Initial call to display the date/time immediately

setInterval(updateCurrentDate, 1000); // Update the date every second



// Function to check the time status (past, present, future)
function checkTimeStatus(hour, isAM) {
  const currentHour = new Date().getHours();
  const hour24 = isAM ? hour : hour + 12; // Convert to 24-hour format if PM
    
  console.log(hour24);
  console.log(currentHour);

  if (hour24 < currentHour) {
    return 'past';

  } else if (hour24 === currentHour ) {
    return 'present';

  } else if (hour24 > currentHour) {
    return 'future';

  } else {
    return ''; // Default (no class applied)
  }
}




const timeBlocks = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function updateColorCoding() {
  const currentHour = new Date().getHours(); // Get the current hour
  const isAM = new Date().getHours() < 12; // Check if it's currently AM

  timeBlocks.forEach((hour) => {
    const timeBlockElement = document.getElementById(`hour-${hour}`);

    console.log(timeBlockElement);

    const timeStatus = checkTimeStatus(hour, isAM);

    console.log(`Hour-${hour} Status: ${timeStatus}`);

    
    console.log(checkTimeStatus(hour, isAM));
    // Remove all possible status classes before adding the correct one
    timeBlockElement.classList.remove("past", "present", "future");

    // Add the appropriate status class
    timeBlockElement.classList.add(timeStatus);
  });
}
updateColorCoding();
