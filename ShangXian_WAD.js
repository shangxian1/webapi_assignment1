const timetableController = require("./timetableModule.js");

//Function 1: Add Class
const addedClass = timetableController.addClass("Workplace Digital Skills","EGC155","2:00","Siew Peng Shorn");
console.log(addedClass+" added!");
console.log("");

//Function 2: List all classes
timetableController.listClass().forEach((cls, index) => {
  console.log(
    `${index + 1}. ${cls.modName} [${cls.modCode}] - Time: ${cls.time} / Tutor: ${cls.tutor}`
  );
});



