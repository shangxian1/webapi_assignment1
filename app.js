const timetableController = require("./ShangXian_classes.js");

// Add Class
console.log("");
const addedClass = timetableController.addClass("Workplace Digital Skills","EGC155","2:00","Siew Peng Shorn");
console.log(addedClass + " added!");
console.log("");

// Reschedule classes
timetableController.rescheduleClass("Calculus", "12/11/2025", "09:30");
// List classes to show rescheduled class
console.log("Updated timetable:");
timetableController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

// Find class by modName
const mod = timetableController.searchClass("electronics");
console.log("Search Results:")
mod.forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`)
});
console.log("");

// Remove class by modCode
const remove = timetableController.removeClass("Workplace Digital Skills");
console.log(`Removed class: ${remove.modName} [${remove.modCode}]`);
console.log("");
// List classes to show updated classes
console.log("Remaining classes:");
timetableController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

// List all classes
console.log("Classes list:")
timetableController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");
