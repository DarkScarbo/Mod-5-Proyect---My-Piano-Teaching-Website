const assert = require("chai").assert;
const bookings_bl = require(`../src/bus-logic/bookings_bl`);
console.log(bookings_bl);

const date = "10-09-2119";
const time_one = "17:30";
const time_two = "19:00";

const bookings = [
  {
    date: "10-09-2119",
    strting: "11:30",
    ending: "13:00",
    student_id: 2,
    student_name: "Harriet",
    student_email: "harriet.ballantyne@gmail.com"
  },
  {
    date: "12-09-2119",
    strting: "17:30",
    ending: "19:00",
    student_id: 3,
    student_name: "Fran",
    student_email: "francisco.costa@gmail.com"
  }
];

const students = [{}];

const getCurrentDateResult = bookings_bl.getCurrentDate();
const getCurrentTimeResult = bookings_bl.getCurrentTime();
const checkDateResult = bookings_bl.checkDate(date, time_one);
// const checkTimeResult = bookings_bl.checkTime(e);
// const checkFormResult = bookings_bl.checkForm(e);

// const sortBookings = bookings_bl.sortBookings();
// const teacherBookings = bookings_bl.teacherBookings();

describe("bookings_bl", function() {
  // getCurrentDate

  it("getCurrentDate should return a string", function() {
    let result = getCurrentDateResult;
    assert.typeOf(result, "string");
  });

  it("getCurrentDate value should have a lenght of 10", function() {
    let result = getCurrentDateResult;
    assert.equal(result.length, 10);
  });

  it("getCurrentDate characters number 3 and 6 must be -", function() {
    let result = getCurrentDateResult;
    assert.equal(result[2], "-");
    assert.equal(result[5], "-");
  });

  // getCurrentTime

  it("getCurrentTime should return a string", function() {
    let result = getCurrentTimeResult;
    assert.typeOf(result, "string");
  });

  it("getCurrentTime value should have a lenght of 5", function() {
    let result = getCurrentTimeResult;
    assert.equal(result.length, 5);
  });

  it("getCurrentDate characters number 3 must be :", function() {
    let result = getCurrentTimeResult;
    assert.equal(result[2], ":");
  });

  // checkDate

  it("checkDate should return a boolean", function() {
    let result = checkDateResult;
    assert.typeOf(result, "boolean");
  });

  it("checkDate should return a true if the date is not in the past", function() {
    let result = checkDateResult;
    assert.isTrue(result, "the date is not in the past");
  });
});
