const assert = require("chai").assert;
const bookings_bl = require(`../src/bus-logic/bookings_bl`);
console.log(bookings_bl);

const date_one = "09-09-2119";
const date_two = "09-09-2019";
const time_one = "17:30";
const time_two = "19:00";

const sortByDate = "Date";
const sortByStatus = "Status";
const sortByStudent = "Student";
const bookings = [
  {
    date: "10-09-2019",
    confirmed: "",
    student_name: "Dunia"
  },
  {
    date: "12-09-2019",
    confirmed: "Yes",
    student_name: "Harriet"
  },
  {
    date: "14-09-2019",
    confirmed: "",
    student_name: "Fran"
  }
];

const students = [
  {
    name: "Dunia",
    my_bookings: [
      {
        date: "10-09-2019",
        confirmed: "",
        student_name: "Dunia"
      },
      {
        date: "12-09-2019",
        confirmed: "Yes",
        student_name: "Harriet"
      }
    ]
  },
  {
    name: "Fran",
    my_bookings: [
      {
        date: "14-09-2019",
        confirmed: "",
        student_name: "Fran"
      }
    ]
  }
];

const getCurrentDateResult = bookings_bl.getCurrentDate();
const getCurrentTimeResult = bookings_bl.getCurrentTime();

describe("bookings_bl", function() {
  // getCurrentDate

  it("getCurrentDate should return a string.", function() {
    let result = getCurrentDateResult;
    assert.typeOf(result, "string");
  });

  it("getCurrentDate returning value should have a length of 10.", function() {
    let result = getCurrentDateResult;
    assert.equal(result.length, 10);
  });

  it("getCurrentDate characters number 3 and 6 must be /-/.", function() {
    let result = getCurrentDateResult;
    assert.equal(result[2], "-");
    assert.equal(result[5], "-");
  });

  // getCurrentTime

  it("getCurrentTime should return a string.", function() {
    let result = getCurrentTimeResult;
    assert.typeOf(result, "string");
  });

  it("getCurrentTime returning value should have a length of at least 4.", function() {
    let result = getCurrentTimeResult;
    assert.isAtLeast(result.length, 4);
  });

  it("getCurrentDate character number 3 must be /:/", function() {
    let result = getCurrentTimeResult;
    assert.equal(result[2], ":");
  });

  // checkDate

  it("checkDate should return a boolean.", function() {
    let result = bookings_bl.checkDate(date_one, time_one);
    assert.typeOf(result, "boolean");
  });

  it("checkDate should return true if the date is not in the past.", function() {
    let result = bookings_bl.checkDate(date_one, time_one);
    assert.isTrue(result);
  });

  it("checkDate should return false if the date is not in the past.", function() {
    let result = bookings_bl.checkDate(date_two, time_one);
    assert.isFalse(result);
  });

  // checkTime

  it("checkTime should return a boolean.", function() {
    let result = bookings_bl.checkTime(time_one, time_two);
    assert.typeOf(result, "boolean");
  });

  it("checkTime should return true if the start time is before the end time.", function() {
    let result = bookings_bl.checkTime(time_one, time_two);
    assert.isTrue(result);
  });

  it("checkTime should return false if the start time is before the end time.", function() {
    let result = bookings_bl.checkTime(time_two, time_one);
    assert.isFalse(result);
  });

  // cheks

  it("check should return a boolean.", function() {
    let result = bookings_bl.checks(date_one, time_one, time_two);
    assert.typeOf(result, "boolean");
  });

  // sortBookings

  it("sortBookings should return an array.", function() {
    let result = bookings_bl.sortBookings(bookings, sortByDate);
    assert.isArray(result);
  });

  it("sortBookings should return a bookings array sorted by date.", function() {
    let result = bookings_bl.sortBookings(bookings, sortByDate);
    assert.equal(result[0], bookings[2]);
    assert.equal(result[1], bookings[1]);
    assert.equal(result[2], bookings[0]);
  });

  it("sortBookings should return a bookings array sorted by status.", function() {
    let result = bookings_bl.sortBookings(bookings, sortByStatus);
    assert.equal(result[0], bookings[1]);
    assert.equal(result[1], bookings[2]);
    assert.equal(result[2], bookings[0]);
  });

  it("sortBookings should return a bookings array sorted by student.", function() {
    let result = bookings_bl.sortBookings(bookings, sortByStudent);
    assert.equal(result[0], bookings[0]);
    assert.equal(result[1], bookings[2]);
    assert.equal(result[2], bookings[1]);
  });

  // teacherBookings

  it("teacherBookings should return an array.", function() {
    let result = bookings_bl.teacherBookings(students);
    assert.isArray(result);
  });

  it("teacherBookings should return an array with all the bookings.", function() {
    let result = bookings_bl.teacherBookings(students);
    assert.equal(result[0], students[0].my_bookings[0]);
    assert.equal(result[1], students[0].my_bookings[1]);
    assert.equal(result[2], students[1].my_bookings[0]);
  });
});
