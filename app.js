const classController = require("./ShangXian_classes.js");

// Add Class
console.log("");
const addedClass = classController.addClass("Workplace Digital Skills", "EGC155", "10/11/2025","2:00","Jim");
console.log(addedClass + " added");
console.log("");

// Reschedule classes
classController.rescheduleClass("Calculus", "12/11/2025", "09:30");
// List classes to show rescheduled class
console.log("Updated timetable:");
classController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

// Find class by modName
const mod = classController.searchClass("electronics");
console.log("Search Results:")
mod.forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`)
});
console.log("");

// Remove class by modCode
const remove = classController.removeClass("Workplace Digital Skills");
console.log(`Removed class: ${remove.modName}`);
console.log("");

// List all classes
console.log("Classes list:")
classController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Date: ${cls.date} | Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");
