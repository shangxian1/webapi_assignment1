const timetableController = require("./timetableModule.js");

//Function 1: Add Class
const addedClass = timetableController.addClass("Workplace Digital Skills","EGC155","2:00","Siew Peng Shorn");
console.log(addedClass+" added!");
console.log("");

//Function 2: List all classes
timetableController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modCode} [${cls.modName}] - Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

//Function 3: Find class by modName
const mod = timetableController.findByModName("electronics");
mod.forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Time: ${cls.time} / Tutor: ${cls.tutor}`)
});
console.log("");

//Function 4: Remove class by modCode
const remove = timetableController.removeClass("EGC155");
console.log(`Removed class: ${remove.modCode} [${remove.modName}]`);
console.log("Remaining classes:");
timetableController.listClass().forEach((cls, index) => {
  console.log(`${index + 1}. ${cls.modName} [${cls.modCode}] - Time: ${cls.time} / Tutor: ${cls.tutor}`);
});
console.log("");

//Function 5: Get number of classes
console.log("Total classes:", timetableController.getClass());
console.log("");

//Function 6: Get tutors
const tutors = timetableController.getTutors()
console.log("Tutors:");
tutors.forEach((tutor, index) => {
  console.log(`${index + 1}. ${tutor}`);
})
