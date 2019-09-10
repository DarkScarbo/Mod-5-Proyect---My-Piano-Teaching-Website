// Form Business Logic

const getCurrentDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  const newToday = dd + "-" + mm + "-" + yyyy;
  return newToday;
};

const getCurrentTime = () => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  return time;
};

const checkDate = (date, startTime) => {
  const currentDate = getCurrentDate()
    .split("-")
    .reverse()
    .join("-");
  const dateReversed = date
    .split("-")
    .reverse()
    .join("-");
  const checkDate =
    currentDate.localeCompare(dateReversed) === -1 ||
    (currentDate.localeCompare(dateReversed) === 0 &&
      getCurrentTime().localeCompare(startTime) === -1); // Checks if date and time are not in the past.

  return checkDate;
};

const checkTime = (startTime, endTime) => {
  return startTime.localeCompare(endTime) === -1; // Cheks if the end time is after the start time.
};

const checkForm = (date, startTime, endTime) => {
  const dateRe = /^\d{2}-\d{2}-\d{4}$/; // Checks if the date is valid.
  const timeRe = /^\d{1,2}:\d{2}([ap]m)?$/; // Cheks if the time is valid.

  if (date.match(dateRe) && startTime.match(timeRe) && endTime.match(timeRe)) {
    return true;
  } else {
    return false;
  }
};

// Sort Business Logic

const sortBookings = (bookings, sortBy) => {
  const byDate = (a, b) => a.date.localeCompare(b.date);
  const byStatus = (a, b) => a.confirmed.localeCompare(b.confirmed);
  const byStudent = (a, b) => a.student_name.localeCompare(b.student_name);
  const bookingsCopy = [...bookings];

  if (sortBy === "Date") bookingsCopy.sort(byDate).reverse();
  if (sortBy === "Status") bookingsCopy.sort(byStatus).reverse();
  if (sortBy === "Student") bookingsCopy.sort(byStudent);

  return bookingsCopy;
};

const teacherBookings = students => {
  const bookingsArray = students.map(student =>
    student.my_bookings.map(booking => booking)
  );

  return bookingsArray.flat();
};

module.exports = {
  getCurrentDate,
  getCurrentTime,
  checkDate,
  checkForm,
  checkTime,
  sortBookings,
  teacherBookings
};
